import { createSlice } from '@reduxjs/toolkit';
import en from '../../translations/en.json';
import es from '../../translations/es.json';

const initialState = {
	lang: 'en',
	translations: { en, es },
};

export const i18nSlice = createSlice({
	name: 'i18n',
	initialState,
	reducers: {
		setLang: (state, action) => {
			state.lang = action.payload;
		},
	},
});

export const { setLang } = i18nSlice.actions;

export const selectTranslations = (state : any) =>
	state.i18n.translations[state.i18n.lang];

export default i18nSlice.reducer;
