var LUNCHREACTOR = (function() {

  var hackers = {};

  function addHacker(name) {
    if (_.contains(getHackers(), name) === false)
      hackers[name] = [];
    else
      console.log(name + " is already in the record.");
  }

  function getHackers() {
    return _.keys(hackers);
  }

  return {
    addHacker: addHacker,
    getHackers: getHackers
  };

})();
