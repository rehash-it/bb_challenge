import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { supportedLanguages } from "../../config";
import { selectTranslations, setLang } from "../../redux/i18n/i18nSlice";
import "./LangSwitcher.styles.less";

const LangSwitcher = (): JSX.Element => {
  const t = useSelector(selectTranslations);
  const lang = useSelector((state: any) => state.i18n.lang);
  const dispatch = useDispatch();
  const handleLangChange = (newLang: string) => {
    dispatch(setLang(newLang));
  };
  return (
    <div>
      <span className="custom-btn-container">
        <Button
          className={lang === 'en' ? 'custom-btn-active' : ''}
          type="primary"
          onClick={() => handleLangChange(supportedLanguages.EN)}
        >
          {t.English}
        </Button>
      </span>
      <span className="custom-btn-container">
        <Button
         className={lang === 'es' ? 'custom-btn-active' : ''}
          type="primary"
          onClick={() => handleLangChange(supportedLanguages.ES)}
        >
          {t.Spanish}
        </Button>
      </span>
    </div>
  );
};

export default LangSwitcher;
