class Api::RoomsController < ApplicationController
    def index
        render json: Room.all
    end
end
