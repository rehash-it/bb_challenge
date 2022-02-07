import { LOAD_FEED } from "../graphql/queries";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import Feed from "../types/Feed";
import FeedQuery from "../types/FeedQuery";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../config";
import MissionFeedItem from "../components/MissionFeedItem/MissionFeedItem.component";
import Spinner from "../components/Spinner/Spinner.component";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { selectTranslations } from "../redux/i18n/i18nSlice";
import "./MissionFeeds.styles.less";
import { SetMetaTags } from "../utils/SetMetTags";

const MissionFeeds = (): JSX.Element => {
  const t = useSelector(selectTranslations);

  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery<FeedQuery>(LOAD_FEED, {
    variables: {
      input: {
        limit: DEFAULT_LIMIT,
        offset: DEFAULT_OFFSET,
      },
    },
  });
  useEffect(() => {
    if (data) {
      setFeeds(data.getFeed.items);
      setHasMore(data.getFeed.hasNextPage);
    }
  }, [data]);

  const fetchMoreFeed = async () => {
    let initialFeeds = [...feeds];
    const { data: feedData } = await fetchMore({
      variables: {
        input: {
          limit: DEFAULT_LIMIT,
          offset: initialFeeds.length,
        },
      },
    });
    const newFeed = [...initialFeeds, ...feedData.getFeed.items];
    setHasMore(feedData.getFeed.hasNextPage);
    setFeeds(newFeed);
  };
  feeds&& feeds.length && SetMetaTags(feeds[feeds.length-1])
  return (
    <InfiniteScroll
      dataLength={feeds.length}
      next={fetchMoreFeed}
      hasMore={hasMore}
      loader={<Spinner />}
      endMessage={<p className="end-msg-container">{t.EndMessage}</p>}
    >
      {feeds &&
        feeds.map((item: Feed, index) => {
          return <MissionFeedItem key={index} {...item} />;
        })}
    </InfiniteScroll>
  );
};

export default MissionFeeds;
