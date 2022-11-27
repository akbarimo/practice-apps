const db = require('../database/db.js')

const getData = async (data) => {
  try {
    return await db.findData(data);
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

const updateData = async (data) => {
  try {
    return await db.findAndCreate(data);
  } catch (err) {
    console.error(err);
  }
};

const removeData = async (data) => {
  try {
    return await db.removeData(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getData,
  createData,
  removeData,
  updateData
}