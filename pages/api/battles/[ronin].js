const isEmpty = require('lodash/isEmpty');
const { getDocuments } = require('../../../database');
const {
  HttpErrors,
  errorStatusHandler,
} = require('../../../helpers/errorResponses');

const read = async ({ query: { ronin = '', skip = 0, limit = 100 } }, res) => {
  try {
    if (isEmpty(ronin)) {
      throw new HttpErrors.BadRequest('Invalid ronin address.');
    }

    // make sure the uuid does not exist
    const fronin = ronin.replace('ronin:', '0x');
    const battles = await getDocuments(
      'battles',
      { $or: [{ firstClientId: fronin }, { secondClientId: fronin }] },
      { createdAt: -1 },
      skip,
      limit
    );

    res.status(200).send(battles);
  } catch (err) {
    errorStatusHandler(err, res);
  }
};

export default read;
