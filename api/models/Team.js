const mongoose = require('mongoose');
const { Schema } = mongoose;

const Team = new Schema({
  team_id: String,
  abbreviation: String,
  active: Boolean,
  first_name: String,
  last_name: String,
  conference: String,
  division: String,
  site_name: String,
  city: String,
  state: String,
  full_name: String,
});

mongoose.model('Team', Team);

module.exports = Team;
