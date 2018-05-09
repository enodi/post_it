require "rails_helper"

RSpec.describe User, type: :model do
  let(:user) { create :user }
  let(:user_details) do
    {
      fullname: user.fullname,
      email: user.email,
      username: user.username,
      password: user.password
    }
  end

  context "Associations" do
    it { is_expected.to have_many(:group_members) }
    it { is_expected.to have_many(:groups) }
  end

  context "Validations" do
    it { is_expected.to validate_presence_of(:fullname) }
    it { is_expected.to validate_presence_of(:username) }
    it { is_expected.to validate_uniqueness_of(:username) }
    it { is_expected.to validate_length_of(:username).is_at_least(4) }
    it { is_expected.to allow_value("enodi").for(:username) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email) }
    it { is_expected.to allow_value("enodi@gmail.com").for(:email) }
    it { is_expected.to validate_presence_of(:password) }
  end

  context "when the user provides valid credentials" do
    it "returns a valid record" do
      user_instance = User.create(user_details)
      expect(user).to be_valid
      expect(user_instance.fullname).to eql user_details[:fullname]
    end
  end
end
