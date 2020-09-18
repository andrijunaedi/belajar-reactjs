import axios from 'axios';
import Config from './Config';

const { OnlineRoot, RootPath } = Config;

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      },
    );
  });
  return promise;
};

export default Post;
