let express = require('express');
let app = express();
app.use(express.json());

const storyLines = {
  lines: [
    {
      text: "Once upon a time",
      color: "green"

    },
  ]
};

app.post('/new-data', (request, response) => {
  const { text, color } = request.body;
  storyLines.lines.push({ text, color });
  console.log("adding new data");
  console.log(storyLines);
  response.json({ task: 'success' });
});

app.get('/data', (request, response) => {
  console.log("getting data");
  console.log(storyLines);
  response.json(storyLines);
});


app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});