const _ = require('lodash');

const homeController = (req, res) => {
  const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

  const name = req.params.name;

  const greet = name + ", " + _.sample(compliments);
  const backgroundColor = _.sample(colors);



  res.render('index', {
    greet,
    backgroundColor
  });

}

module.exports = homeController;
