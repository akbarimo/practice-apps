const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/urban', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dictionarySchema = mongoose.Schema({
  id: Number,
  word: String,
  definition: String,
});

const Glossary = mongoose.model(process.env.DB_NAME, dictionarySchema);
const db = new Glossary();

const findAndCreate = async (doc) => {
  const query = {id: doc.id};
  const docToUpdate = { $set: doc};
  const options = { new: true, upsert: true}

  return await Glossary.findOneAndUpdate(query, docToUpdate, options)
};

const findData = async () => {
  return await Glossary.find();
};

module.exports = {
  db,
  findAndCreate,
  findData
}