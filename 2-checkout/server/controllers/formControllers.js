const {formModels} = require('../models');

const get = (req, res) => {
  formModels.getData((err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  });
};

const post = async (req, res) => {
  try {
    const data = await formModels.postData(req.body);
    res.sendStatus(201)
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
};

module.exports = {
  get,
  post
}