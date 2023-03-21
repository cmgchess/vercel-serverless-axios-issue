import axios from 'axios';

module.exports = async (req, res) => {
  const URL = 'https://jsonplaceholder.typicode.com/todos/1';
  try {
    const response = await axios.get(URL);
    return res.status(200).send(response.data);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};
