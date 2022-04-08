# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(
name:'test1', 
email:'test1@test.com', 
password:'test1234', 
image:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
)


u2 = User.create(
name:'test2', 
email:'test2@test.com', 
password:'test1234', 
image:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
)

r1 = u1.rooms.create(theme: 'JavaScript', image:'')
r2 = u2.rooms.create(theme: 'IQ', image:'')

rid1 = r1.riddles.create(
question:"What will be printed to the console?  const fruits = ['Apples', 'Oranges', 'Pears', 'Mangos'];fruits[2] = 'Bananas'; console.log(fruits);", 
level: 1, 
image:'', 
answer:"['Apples', 'Oranges', 'Bananas', 'Mangos']", 
option1:"['Fruits']", 
option2:"['Apples', 'Oranges', 'Apples', 'Mangos']", 
option3:"['Apples', 'Oranges', 'Bananas', 'Mangos']", 
option4:"['Apples', 'Pears', 'Bananas', 'Mangos']"
)

rid1 = r1.riddles.create(
question:"What will be logged to the console when we run the code below? const cities = ['Chicago', 'San Francisco', 'New York', 'Utah']; console.log(cities[3]);", 
level: 2, 
image:'', 
answer:'undefined', 
option1:'chicago', 
option2:'undefined', 
option3:'New York', 
option4:'Utah'
)

rid1 = r1.riddles.create(
question:"How can you find how many elements are within an array?", 
level: 2, 
image:'', 
answer:'myArray.length', 
option1:'myArray.findLength', 
option2:'myArray.length', 
option3:'length(myArray)', 
option4:'myArray.find'
)

rid1 = r1.riddles.create(
question:"What is the general purpose of a loop?", 
level: 3, 
image:'', 
answer:'Loops read and recreate code automatically', 
option1:'loops iterate through arrays to find elements.', 
option2:'All loops help the computer make decisions automatically', 
option3:'Loops read and recreate code automatically', 
option4:'Loops automatically iterate a block of code based on conditions.'
)

rid1 = r1.riddles.create(
question:"What is incorrect about the code block?  for (let i = 0, i < myArray.length,  i++) {console.log(myArray[i]);};", 
level: 3, 
image:'', 
answer:'The condition of the loop should be separated by semicolons, not commas', 
option1:'let is not needed for the start condition', 
option2:'The for loop expressions are out of order.', 
option3:'The condition of the loop should be separated by semicolons, not commas', 
option4:'i++ should be i = i +1'
)

rid2 = r2.riddles.create(
question:"", 
level: 1, 
image:'', 
answer:'', 
option1:'', 
option2:'', 
option3:'', 
option4:''
)

rid2 = r2.riddles.create(
question:"", 
level: 1, 
image:'', 
answer:'', 
option1:'', 
option2:'', 
option3:'', 
option4:''
)

a1 = Attempt.create(answer:'', user_id:u1.id, riddle_id:r1.id)
a2 = Attempt.create(answer:'', user_id:u2.id, riddle_id:r2.id)
