
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * GET blog page.
 */

exports.blog = function(req, res){
  res.render('blog', { title: 'Express' });
};

/*
 * GET about page.
 */

exports.about = function(req, res){
  res.render('about', { title: 'Express' });
};

/*
 * GET contact page.
 */

exports.contact = function(req, res){
  res.render('contact', { title: 'Express' });
};

