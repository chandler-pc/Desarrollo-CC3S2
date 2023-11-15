class CreateMoviegoers < ActiveRecord::Migration[7.0]
  def change
    create_table :moviegoers do |t|
      t.string 'provider'
      t.string 'uid'
      t.string 'name'
      t.timestamps
    end
  end
end
