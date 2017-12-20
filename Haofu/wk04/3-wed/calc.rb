require 'pry'

def print_menu
  puts "Command Line Calculator"
  puts "|---|-------------------|"
  puts "| 1 | Addition(+)       |"
  puts "| 2 | Subtraction(-)    |"
  puts "| 3 | Multiplication(*) |"
  puts "| 4 | Division(/)       |"
  puts "| 5 | Exponent(^)       |"
  puts "| 6 | Square root(√)    |"
  puts "| q | Quit              |"
  puts "|---|-------------------|"
end

class Calculator
  def addition (arr)
    arr.inject{|sum,x| sum + x }
  end

  def subtraction (arr)
    arr.inject{|diff,x| diff - x }
  end

  def multiplication (arr)
    arr.inject{|prod,x| prod * x }
  end

  def division (arr)
    arr.inject{|quot,x| quot / x }
  end

  def exponent (arr)
    arr.inject{|pow,x| pow ** x }
  end

  def sqrt (arr)
    arr.inject{|pow,x| pow ** (1.0/x) }
  end
end

def prompt (*args)
    print *args
    gets.strip
end

def arithmetic(name, symbol)
  calc = Calculator.new
  args = prompt("Please enter numbers for #{name} (seprate by ','): ")
  while args.split(',').length < 2
    args = prompt("Please enter numbers for #{name} (seprate by ','): ")
  end
  num_arr = args.split(',').map(&:to_f)
  print num_arr.join(" #{symbol} ") + " = "
  print calc.method(name.to_sym).call(num_arr)
  puts ""
end

print_menu
input = prompt("Please select an operation: ")

while input != "q"
  case input
  when "1"
    arithmetic("addition", "+")
    input = prompt("Please select an operation: ")
  when "2"
    arithmetic("subtraction", "-")
    input = prompt("Please select an operation: ")
  when "3"
    arithmetic("multiplication", "*")
    input = prompt("Please select an operation: ")
  when "4"
    arithmetic("division", "/")
    input = prompt("Please select an operation: ")
  when "5"
    arithmetic("exponent", "^")
    input = prompt("Please select an operation: ")
  when "6"
    arithmetic("sqrt", "√")
    input = prompt("Please select an operation: ")
  else
    puts "Please choose from one of the options"
    print_menu
    input = prompt("Please select an operation: ")
  end
end

puts "Bye!"
