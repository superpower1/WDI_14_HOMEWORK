class CommentsController < ApplicationController

  def create
    redirect_to '/login' unless session[:user_id]
    c = Comment.new
    c.user_id = session[:user_id]
    c.project_id = params[:project_id]
    c.body = params[:body]
    c.save
    redirect_to "/projects/#{params[:project_id]}"
  end

end
