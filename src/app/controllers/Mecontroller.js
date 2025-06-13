import courses from "../../models/course.js";
import { mongooseToObject, mutipleMongooseToObject } from '../../util/mongoose.js';


class meController{

  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    courses.find({})
      .then(courses => res.render('me/storedCourses', {
        courses: mutipleMongooseToObject(courses)
    }))
  }

}
export default new meController();