import { Button, Card, Image } from "antd";
import { useSelector } from "react-redux";
import Feed from "../../types/Feed";
import { ReactComponent as GiftIcon } from "../../assets/gift.svg";
import { getLanguageDateFormat } from "../../utils/GetDateFormat";
import { selectTranslations } from "../../redux/i18n/i18nSlice";
import CashTag from "../CashTag/CashTag.component";
import "./MissionFeedItem.styles.less";

const { Meta } = Card;

const cardStyle = {
  background: "#F8F8F9",
  borderRadius: "8px",
};

const MissionFeedItem = (feedItem: Feed): JSX.Element => {
  const t = useSelector(selectTranslations);
  return (
    <div className="mission-feed-container">
   

      <Card
        style={cardStyle}
        cover={
          feedItem.image ? (
            <Image
              src={feedItem.image.src}
              alt={feedItem.image.alt}
              height={228}
              preview={false}
            />
          ) : (
            feedItem.video && (
              <iframe
                title={feedItem.video.alt}
                src={feedItem.video.src}
                height={228}
              
              ></iframe>
            )
          )
        }
      >
        <CashTag {...feedItem.__typename} />
        <Meta
          title={feedItem.title}
          description={
            <Button type="default" block>
              <GiftIcon />
              <strong className="reward-offset">{t.Reward}</strong>
              <span>$ {feedItem.cashReward}</span>
            </Button>
          }
        />
      </Card>
    </div>
  );
};

export default MissionFeedItem;
