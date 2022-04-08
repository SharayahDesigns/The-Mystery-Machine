Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

namespace :api do
  get '/rooms', to: 'rooms#index'

  # Get Rooms by User
  get '/users/:id', to: 'users#rooms'

  # Get Questions for Room
  # get '/rooms/:id', 
  
end

end
