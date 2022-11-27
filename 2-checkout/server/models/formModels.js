const db = require('../database/db.js');
const mysql = require('mysql2');

const getData = (callback) => {
  db.query(`SELECT * FROM responses;`, (err, data) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const postData = async (data) => {
  console.log(data);
  try {
    return db.queryAsync(`INSERT INTO responses (user, email, password, address, city, state, zip, number, card, expiry, cvv, billingZip) VALUES
    ("${data.user}", "${data.email}", "${data.password}", "${data.address}", "${data.city}", "${data.state}", "${data.zip}", "${data.number}", "${data.card}", "${data.expiry}","${data.cvv}", "${data.billingZip}");`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getData,
  postData
}