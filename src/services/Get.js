import axios from 'axios';
import Config from './Config';

const { OnlineRoot, RootPath } = Config;

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

export default Get;
