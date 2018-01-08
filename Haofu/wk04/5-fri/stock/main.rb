require 'stock_quote'
require 'sinatra/reloader'
require 'sinatra'

get '/' do
  stock_code = params[:code]
  stock = StockQuote::Stock.quote(stock_code)
  @name = stock.name
  @price = stock.l
  erb :index
end

get '/about' do
  erb :about
end
