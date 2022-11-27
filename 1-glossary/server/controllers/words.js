const {words} = require('../models/index.js')

const get = async (req, res) => {
  try {
    const data = await words.getData(req.body);
    res.status(200).send(data);
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
    res.sendStatus(400);
  }
};

const update = async (req, res) => {
  try {
    await words.updateData(req.body)
    res.sendStatus(202);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};

const remove = async (req, res) => {
  try {
    console.log(req.body);
    await words.removeData(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
};

module.exports = {
  get,
  post,
  update,
  remove
}