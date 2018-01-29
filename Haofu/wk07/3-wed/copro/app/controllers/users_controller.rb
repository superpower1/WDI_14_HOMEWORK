class UsersController < ApplicationController

  def new

  end

  def create
    user = User.new
    user.email = params[:email]
    user.password = params[:password]
    user.name = params[:name]
    if user.save
      @user = User.find_by(email: params[:email])
      session[:user_id] = @user.id
      redirect_to '/'
    else
      render :new
    end
  end
end
