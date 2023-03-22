const moment = require("moment-timezone");
const zone_name = moment.tz.guess();
moment.tz.setDefault(zone_name);

export const formatedDate = (date) => {
  const today = moment(date).valueOf();
  const dateSelect = moment(today).format("DD/MM/YYYY");
  return dateSelect;
};

export const formatedDateDay = (date) => {
  const todayOf = moment(date).startOf("day").valueOf();
  const todayEnd = moment(date).endOf("day").valueOf();
  return { todayOf, todayEnd };
};

export const formatedDateTracking = (date) => {
  const today = moment(date).valueOf();
  const dateSelect = moment(today).format("DD/MM/YYYY, h:mm:ss a");
  return dateSelect;
};
