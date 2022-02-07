import { useSelector } from "react-redux";
import Feed from "../../types/Feed";

import { getLanguageDateFormat } from "../../utils/GetDateFormat";

const MissionFeedItem = (feedItem: Feed): JSX.Element => {
  const lang = useSelector((state: any) => state.i18n.lang);

  return (
    <>
      <div>{feedItem.title}</div>
      <div>{getLanguageDateFormat(lang, feedItem.date)}</div>
      <div>{feedItem.cashReward}</div>
    </>
  );
};

export default MissionFeedItem;
