import Get from './Get';
import Post from './Post';

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getNewsBlogById = (id) => Get(`posts/${id}`);
const getComments = () => Get('comments', true);

// POST
const postNewsBlog = (data) => Post('posts', false, data);

const API = {
  getNewsBlog,
  getComments,
  getNewsBlogById,
  postNewsBlog,
};

export default API;
