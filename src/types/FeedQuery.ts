import Feed from "./Feed";

type FeedQuery = {
  getFeed : {
    items: Feed[];
    hasNextPage: boolean;
  };
};

export default FeedQuery;
