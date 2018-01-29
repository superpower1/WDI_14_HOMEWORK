class DishesController < ApplicationController

  def new
  end

  def show
    dish = Dish.find_by(id: params[:id])
    @dish_id = params[:id]
    @name = dish.name
    @img_url = dish.img_url
  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.img_url = params[:img_url]
    if dish.save
      redirect_to '/dishes'
    else
      render :new
    end
  end

  def edit
    @dish_id = params[:id]
  end

  def update
    dish = Dish.find_by(id: params[:id])
    dish.name = params[:name]
    if dish.save
      redirect_to "/dishes/#{params[:id]}"
    else
      render :edit
    end
  end

  def index
    @dish_list = Dish.all
  end

  def destroy
    dish = Dish.find_by(id: params[:id])
    dish.delete
    redirect_to "/dishes"
  end
end
