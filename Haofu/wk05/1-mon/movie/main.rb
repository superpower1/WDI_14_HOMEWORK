require 'sinatra/reloader'
require 'sinatra'
require 'httparty'

get '/' do
  erb :index
end

get '/movie' do
  movie_name = params[:movie_name]
  result = HTTParty.get("http://www.omdbapi.com/?apikey=2f6435d9&t=#{movie_name}").parsed_response

  def render_not_found
    erb :not_found
  end

  def render_found(result)
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
    render_not_found
  else
    render_found(result)
  end

end

get '/about' do
  erb :about
end
