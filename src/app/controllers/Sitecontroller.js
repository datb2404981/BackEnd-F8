
class NewsController{
  //[GET]/home
  home(req, res) {
    res.render('home');
  }

  //[GET]:slug
  search(req,res) {
    res.render('partials/search');
  }

}
export default new NewsController();