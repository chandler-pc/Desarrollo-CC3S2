class User < ActiveRecord::Base
    validates :username, presence: true
    validate :username_format
  
    def username_format
      unless username =~ /\A[a-zA-Z][a-zA-Z0-9]{,9}\z/
        errors.add(:username, "debe comenzar con una letra y tener como máximo 10 caracteres de largo")
      end
    end
end