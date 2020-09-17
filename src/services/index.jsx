import axios from 'axios';

const RootPath = 'http://localhost:5000';
const OnlineRoot = 'https://jsonplaceholder.typicode.com';

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
  return promise;
};

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

const API = {
  getNewsBlog,
  getComments,
};

export default API;
