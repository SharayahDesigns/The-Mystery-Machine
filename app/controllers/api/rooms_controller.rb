class Api::RoomsController < ApplicationController
    def index
        render json: Room.all
    end

    def show
        room =  Room.find(params[:id])
        render json: room.riddles
    end
end
