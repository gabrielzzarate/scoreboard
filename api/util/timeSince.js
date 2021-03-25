function timeSince(date) {
  var seconds = Math.floor((new Date().getTime() - date) / 1000);

  return seconds;
}

module.exports = timeSince;