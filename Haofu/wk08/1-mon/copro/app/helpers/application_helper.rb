module ApplicationHelper

  def current_user
    User.find_by(id: session[:user_id])
  end

  def user_name(id)
    User.find_by(id: id).name
  end

end
