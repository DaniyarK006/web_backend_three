const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog_controller');

// CRUD routes
router.post('/blogs', blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:id', blogController.getBlogById);
router.put('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

// Additional routes
router.post('/blogs/:id/like', blogController.likeBlog);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Blog API',
    version: '1.0.0',
    endpoints: {
      create: 'POST /api/blogs',
      getAll: 'GET /api/blogs',
      getOne: 'GET /api/blogs/:id',
      update: 'PUT /api/blogs/:id',
      delete: 'DELETE /api/blogs/:id',
      like: 'POST /api/blogs/:id/like'
    }
  });
});

module.exports = router;