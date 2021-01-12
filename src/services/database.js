import { useEffect, useState } from 'react';
import firebase from '../firebase';

export const PostDatabase = (path) => {
  const db = firebase.ref(path || '/');

  const getAll = () => db;
  const push = (data) => db.push(data);
  const update = (key, data) => db.child(key).update(data);
  const remove = (key) => db.child(key).remove();
  const removeAll = () => db.remove();
  const set = (path, value) => db.set(value);

  return {
    getAll,
    push,
    update,
    remove,
    removeAll,
    set,
  };
};

export const ReadDatabase = (path, defaultData = null) => {
  const [result, setResult] = useState({ loading: true, data: defaultData });

  useEffect(() => {
    if (!result.data || result.data === defaultData) {
      firebase.ref(path).once('value')
        .then(res => {
          setResult({loading: false, data: res.val()});
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [path, result.data, defaultData]);
  
  return result;
};

export const Increment = (path, total = 1) => {
  firebase.ref(path).transaction(value => (value || 0) + total)
};
