const mongoose = require('mongoose');
const { Schema } = mongoose;

const Event = new Schema({
  temperature: Number,
  site: {
    capacity: Number,
    surface: String,
    name: String,
    state: String,
    city: String,
  },
  attendance: Number,
  duration: String,
  status: String,
  season_type: String,
  start_date_time: Date,
});

mongoose.model('Event', Event);

module.exports = Event;
