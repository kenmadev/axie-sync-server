const isEmpty = require('lodash/isEmpty');
const { setDocument, getDocument } = require('../../../database');
const {
  HttpErrors,
  errorStatusHandler,
} = require('../../../helpers/errorResponses');
const NextCors = require('nextjs-cors').default;

const BATTLETYPES = {
  pvpbattle: 1,
  pvebattle: 2,
};

const create = async (req, res) => {
  try {
    await NextCors(req, res, {
      methods: ['GET', 'POST'],
      origin: '*',
      optionsSuccessStatus: 200,
    });

    const { uuid = '', battleType = 0 } = req.body;
    if (isEmpty(uuid)) {
      throw new HttpErrors.BadRequest('Invalid battle data, no UUID found.');
    }

    // only record pvp battles
    if (battleType !== BATTLETYPES.pvpbattle) {
      throw new HttpErrors.BadRequest('Only PVP battles are accepted.');
    }

    // make sure the uuid does not exist
    const battle = await getDocument(`battles/${uuid}`);
    if (!isEmpty(battle)) {
      throw new HttpErrors.Conflict(
        `Battle with UUID ${uuid} already existed.`
      );
    }

    // save battle info here
    await setDocument('battles', { ...req.body });
    console.log('Battle has been saved', uuid);
    res.status(200).send(`Saved ${uuid}`);
  } catch (err) {
    console.log('Battle create error', err.message);
    errorStatusHandler(err, res);
  }
};

export default create;
