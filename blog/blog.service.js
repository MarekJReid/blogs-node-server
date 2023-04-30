const Blog = require("./blog.model");

require("../mongo").connect();

function getBlogs(req, res) {
  const docquery = Blog.find({});
  docquery
    .exec()
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((error) => {
      res.status(500).send(error);
      return;
    });
}

function postBlog(req, res) {
  const { id, title, author, body, img, comments, date, hidden, meta } =
    req.body;
  const blog = new Blog({
    id,
    title,
    author,
    body,
    img,
    comments,
    date,
    hidden,
    meta,
  });
  blog
    .save()
    .then(() => {
      res.json(blog);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  function checkServerErr(res, error) {
    if (error) {
      res.status(500).send(error);
      return error;
    }
  }
}

function updateBlog(req, res) {
  const { id, title, author, body, img, comments, date, hidden, meta } =
    req.body;
  Blog.findOne({ id })
    .then((blog) => {
      (blog.title = title),
        (blog.author = author),
        (blog.body = body),
        (blog.img = img),
        (blog.comments = comments),
        (blog.date = date),
        (blog.hidden = hidden),
        (blog.meta = meta);

      blog.save.then(res.json(blog));
    })
    .catch((err) => res.status(500).send(err));
}

function destroyBlog(req, res) {
  const { id } = req.params;
  Blog.findOneAndRemove({ id })
    .then((hero) => {
      res.json(hero);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = {
  getBlogs,
  postBlog,
  destroyBlog,
  updateBlog,
};
