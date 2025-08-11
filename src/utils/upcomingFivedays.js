import moment from "moment";
const upcomingFiveDays = [];
for (let i = 0; i < 5; i++) {
    const day = moment().add(i, 'days');
    const dateNum = day.date();
    const dayName = day.format('dddd');
    upcomingFiveDays.push({ date: dateNum, name: dayName });
}

export default upcomingFiveDays;