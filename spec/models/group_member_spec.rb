require "rails_helper"

RSpec.describe GroupMember, type: :model do
  context "Association" do
    it { is_expected.to belong_to(:group) }
    it { is_expected.to belong_to(:user) }
  end
end
