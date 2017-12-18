def prompt (*args)
    print *args
    gets
end

max_num = prompt("Choose a maximum value: ").to_i

while max_num == 0
  puts "Please enter a number greater than 0"
  max_num = prompt("Choose a maximum value: ").to_i
end

random_num = rand(max_num) + 1

guess_num = prompt("Guess a number between 0 and #{max_num}: ").to_i

while guess_num != random_num
  if guess_num > random_num
    puts "Wrong, guess lower!"
    guess_num = prompt("Guess a number between 0 and #{max_num}: ").to_i
  else
    puts "Wrong, guess higher!"
    guess_num = prompt("Guess a number between 0 and #{max_num}: ").to_i
  end

  puts random_num
end

puts "Bingo!"


# while true
#   name = prompt "Guess a number: "
#   puts name
# end
