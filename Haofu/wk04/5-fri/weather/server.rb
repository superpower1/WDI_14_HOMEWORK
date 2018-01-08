require 'sinatra'
require 'sinatra/reloader'
require 'weather-api'

get '/' do
  city = params[:city] || "Sydney"
  res = Weather.lookup_by_location("#{city}, Australia", Weather::Units::CELSIUS)
  @temp = res.condition.temp
  @city = res.location.city
  @time = res.condition.date
  @img_url = res.image.url
  @text = res.condition.text
  @desc = res.description
  erb(:weather)
end
