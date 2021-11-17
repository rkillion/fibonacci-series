def fibonacci(num)
  # type your code in here
  fibonacci = [0,1]
  return fibonacci[num] unless num>1
  i = 2
  while i<=num do
    nextNum = fibonacci[i-2]+fibonacci[i-1]
    fibonacci<<nextNum
    i=i+1
  end
  fibonacci.last
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
