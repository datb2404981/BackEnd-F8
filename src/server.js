import express from 'express';
import morgan from "morgan";
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routers/routes.js';
import connect from './config/database/database.js';
import methodOverride from 'method-override';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//connect database
connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', engine({
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources/views'));

//Route init
route(app);



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
