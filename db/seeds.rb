# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(name:'test1', email:'test1@test.com', password:'test1234', image:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')
u2 = User.create(name:'test2', email:'test2@test.com', password:'test1234', image:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')


