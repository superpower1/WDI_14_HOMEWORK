require 'sinatra/reloader'
require 'sinatra'
require 'httparty'

get '/' do
  erb :index
end

get '/movie' do
  movie_id = params[:movie_id]
  result = HTTParty.get("http://www.omdbapi.com/?apikey=2f6435d9&i=#{movie_id}").parsed_response

  def render_error(msg)
    @error_msg = msg
    erb :not_found
  end

  def render_normal(result)
    @info = result.select do |key, value|
      ["Title", "Year", "Rated", "Runtime", "Director"].include?(key)
    end

    @isPoster = true

    if result["Poster"]=="N/A"
      @isPoster = false
    else
      @imgSrc = result["Poster"]
    end

    @actors = result["Actors"].split(',')

    if t=result["Ratings"].find{|rating| rating["Source"] == "Rotten Tomatoes"}
      @tomato = t["Value"]
    else
      @tomato = "N/A"
    end

    erb :movie
  end

  if result["Response"] == "False"
    render_error(result["Error"])
  else
    render_normal(result)
  end

end

get '/movie_list' do
  movie_name = params[:movie_name]
  result = HTTParty.get("http://www.omdbapi.com/?apikey=2f6435d9&s=#{movie_name}").parsed_response

  def render_error(msg)
    @error_msg = msg
    erb :not_found
  end

  def render_normal(result)
    @movie_list = result["Search"]
    erb :movie_list
  end

  if result["Response"] == "False"
    render_error(result["Error"])
  else
    render_normal(result)
  end

end

get '/about' do
  erb :about
end
