import { useSelector } from "react-redux";
import { selectTranslations } from "../../redux/i18n/i18nSlice";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import "./CashTag.styles.less";

const CashTag = (type: string): JSX.Element => {
  const t = useSelector(selectTranslations);

  return (
    <>
      {type === "FBPostMission" ? (
        <div className="cash-tag-container">
          <span>{t.Cash}{ ` . `}</span>
          <FacebookFilled />
        </div>
      ) : (
        <div className="cash-tag-container">
          <span>{t.Cash}{ ` . `}</span>
          <InstagramFilled />
        </div>
      )}
    </>
  );
};

export default CashTag;
