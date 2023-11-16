function timeAgo(dateString, translations) {
    const date = new Date(dateString);
    const now = new Date();

    const secondsPast = (now - date) / 1000;

    if (secondsPast < 60) {
        return secondsPast + ' ' + translations.secondsAgo(Math.round(secondsPast));
    }
    if (secondsPast < 3600) {
        return secondsPast + ' ' + translations.minutesAgo(Math.round(secondsPast / 60));
    }
    if (secondsPast <= 86400) {
        return secondsPast + ' ' +translations.hoursAgo(Math.round(secondsPast / 3600));
    }
    if (secondsPast > 86400) {
        const day = Math.round(secondsPast / 86400);
        if (day === 1) {
            return translations.yesterday;
        } else {
            return day + ' ' + translations.daysAgo(day);
        }
    }
}

export default timeAgo;