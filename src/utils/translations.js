const translations = (count, translationKey, language) => {
    const translationStrings = {
      en: {
        secondsAgo: count => `${count} ${count === 1 ? 'second' : 'seconds'} ago`,
        minutesAgo: count => `${count} ${count === 1 ? 'minute' : 'minutes'} ago`,
        hoursAgo: count => `${count} ${count === 1 ? 'hour' : 'hours'} ago`,
        yesterday: 'yesterday',
        daysAgo: count => `${count} ${count === 1 ? 'day' : 'days'} ago`,
      },
      ar: {
        secondsAgo: count => `قبل ${count} ${count === 1 ? 'ثانية' : 'ثواني'}`,
        minutesAgo: count => `قبل ${count} ${count === 1 ? 'دقيقة' : 'دقائق'}`,
        hoursAgo: count => `قبل ${count} ${count === 1 ? 'ساعة' : 'ساعات'}`,
        yesterday: 'أمس',
        daysAgo: count => `قبل ${count} ${count === 1 ? 'يوم' : 'أيام'}`,
      },
    };
  
    const selectedTranslations = translationStrings[language] || translationStrings.en;
  
    if (selectedTranslations.hasOwnProperty(translationKey)) {
      return selectedTranslations[translationKey](count);
    }
  
    // Fallback to English if the provided language is not supported
    return translationStrings.en[translationKey](count);
  };
  
  export default translations;