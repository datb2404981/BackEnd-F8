import Course from '../../models/course.js';
import { mutipleMongooseToObject } from '../../util/mongoose.js';

class SiteController {
  //[GET]/home
  home(req, res) {
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(error => {
        res.status(400).json({ error: 'ERROR!!!' });
      });
  }

  //[GET]:slug
  search(req, res) {
    res.render('partials/search');
  }
}

export default new SiteController();