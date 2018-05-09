class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index; end

  def show; end

  def create
    user = User.create!(user_params)
    auth_token = JsonWebToken.encode(user_id: user.id)
    response = { message: "User created successfully", auth_token: auth_token }
    json_response(response, :created)
  end

  private

  def user_params
    params.permit(:fullname, :username, :email, :password)
  end
end
