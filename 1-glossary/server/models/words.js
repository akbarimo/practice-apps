const db = require('../database/db.js')

const getData = async (callback) => {
  try {
    const test = await db.findData();
    console.log(test);
  } catch (err) {
    console.error(err);
  }
};

const createData = async (data) => {
  try {
    return await db.findAndCreate(data);
  } catch (err) {
    console.error(err);
  }
};

const deleteData = () => {

};

const updateData = async (data, callback) => {
  console.log(data);
  const result = await db.findAndCreate(data);
  callback(null, result);
};

module.exports = {
  getData,
  createData,
  deleteData,
  updateData
}