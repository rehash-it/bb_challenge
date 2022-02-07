import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { supportedLanguages } from "../../config";
import { selectTranslations, setLang } from "../../redux/i18n/i18nSlice";

const LangSwitcher = (): JSX.Element => {
  const t = useSelector(selectTranslations);
  const dispatch = useDispatch();
  const handleLangChange = (newLang: string) => {
    dispatch(setLang(newLang));
  };

  return (
    <div>
      <Button onClick={() => handleLangChange(supportedLanguages.EN)}>
        {t.English}
      </Button>
      <Button onClick={() => handleLangChange(supportedLanguages.ES)}>
        {t.Spanish}
      </Button>
    </div>
  );
};

export default LangSwitcher;
