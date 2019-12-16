import getDay from "date-fns/getDay";

const dayOfTheWeek = () => {
    let day;

    switch (getDay(new Date())) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = null;
    };

    return day;
};

export default dayOfTheWeek;