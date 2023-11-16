import translations from "./translations";

function timeAgo(dateString, language) {
    const date = new Date(dateString);
    console.log(date)
    const now = new Date();
    const secondsPast = (now - date) / 1000;

    if (secondsPast < 60) {
        return translations(Math.round(secondsPast), 'secondsAgo', language);
    }
    if (secondsPast < 3600) {
        return translations(Math.round(secondsPast / 60), 'minutesAgo', language);
    }
    if (secondsPast <= 86400) {
        return translations(Math.round(secondsPast / 3600), 'hoursAgo', language);
    }
    if (secondsPast > 86400) {
        const day = Math.round(secondsPast / 86400);
        if (day === 1) {
            return translations(1, 'yesterday', language);
        } else {
            return translations(day, 'daysAgo', language);
        }
    }
}

export default timeAgo;