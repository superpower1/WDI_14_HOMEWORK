Rails.application.routes.draw do
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # This means if route is '/', 'home' method in 'pages' controller will be called
  # get '/', to: 'pages#home' same as below
  root to: 'pages#home'

  get '/about', to: 'pages#about'
end
