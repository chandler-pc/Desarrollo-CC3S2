class WordGuesserGame

  # add the necessary class methods, attributes, etc. here
  # to make the tests in spec/wordguesser_game_spec.rb pass.

  # Get a word from remote "random word" service

  attr_reader :word, :guesses, :wrong_guesses, :attemps

  def initialize(word)
    @word = word
    @guesses = ''
    @wrong_guesses = ''
    @attemps = 0
  end

  def guess(character)
    if character == '' || character.nil? || character !~ /^[a-z]$/i
      raise ArgumentError
    end
    character = character.downcase
    if @word.include?(character)
      if !@guesses.include?(character)
        return @guesses += character
      end
    else
      if !@wrong_guesses.include?(character)
        @attemps += 1 
        return @wrong_guesses += character
      end
    end
    false
  end
  def word_with_guesses
    result = ''
    @word.each_char do |character|
      if @guesses.include?(character)
        result += character
      else
        result += '-'
      end
    end
    result
  end

  def check_win_or_lose
    result = word_with_guesses
    if result == @word
      :win
    else
      if @attemps == 7
        :lose
      else
          :play
      end
    end

  end

  # You can test it by installing irb via $ gem install irb
  # and then running $ irb -I. -r app.rb
  # And then in the irb: irb(main):001:0> WordGuesserGame.get_random_word
  #  => "cooking"   <-- some random word
  def self.get_random_word
    require 'uri'
    require 'net/http'
    uri = URI('http://randomword.saasbook.info/RandomWord')
    Net::HTTP.new('randomword.saasbook.info').start { |http|
      return http.post(uri, "").body
    }
  end

end
