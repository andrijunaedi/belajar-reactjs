import axios from 'axios';
import Config from './Config';

const { OnlineRoot, RootPath } = Config;

const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? OnlineRoot : RootPath}/${path}`).then(
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

export default Delete;
