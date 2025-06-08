import newsRouter from './news.js';
import siteRouter from './site.js';

function route(app) {
 
  app.use('/news', newsRouter);

  app.get('/search', siteRouter);
  
  app.post('/search', siteRouter);
  
  app.get('/', siteRouter);

  
};

export default route;
