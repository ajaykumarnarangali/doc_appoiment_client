import moment from "moment"
const caclAge = (dob) => {
    if (!dob) {
        return 'N/E'
    }
    const currentYear = moment(new Date()).year();
    const birthYear = moment(dob).year();
    return currentYear - birthYear;
}

export default caclAge;