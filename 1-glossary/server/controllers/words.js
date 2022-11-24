const {words} = require('../models/index.js')

const get = async (req, res) => {
  try {
    const data = await words.getData();
    res.sendStatus(200).send(data);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
};

const post = async (req, res) => {
  try {
    await words.createData(req.body)
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
};

const update = (req, res) => {
  console.log(req.body);
  res.sendStatus(204).send();
};

const remove = (req, res) => {
  console.log(req.body);
  res.sendStatus(203).send();
};


module.exports = {
  get,
  post,
  update,
  remove
}