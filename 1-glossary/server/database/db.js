const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/urban', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dictionarySchema = new mongoose.Schema({
  word: String,
  definition: String,
});

const Glossary = mongoose.model(process.env.DB_NAME, dictionarySchema);

const findAndCreate = async (doc) => {
  const query = {word: doc.word};
  const docToUpdate = { $set: doc};
  const options = { new: true, upsert: true}

  try {
    const dbResponse = await Glossary.findOneAndUpdate(query, docToUpdate, options);
    Promise.resolve(dbResponse);
  } catch (err) {
    Promise.reject(err);
  }

};

const findData = async (data) => {
  return await Glossary.find(data);
};

const removeData = async (doc) => {
  console.log(doc);
  return await Glossary.deleteOne(doc);
}

module.exports = {
  Glossary,
  findAndCreate,
  findData,
  removeData
};