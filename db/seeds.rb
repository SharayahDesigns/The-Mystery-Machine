# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(name:'test', email:'test@test.com', password:'123456', image:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
)

10.times do
    User.create(
        name: Faker::Internet.username,
        email: Faker::Internet.email,
        password: Faker::Internet.password,
        image: Faker::Avatar.image
    )
end

u1 = User.create(
name:'Seth', 
email:'cragrosequitroi-5694@yopmail.com', 
password:'test1234', 
image:'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'
)


u2 = User.create(
name:'Deborah', 
email:'toyousattoixe-8090@yopmail.com', 
password:'test1234', 
image:'https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg',
)


r1 = Room.create(theme:'JavaScript', image:'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', user_id:2)
r2 = Room.create(theme:'IQ', image:'https://images.pexels.com/photos/54101/magic-cube-cube-puzzle-play-54101.jpeg', user_id:3)
r3 = Room.create(theme:'Video Games', image:'https://images.pexels.com/photos/4101045/pexels-photo-4101045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', user_id:2)
r4 = Room.create(theme:'Mythology', image:'https://images.pexels.com/photos/5209697/pexels-photo-5209697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', user_id:6)
r5 = Room.create(theme:'Animals', image:'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg', user_id:5)

Riddle.create(
    question:"What will be printed to the console?  const fruits = ['Apples', 'Oranges',    'Pears', 'Mangos'];fruits[2] = 'Bananas'; console.log(fruits);", 
    level: 1, 
    image:'', 
    answer:"['Apples', 'Oranges', 'Bananas', 'Mangos']", 
    option1:"['Fruits']", 
    option2:"['Apples', 'Oranges', 'Apples', 'Mangos']", 
    option3:"['Apples', 'Oranges', 'Bananas', 'Mangos']", 
    option4:"['Apples', 'Pears', 'Bananas', 'Mangos']",
    room_id: 1
)

Riddle.create(
    question:"What will be logged to the console when we run the code below? const cities =     ['Chicago', 'San Francisco', 'New York', 'Utah']; console.log(cities[3]);", 
    level: 2, 
    image:'', 
    answer:'undefined', 
    option1:'chicago', 
    option2:'undefined', 
    option3:'New York', 
    option4:'Utah',
    room_id: 1
)

Riddle.create(
    question:"How can you find how many elements are within an array?", 
    level: 2, 
    image:'', 
    answer:'myArray.length', 
    option1:'myArray.findLength', 
    option2:'myArray.length', 
    option3:'length(myArray)', 
    option4:'myArray.find',
    room_id: 1
)

Riddle.create(
    question:"What is the general purpose of a loop?", 
    level: 3, 
    image:'', 
    answer:'Loops read and recreate code automatically', 
    option1:'loops iterate through arrays to find elements.', 
    option2:'All loops help the computer make decisions automatically', 
    option3:'Loops read and recreate code automatically', 
    option4:'Loops automatically iterate a block of code based on conditions.',
    room_id: 1
)

Riddle.create(
    question:"What is incorrect about the code block?  for (let i = 0, i < myArray.length,  i+  +) {console.log(myArray[i]);};", 
    level: 3, 
    image:'', 
    answer:'The condition of the loop should be separated by semicolons, not commas', 
    option1:'let is not needed for the start condition', 
    option2:'The for loop expressions are out of order.', 
    option3:'The condition of the loop should be separated by semicolons, not commas', 
    option4:'i++ should be i = i +1',
    room_id: 1
)

Riddle.create(
    question:"What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?", 
    level: 1, 
    image:'', 
    answer:'Demolition', 
    option1:'The Dream Team', 
    option2:'The Bushwhackers', 
    option3:'The British Bulldogs', 
    option4:'Demolition',
    room_id: 2
)

Riddle.create(
    question:"When was YouTube founded?", 
    level: 3, 
    image:'', 
    answer:'February 14, 2005', 
    option1:'May 22, 2004', 
    option2:'February 14, 2005', 
    option3:'July 19, 2009', 
    option4:'September 12, 2005',
    room_id: 2
)

Riddle.create(
    question:"When was the original Star Wars: Battlefront II released?", 
    level: 2, 
    image:'', 
    answer:'October 31, 2005', 
    option1:'December 18, 2004', 
    option2:'November 21, 2006', 
    option3:'October 31, 2005', 
    option4:'September 9, 2007',
    room_id: 3
)

Riddle.create(
    question:"Which of these is NOT a team available in the game Pok&eacute;mon Go?", 
    level: 1, 
    image:'', 
    answer:'Team Rocket', 
    option1:'Team Rocket', 
    option2:'Team Valor', 
    option3:'Team Instinct', 
    option4:'Team Mystic',
    room_id: 3
)


Riddle.create(
    question:"Talos, the mythical giant bronze man, was the protector of which island?", 
    level: 3, 
    image:'', 
    answer:'Crete', 
    option1:'Sardinia', 
    option2:'Sicily', 
    option3:'Cyprus', 
    option4:'Crete',
    room_id: 4
)
    
Riddle.create(
    question:"Who was the Roman god of fire?", 
    level: 2, 
    image:'', 
    answer:'Vulcan', 
    option1:'Apollo', 
    option2:'Vulcan', 
    option3:'Jupiter', 
    option4:'Mercury',
    room_id: 4
)
        
Riddle.create(
   question:"Which of these species is not extinct?", 
   level: 1, 
   image:'', 
   answer:'Komodo dragon', 
   option1:'Japanese sea lion', 
   option2:'Tasmanian tiger', 
   option3:'Komodo dragon', 
   option4:'Saudi gazelle',
   room_id: 5
   )
            
Riddle.create(
    question:"Unlike on most salamanders, this part of a newt is flat?", 
    level: 3, 
    image:'', 
    answer:'Tail', 
    option1:'Head', 
    option2:'Teeth', 
    option3:'Feet', 
    option4:'Tail',
    room_id: 5
)

Attempt.create(answer:"['Apples', 'Oranges', 'Bananas', 'Mangos']", user_id:1, riddle_id:1)
Attempt.create(answer:'undefined', user_id:1, riddle_id:2)
Attempt.create(answer:'length(myArray)', user_id:1, riddle_id:3)
Attempt.create(answer:'', user_id:2, riddle_id:2)
Attempt.create(answer:'', user_id:2, riddle_id:4)
Attempt.create(answer:'', user_id:2, riddle_id:8)
Attempt.create(answer:'', user_id:2, riddle_id:12)
Attempt.create(answer:'', user_id:2, riddle_id:5)
Attempt.create(answer:'', user_id:2, riddle_id:5)

