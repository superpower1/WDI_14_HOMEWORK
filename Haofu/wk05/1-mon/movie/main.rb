require 'sinatra/reloader'
require 'sinatra'
require 'httparty'

get '/' do
  erb :index
end

get '/movie' do
  movie_name = params[:movie_name]
  result = HTTParty.get("http://www.omdbapi.com/?apikey=2f6435d9&t=#{movie_name}").parsed_response
  @info = result.select do |key, value|
    ["Title", "Year", "Rated"].include?(key)
  end
  @imgSrc = result["Poster"]
  erb :movie
end

get '/about' do
  erb :about
end
