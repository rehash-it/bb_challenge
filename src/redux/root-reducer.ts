import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import i18nReducer from './i18n/i18nSlice';

const languagePersistConfig = {
	key: 'language',
	storage,
	whitelist: ['lang'],
};
const rootReducer = combineReducers({
	i18n: persistReducer(languagePersistConfig, i18nReducer),
});

export default rootReducer;
