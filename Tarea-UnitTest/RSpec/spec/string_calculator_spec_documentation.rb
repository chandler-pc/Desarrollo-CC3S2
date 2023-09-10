require 'string_calculator'

StringCalculator
  .add
    given an empty string
      returns zero
    single numbers
      given '4'
        returns 4
      given '10'
        returns 10
    two numbers
      given '2,4'
        returns 6
      given '17,100'
        returns 117