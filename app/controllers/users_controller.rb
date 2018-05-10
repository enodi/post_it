class UsersController < ApplicationController
  include Validation

  skip_before_action :verify_authenticity_token,
                     :authorize_request, only: %i{create authenticate index show}

  def index; end

  def show; end

  def create
    user = User.create!(user_params)
    auth_token = JsonWebToken.encode(
      {
        user_id: user.id,
        username: user.username,
        email: user.email
      }
    )
    response = { message: "User created successfully", auth_token: auth_token }
    json_response(response, :created)
  end

  def authenticate
    username = auth_params[:username]
    password = auth_params[:password]
    unless validate_signin_params(username, password)
      user = User.find_by(username: username)
      if user && user.authenticate(password)
        auth_token = JsonWebToken.encode(
          {
            user_id: user.id,
            username: user.username,
            email: user.email
          }
        )
        return json_response(
          message: "Login successful",
          auth_token: auth_token
        )
      else
        return json_response(
          { message: "Invalid username or password" },
          :unauthorized
        )
      end
    end
  end

  private

  def user_params
    params.permit(:fullname, :username, :email, :password)
  end

  def auth_params
    params.permit(:username, :password)
  end
end
