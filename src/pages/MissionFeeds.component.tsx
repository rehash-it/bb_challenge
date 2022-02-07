import { LOAD_FEED } from "../graphql/queries";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import Feed from "../types/Feed";
import FeedQuery from "../types/FeedQuery";
import { LIMIT } from "../config";
import MissionFeedItem from "../components/MissionFeedItem/MissionFeedItem.component";
import Spinner from "../components/Spinner/Spinner.component";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { selectTranslations } from "../redux/i18n/i18nSlice";

const MissionFeeds = (): JSX.Element => {
  const t = useSelector(selectTranslations);

  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery<FeedQuery>(LOAD_FEED, {
    variables: {
      input: {
        limit: 100,
        offset: 0,
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
          limit: LIMIT,
          offset: initialFeeds.length,
        },
      },
    });
    const newFeed = [...initialFeeds, ...feedData.getFeed.items];
    setHasMore(feedData.getFeed.hasNextPage);
    setFeeds(newFeed);
  };
  return (
    <InfiniteScroll
      dataLength={feeds.length}
      next={fetchMoreFeed}
      hasMore={hasMore}
      height={800}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>{t.EndMessage }</b>
        </p>
      }
    >
      {feeds &&
        feeds.map((item: Feed) => {
          return <MissionFeedItem {...item} />;
        })}
    </InfiniteScroll>
  );
};

export default MissionFeeds;
