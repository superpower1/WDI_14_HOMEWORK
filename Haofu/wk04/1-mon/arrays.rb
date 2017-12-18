require 'pry'

days_of_the_week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]



days_of_the_week.unshift(days_of_the_week.pop)

weekdays = days_of_the_week.slice(1, 5)
weekend = [days_of_the_week.last, days_of_the_week.first]

# binding.pry

new_days_of_the_week = [weekdays, weekend]

sorted_weekdays = new_days_of_the_week[0].sort
binding.pry
puts "End"
