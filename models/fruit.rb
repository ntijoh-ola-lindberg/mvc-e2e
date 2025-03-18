module Fruit 
  
  def self.db
      return @db if @db

      @db = SQLite3::Database.new("db/fruits.sqlite")
      @db.results_as_hash = true

      return @db
  end

  def self.all
    return db.execute('SELECT * FROM fruits');
  end
end