const mongoose = require('mongoose');
const { schemaToDefault } = require('../helpers/utils');

const BATTLE_SCHEMA_RAW = new mongoose.Schema(
  {
    uuid: { type: String, default: '', index: true, required: true },
    firstClientId: { type: String, default: '', index: true },
    firstTeamId: { type: String, default: '' },
    firstTeamName: { type: String, default: '' },
    secondClientId: { type: String, default: '', index: true },
    secondTeamId: { type: String, default: '' },
    winner: { type: Number, default: -1 },
    createdAt: { type: Number, default: 0 },
    battleType: { type: Number, default: 1 },
    fighters: { type: Array, default: [] },
  },
  { collection: 'battles', versionKey: false }
);

module.exports = {
  BATTLE_SCHEMA: schemaToDefault(BATTLE_SCHEMA_RAW),
  Battle: mongoose.models.Battle || mongoose.model('Battle', BATTLE_SCHEMA_RAW),
};
