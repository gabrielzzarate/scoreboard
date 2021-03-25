const mongoose = require('mongoose');
const Game = mongoose.model('games');
const Api = require('../scoreboard');
const MLB_ID = 'eed38457-db28-4658-ae4f-4d4d38e9e212';

function timeSince(date) {
  var seconds = Math.floor((new Date().getTime() - date) / 1000);

  return seconds;
}

const mlb = new Api(MLB_ID);

module.exports = app => {
  app.get('/api/mlb', async (req, res) => {
    let game = await Game.findOne({ bsid: MLB_ID }).exec();

    if (!game) {
      const scoreboard = await mlb.getScores();

      const game = new Game({
        ...scoreboard,
        created_on: new Date(),
        bsid: MLB_ID,
      });

      try {
        await game.save();

        return res.status(200).json(game);
      } catch(err) {
        return res.status(422).status({ err });
      }
    }

    const { created_on, _id } = game;
    const date = new Date(created_on).getTime();

    const seconds = timeSince(date);

    if (seconds > 15) {

      const updatedScoreboard = await mlb.getScores();

      const updateGame = await Game.findByIdAndUpdate(_id, {
        ...updatedScoreboard,
        created_on: new Date(),
      });

      try {
        await updateGame.save();


        res.status(200).json(updateGame);
      } catch (err) {
        res.status(404).send({ err });
      }
    } else {

      res.status(200).json(game);
    }
  });
}
