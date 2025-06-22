import Blog from '../models/Blog.js';

export const createBlog = async (req, res) => {
  try {
    const { title, content, topic } = req.body;

    const blog = new Blog({
      title,
      content,
      topic,
      author: req.user._id
    });

    await blog.save();

    res.status(201).json({
      message: 'Blog created successfully',
      blog
    });
  } catch (err) {
    console.error('Create Blog error:', err);
    res.status(500).json({ message: 'Server error while creating blog' });
  }
};
