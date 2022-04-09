class Api::UsersController < ApplicationController

    def rooms
        user = User.find(params[:id])
        render json: user.rooms
    end

    def profiles
        profile = render json: User.profiles
    end 

end
