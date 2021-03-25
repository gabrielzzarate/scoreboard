const mongoose = require('mongoose');
const Game = mongoose.model('games');
const Api = require('../scoreboard');
const NBA_ID = '6c974274-4bfc-4af8-a9c4-8b926637ba74';
const timeSince = require('../util/timeSince');

const nba = new Api(NBA_ID);

module.exports = app => {
  app.get('/api/nba', async (req, res) => {
    let game = await Game.findOne({ bsid: NBA_ID }).exec();

    if (!game) {
      const scoreboard = await nba.getScores();

      const game = new Game({
        ...scoreboard,
        created_on: new Date(),
        bsid: NBA_ID,
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

      const updatedScoreboard = await nba.getScores();

      const updateGame = await Game.findByIdAndUpdate(_id, {
        ...updatedScoreboard,
        created_on: new Date(),
        bsid: NBA_ID
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
