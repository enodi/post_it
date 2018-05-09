module Validation
  def validate_signin_params(username, password)
    if username.strip.empty?
      json_response({ message: "Username is required" }, :bad_request)
    elsif password.strip.empty?
      json_response({ message: "Password is required" }, :bad_request)
    end
  end
end
