import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getNewsBlogById = (id) => Get(`posts/${id}`);
const getComments = () => Get('comments', true);

// POST
const postNewsBlog = (data) => Post('posts', false, data);

// PUT
const putNewsBlog = (id, data) => Put(`posts/${id}`, false, data);

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`);

const API = {
  getNewsBlog,
  getComments,
  getNewsBlogById,
  postNewsBlog,
  putNewsBlog,
  deleteNewsBlog,
};

export default API;
