import courses from "../../models/course.js";
import { mongooseToObject } from '../../util/mongoose.js';


class coursesController{

  //[GET]/courses/create
  create(req, res, next) {
    res.render('courses/create')
  }
//[POST]/courses/store
  async store(req, res, next) {
  const formData = req.body;
  formData.image = `https://i.ytimg.com/vi/-jV06pqjUUc/${formData.videoId}.jpg`;
  const course = new courses(formData);
    await course.save()
      .then(() => res.redirect(`/`))
      .catch(error => {
        
      })
  }

  //[GET]/courses/:slug
  show(req,res,next) {
    courses.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show',{ course: mongooseToObject(course)});
      })
      .catch(next);
  }

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    courses.findById(req.params.id)
      .then(course => {
        res.render('courses/edit', { course: mongooseToObject(course)});
      })
      .catch(next);
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    courses.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
}
export default new coursesController();