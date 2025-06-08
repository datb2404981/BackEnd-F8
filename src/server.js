import express from 'express';
import morgan from "morgan";
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import  route  from './routers/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set(express.static(path.join(__dirname, 'public/img')));

app.use(express.urlencoded());
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources/views'));

//Route init
route(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
