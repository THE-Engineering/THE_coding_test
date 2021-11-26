const institutions = require("./institutions.json");
const submissions = require("./submissions.json");

module.exports = () => {
  return {
    institutions,
    submissions,
  };
};
