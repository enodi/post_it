class GroupsController < ApplicationController
  include Validation

  skip_before_action :verify_authenticity_token,
                     :authorize_request, only: %i{index}

  def index; end

  def create
    group_name = group_params[:name].strip.capitalize
    group_description = group_params[:description].strip
    user_id = current_user.id
    unless validate_group_params(group_name)
      group = Group.create!(
        group_details(
          group_name,
          group_description,
          user_id
        )
      )
      GroupMember.create!(user_details(user_id, group.id))
      return json_response(
        {
          message: "Group created successfully",
          details: group
        }, :created
      )
    end
  end

  private

  def user_details(user_id, group_id)
    {
      user_id: user_id,
      group_id: group_id
    }
  end

  def group_details(group_name, group_description, user_id)
    {
      name: group_name,
      description: group_description,
      user_id: user_id
    }
  end

  def group_params
    params.permit(:name, :description)
  end
end
