class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find_by(id: params[:id])
  end

  def new

  end

  def create
    student = Student.new
    student.name = params[:name]
    student.house_id = self.class.sort_hat
    student.img_url = params[:img_url]
    if student.save
      redirect_to '/students'
    else
      render :new
    end
  end

  def self.sort_hat
    House.ids.sample
  end

end
