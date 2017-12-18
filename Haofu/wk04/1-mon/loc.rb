require 'pry'

def prompt (*args)
    print *args
    gets
end

def line_of_code (file_name)
  File.readlines(file_name)
end

file_path = prompt("Enter file name: ")
# binding.pry
lineArr = line_of_code(file_path.strip)
puts "#{lineArr.length} line(s)"
