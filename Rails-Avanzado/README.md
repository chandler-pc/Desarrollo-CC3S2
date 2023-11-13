# Actividad 1
Copiamos el codigo que debe ir en movie.rb

```ruby
class Movie < ActiveRecord::Base
    def self.all_ratings ; %w[G PG PG-13 R NC-17] ; end #  shortcut: array of strings
    validates :title, :presence => true
    validates :release_date, :presence => true
    validate :released_1930_or_later # uses custom validator below
    validates :rating, :inclusion => {:in => Movie.all_ratings},
        :unless => :grandfathered?
    def released_1930_or_later
        errors.add(:release_date, 'must be 1930 or later') if
        release_date && release_date < Date.parse('1 Jan 1930')
    end
    @@grandfathered_date = Date.parse('1 Nov 1968')
    def grandfathered?
        release_date && release_date < @@grandfathered_date
    end
end
```
Y probamos en la consola interactiva de Ruby  
![](images/Image1.png)  

Para crear la tabla hacemos lo siguiente, usamos el comando rails generate migration CreateMoviegoers, el cual nos creara un archivo de migracion que rellenaremos con el siguiente codigo

```ruby
class CreateMoviegoers < ActiveRecord::Migration[7.0]
  def change
    create_table :moviegoers do |t|
      t.string :name
      t.string :provider
      t.string :uid
      t.timestamps
    end
  end
end
```

Para luego usar rails db:migrate y finalmente tendremos la tabla.

# SSO

Copiamos el siguiente codigo en el archivo routes.rb

```ruby
get  'auth/:provider/callback' => 'sessions#create'
get  'auth/failure' => 'sessions#failure'
get  'auth/twitter', :as => 'login'
post 'logout' => 'sessions#destroy'
```

Ahora usamos rails generate controller Sessions para crear un controlador y escribimos el siguiente codigo

```ruby
class SessionsController < ApplicationController
  # login & logout actions should not require user to be logged in
  skip_before_filter :set_current_user  # check you version
  def create
    auth = request.env["omniauth.auth"]
    user =
      Moviegoer.where(provider: auth["provider"], uid: auth["uid"]) ||
      Moviegoer.create_with_omniauth(auth)
    session[:user_id] = user.id
    redirect_to movies_path
  end
  def destroy
    session.delete(:user_id)
    flash[:notice] = 'Logged out successfully.'
    redirect_to movies_path
  end
end
```

# Asociaciones y claves foráneas

```sql
SELECT reviews.*
    FROM movies JOIN reviews ON movies.id=reviews.movie_id
    WHERE movies.id = 41;
```

Esta linea de SQL se utiliza para recuperar información de la base de datos que involucra dos tablas: "movies" y "reviews", junta las tablas cuando el id de la pelicual es igual al id de la review ademas de de dar la condicion que el id de la pelicula debe ser 41.  

Creamos una nueva migracion usando rails generate migration create_reviews y luego rails db:migrate, y en el archivo .rb de la migracion que creamos, copiamos el siguiente codigo

```ruby
class CreateReviews < ActiveRecord::Migration[7.0]
  def change
      create_table 'reviews' do |t|
      t.integer    'potatoes'
      t.text       'comments'
      t.references 'moviegoer'
      t.references 'movie'
      end
  end
end
```
Y en el archivo del modelo review.rb 

```ruby
class Review < ActiveRecord::Base
    belongs_to :movie
    belongs_to :moviegoer
end
```

Ahora copiamos has_many :reviews a las clases Movie y Moviegoer.
