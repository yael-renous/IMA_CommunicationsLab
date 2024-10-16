let express = require('express');
let app = express();

const sampleData = {
  people: [
    {
      name: "John Doe",
      age: 30,
      city: "New York",
      hobbies: ["reading", "cycling", "photography"]
    },
    {
      name: "Jane Smith",
      age: 28,
      city: "San Francisco",
      hobbies: ["painting", "yoga", "traveling"]
    },
    {
      name: "Mike Johnson",
      age: 35,
      city: "Chicago",
      hobbies: ["cooking", "gardening", "music"]
    },
    {
      name: "Emily Brown",
      age: 25,
      city: "Los Angeles",
      hobbies: ["surfing", "hiking", "dancing"]
    },
    {
      name: "David Lee",
      age: 32,
      city: "Seattle",
      hobbies: ["gaming", "coding", "rock climbing"]
    }
  ]
};


app.get('/about', (request, response) => {
    response.send('About');
});

app.get('/data', (request, response) => {
    let age = parseInt(request.query.age);
    if(age){
        let userObject;
        for (let i = 0; i < sampleData.people.length; i++) {
            if (sampleData.people[i].age === age) {
                console.log(sampleData.people[i]);
                userObject = sampleData.people[i];
            }
        }
        if(userObject){
            response.json(userObject);
        }
        else{
            response.status(404).send('User not found');
        }
    }
    else{
        response.json(sampleData);
    }
});

app.get('/data/:name', (request, response) => {
    let userName = request.params.name;
    let userObject;
    for (let i = 0; i < sampleData.people.length; i++) {
        if (sampleData.people[i].name === userName) {
           userObject = sampleData.people[i];
        }
    }
    if(userObject){
        response.json(userObject);
    }
    else{
        response.status(404).send('User not found');
    }
  
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});