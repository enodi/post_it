module Validation
  def validate_signin_params(username, password)
    if username.strip.empty?
      json_response({ message: "Username is required" }, :bad_request)
    elsif password.strip.empty?
      json_response({ message: "Password is required" }, :bad_request)
    end
  end

  def validate_group_params(name)
    if name.empty?
      json_response({ message: "Group name is required" }, :bad_request)
    end
  end
end
