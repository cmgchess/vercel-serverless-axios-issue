import axios from 'axios/dist/node/axios.cjs';

export default async function (req, res) {
  const URL = 'https://jsonplaceholder.typicode.com/todos/1';
  try {
    const response = await axios.get(URL);
    return res.status(200).send(response.data);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};
