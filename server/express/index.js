import Express from 'express'
import path from 'path'
import engine from 'ejs-mate'
import routeIndex from '../routes/index'
import bodyParser from 'body-parser'
const app = new Express();


app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(Express.static(path.join(__dirname, '../../client/dist/')));
app.use(Express.static(path.join(__dirname, '../public/')));
app.use("/", routeIndex);

export default app;