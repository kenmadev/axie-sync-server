const schemaToDefault = schema => {
  return Object.keys(schema.obj).reduce((accum, key) => {
    accum[key] = schema.obj[key].default;
    return accum;
  }, {});
};

module.exports = { schemaToDefault };
