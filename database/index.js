const mongoose = require('mongoose');
const isEmpty = require('lodash/isEmpty');
const isNull = require('lodash/isNull');
const { Battle } = require('./schema');

// connect mongo db
mongoose.connect(process.env.MONGODBURI);

const collectionModels = {
  battles: Battle,
};

const parseDocPath = docpath => docpath.split('/');

const getCollection = async (collection, where = []) => {
  // get in mongodb if available
  const [target, , value] = where;
  const filter = !isEmpty(where) ? { [target]: value } : {};
  const query = await collectionModels[collection].find(filter);
  if (!isNull(query)) {
    console.log('Mongodb collection query', collection);
    return query.map(val => val.toJSON());
  }
};

const getDocument = async docpath => {
  const [collection, uuid] = parseDocPath(docpath);
  const query = await collectionModels[collection].findOne({ uuid });
  return !isNull(query) ? query.toJSON() : {};
};

const getDocuments = async (collection, query = {}, sort = {}, skip = 0, limit = 100) => {
  const result = await collectionModels[collection].find(query).sort(sort).skip(skip).limit(limit);
  return !isEmpty(result) ? result : [];
};

const setDocument = async (collection, data = {}) => {
  const model = await collectionModels[collection](data);
  return model.save();
};

const updateDocument = async (docpath, data) => {
  const [collection, id] = parseDocPath(docpath);
  const query = await collectionModels[collection].findOne({ id });
  if (!isNull(query)) {
    for (const key in data) query[key] = data[key];
  }

  query.id = id;
  return query.save();
};

const deleteDocument = docpath => {
  // update in mongodb
  const [collection, id] = parseDocPath(docpath);
  return collectionModels[collection].deleteOne({ id });
};

module.exports = {
  getCollection,
  getDocument,
  getDocuments,
  setDocument,
  updateDocument,
  deleteDocument,
};
