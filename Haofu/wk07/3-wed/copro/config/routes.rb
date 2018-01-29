Rails.application.routes.draw do

  resources :likes
  resources :comments
  root to: 'pages#home'
  get '/login', to: 'session#new'
  delete '/logout', to: 'session#destroy'
  post '/session', to: 'session#create'

  # Use 'only' to generate route only for 'new' and 'create'
  resources :projects, only: [:new, :create, :show]
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
