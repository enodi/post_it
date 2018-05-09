require "rails_helper"

RSpec.describe Group, type: :model do
  let(:group) { create :group }
  let(:group_details) do
    {
      name: group.name,
      description: group.description,
      user_id: group.user.id
    }
  end

  context "Association" do
    it { is_expected.to have_many(:group_members) }
    it { is_expected.to belong_to(:user) }
  end

  context "Validations" do
    it { is_expected.to validate_presence_of(:user_id) }
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_uniqueness_of(:name) }
    it { is_expected.to validate_length_of(:name).is_at_least(4) }
    it { is_expected.to allow_value("Hello world").for(:name) }
  end

  describe "when a user wants to create a new group" do
    context "when user provides valid credetials" do
      it "saves record in the database" do
        group_instance = Group.create(group_details)
        expect(group).to be_valid
        expect(group_instance.name).to eql group_details[:name]
      end
    end
  end
end
