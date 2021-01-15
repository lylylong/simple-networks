const format = require("date-fns/format");
module.exports = {
  dateFormat: (date) => {
    return format(new Date(date), "yyyy-MM-dd");
  },
  //   format_date_2: (date) => {
  //     return format(new Date(date), "MMM dd, yyyy");
  //   },
};
