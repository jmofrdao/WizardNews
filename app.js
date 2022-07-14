const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const app = express();



app.use(express.static('public'))
app.use(morgan('dev'));


app.get('/', (req, res)=>{
  const posts = postBank.list();
  const html = `
      <ul>
        ${posts.map(post => `<li>${post.title} by ${post.author}</li>`)}
      </ul>`;
  res.send(html);
});






const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
//new