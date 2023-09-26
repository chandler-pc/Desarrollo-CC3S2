# Parte 1

def sum arr
  if arr.length == 0
    return 0
  else
    arr.inject(:+)
  end
end

def max_2_sum arr
  if arr.length == 0
    return 0
  elsif arr.length == 1
    return arr[0]
  else
    arr.sort!
    arr[-1] + arr[-2]
  end
end

def sum_to_n? arr, n
  if arr.length == 0
    return false
  else
    arr.combination(2).any? {|a, b| a + b == n}
  end
end

# Parte 2

def hello(name)
  "Hello, #{name}"
end

def starts_with_consonant? s
  t = s.downcase
  if s.length == 0
    return false
  end
  if t[0] =~ /[bcdfghjklmnñpqrstvwxyz]/
    return true
  else
    return false
  end
end

def binary_multiple_of_4? s
  if s =~ /^[0-1]+$/
    if s.to_i(2) % 4 == 0
      return true
    end
    return false
  end
  return false
end

# Parte 3

class BookInStock
  attr_accessor :isbn, :price
    
    def initialize isbn, price
      if isbn.length == 0 || price <= 0
        raise ArgumentError
      end
      @isbn = isbn
      @price = price
    end
    
    def price_as_string
      "$#{'%.2f' % @price}"
    end
end
