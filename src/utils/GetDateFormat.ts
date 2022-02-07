import {
  dateFormats,
  supportedLanguages
} from '../config';

export const getLanguageDateFormat = (languageCode: string, date: string) => {
  const dateFormat = new Date(date);
  if (languageCode) {
    if (languageCode === supportedLanguages.EN) {
      return (
        dateFormat.getDate() +
        " " +
        dateFormats.en.months[dateFormat.getMonth()] +
        " " +
        dateFormat.getFullYear()
      );
    }
    if (languageCode === supportedLanguages.ES) {
      return (
        dateFormat.getDate() +
        " " +
        dateFormats.es.months[dateFormat.getMonth()] +
        " " +
        dateFormat.getFullYear()
      );
    }
    return dateFormats.en;
  }
};
