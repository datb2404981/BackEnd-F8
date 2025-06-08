
class NewsController{
  //[GET]/news
  index(req, res) {
      res.send('partials/news');
  }

  //[GET]:slug
  show(req,res) {
    res.send('NEWS DETAIL!!!');
  }

}
export default new NewsController();