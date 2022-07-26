const db = require('../db')
const { Comment, City } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  let comment = await Comment.find()
  const comments = [
    {
      name: 'Sarah',
      body: 'This is the best city in the USA!',
      city: 'New York City'
    },
    {
      name: 'Sarah',
      body: 'This is the best city to live in!',
      city: 'Los Angeles'
    },
    {
      name: 'Sarah',
      body: 'This is the most interesting city in the USA!',
      city: 'Chicago'
    },
    {
      name: 'Sarah',
      body: 'This is the best city in the USA!',
      city: 'Houston'
    },
    {
      name: 'Sarah',
      body: 'This is the best city in the USA!',
      city: 'Phoenix'
    },
    {
      name: 'Sarah',
      body: 'This is the best city in the USA!',
      city: 'Philadelphia'
    },
    {
      name: 'Sarah',
      body: 'This is the best city in the USA!',
      city: 'San Antonio'
    },
    {
      name: 'Sarah',
      body: 'This is the best city in the USA!',
      city: 'San Diego'
    },
    {
      name: 'Sarah',
      body: 'This is the best city in the USA!',
      city: 'Dallas'
    },
    {
      name: 'John',
      body: 'This is the best city in the USA!',
      city: 'San Jose'
    }
  ]
  await Comment.insertMany(comments)
  console.log('comments were added')
}
const run = async () => {
  await main()
  db.close()
}
run()
