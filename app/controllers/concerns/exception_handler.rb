module ExceptionHandler
  extend ActiveSupport::Concern

  class AuthenticationError < StandardError; end
  class MissingToken < StandardError; end
  class InvalidToken < StandardError; end

  included do
    rescue_from ActiveRecord::RecordInvalid do |error|
      error_message = error.message.split(",")[0]

      display_message = error_message.slice(
        error_message.index(":") + 2,
        error_message.size
      )

      if display_message.include?("has already been taken")
        json_response({ message: display_message }, :conflict)
      else
        json_response({ message: error.message }, :unprocessable_entity)
      end
    end

    rescue_from ExceptionHandler::AuthenticationError,
                with: :unauthorized_request
    rescue_from ExceptionHandler::MissingToken, with: :four_twenty_two
    rescue_from ExceptionHandler::InvalidToken, with: :four_twenty_two

    private

    def unauthorized_request(error)
      json_response({ message: error.message }, :unauthorized)
    end
  end
end
