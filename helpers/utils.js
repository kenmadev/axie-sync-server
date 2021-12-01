const axios = require('axios');
const rax = require('retry-axios');
const Web3 = require('web3');
const web3 = new Web3();

const schemaToDefault = schema => {
  return Object.keys(schema.obj).reduce((accum, key) => {
    accum[key] = schema.obj[key].default;
    return accum;
  }, {});
};

const useAxios = (options = {}) => {
  const instance = axios.create({
    timeout: 60000,
    ...options,
  });

  instance.defaults.raxConfig = {
    instance,
    retry: 3,
    noResponseRetries: 2,
    retryDelay: 100,
    // onRetryAttempt: err => {
    //   const cfg = rax.getConfig(err);
    //   console.log(`Retry attempt #${cfg.currentRetryAttempt}`);
    // },
  };

  rax.attach(instance);
  return instance;
};

const isValidRonin = ronin => {
  const csum = web3.utils.toChecksumAddress(ronin);
  const valid = web3.utils.checkAddressChecksum(csum);
  return valid;
};

module.exports = {
  schemaToDefault,
  useAxios,
  isValidRonin,
};
