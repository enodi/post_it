class NoAccessController < ApplicationController
  skip_before_action :authorize_request, only: %i{index}

  def index; end
end
