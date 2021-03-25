const mongoose = require('mongoose');
const { Schema } = mongoose;
require('./Team');
require('./Event');

const gameSchema = new Schema({
  bsid: String,
  created_on: Date,
  league: String,
  away_team: {
    type: Schema.Types.Mixed,
    ref: 'Team',
  },
  home_team: {
    type: Schema.Types.Mixed,
    ref: 'Team',
  },
  away_period_scores: Array,
  home_period_scores: Array,
  away_errors: Number,
  home_errors: Number,
  event_information: {
    type: Schema.Types.Mixed,
    ref: 'Event',
  }
});

mongoose.model('games', gameSchema);