import { useSelector } from "react-redux";
import Feed from "../../types/Feed";

import {getLanguageDateFormat} from '../../utils/GetDateFormat';

const MissionFeedItem = (feedItem : Feed) : JSX.Element => {
  const lang = useSelector((state : any) => state.i18n.lang);
  getLanguageDateFormat(lang,feedItem.date);

  return <>
     { feedItem.title}
   </>
}

export default MissionFeedItem;