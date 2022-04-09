class Api::UsersController < ApplicationController

    def rooms
        user = User.find(params[:id])
        render json: user.rooms
    end

    def profile
        profile = User.find(params[:id])
        render json: User.profile
    end 

end
