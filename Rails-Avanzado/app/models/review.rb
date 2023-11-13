class Review < ActiveRecord::Base
    belongs_to :movie
    from :moviegoer
end