# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pokemon.delete_all

pokemon_species = ['Bulbasaur', 'Charmander', 'Squirtle', 'Caterpie', 'Weedle', 'Pidgey', 'Pikachu'];

10.times do
  Pokemon.create(
    species: pokemon_species.sample,
    nickname: (0...4).map { (65 + rand(26)).chr }.join,
    level: rand(100)+1
  )
end
