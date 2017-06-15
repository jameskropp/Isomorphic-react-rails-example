# frozen_string_literal: true

class LandingController < ApplicationController
  layout "landing"

  def index
    @images = {
      instagram: path_to_asset('landing/server-instagram'),
      twitter: path_to_asset('landing/server-twitter'),
      medium: path_to_asset('landing/server-medium')
    }
  end
  
  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end
  
end
