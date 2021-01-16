const format = require("date-fns/format");
module.exports = (date) => {
  return format(new Date(date), "yyyy-MM-dd");
};
