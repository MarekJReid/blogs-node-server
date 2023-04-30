const express = require("express");
const router = express.Router();
const blogService = require("./blog/blog.service");
router.get("/blogs", (req, res) => {
  blogService.getBlogs(req, res);
});

router.post("/blog", (req, res) => {
  blogService.postBlog(req, res);
});

router.put("/blog", (req, res, next) => {
  blogService.updateBlog(req, res);
});

router.delete("/blog/:id", (req, res, next) => {
  blogService.destroyBlog(req, res);
});

module.exports = router;
