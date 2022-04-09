class Api::UsersController < ApplicationController

    def index
        render json: User.all
    end

    def rooms
        user = User.find(params[:id])
        render json: user.rooms
    end

    def points
        point = render json: User.points
    end 

end
