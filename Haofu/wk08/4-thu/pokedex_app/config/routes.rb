Rails.application.routes.draw do
  root 'pokemons#index'
  get '/pokemons/search', to: 'pokemons#search'
  post '/pokemons/search', to: 'pokemons#api_search'
  resources :pokemons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
