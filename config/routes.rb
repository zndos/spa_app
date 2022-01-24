Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get '/about', to: 'home#about'
  get '/winter', to: 'home#winter'
  get '/summer', to: 'home#summer'
  # get '/users/sign_out', to: 'home#index'
  resources :profiles
  resources :catches
end
