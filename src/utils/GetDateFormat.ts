import {
	dateFormats,
    languageCodes
} from '../config';

export const getLanguageDateFormat = (languageCode: string , date : string) => {
    const dateFormat = new Date(date);
	if (languageCode) {
		if (languageCode === languageCodes.EN) {
			return (
                dateFormat.getDate() +
                " " +
                dateFormats.en.months[dateFormat.getMonth()] +
                " " +
                dateFormat.getFullYear()
              );
		}
		if (languageCode === languageCodes.ES) {
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
