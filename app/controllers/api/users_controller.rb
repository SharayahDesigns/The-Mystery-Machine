class Api::UsersController < ApplicationController

    def rooms
        user = User.find(params[:id])
        render json: user.rooms
    end

end
