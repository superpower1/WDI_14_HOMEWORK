class PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end

  def new

  end

  def create
    new_pokemon = Pokemon.new
    new_pokemon.species = params[:species]
    new_pokemon.nickname = params[:nickname]
    new_pokemon.level = params[:level]
    if new_pokemon.save
      redirect_to '/'
    else
      render :new
    end
  end

  def search

  end

  def api_search
    result = Pokemon.where("nickname like ?", "%#{params[:nickname]}%")
    render json: {result: result}
  end

  def destroy
    pokemon = Pokemon.find_by(id: params[:id])
    if pokemon.destroy
      render json: {result: "success"}
    end
    
  end
end
