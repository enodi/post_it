class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  include Response
  include ExceptionHandler
  include JsonWebToken

  before_action :authorize_request
  attr_reader :current_user

  private

  def authorize_request
    @current_user = AuthorizeApiRequest.new(request.headers).call[:user]
  end
end
