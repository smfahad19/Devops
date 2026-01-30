import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/home', (req, res) => {
  let name = 'fahad';
  let age = '18';

  res.json({
    name: name,
    age: age,
  });
});

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
