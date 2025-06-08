import express from 'express';
import morgan from "morgan";
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set(express.static(path.join(__dirname, 'public/img')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
