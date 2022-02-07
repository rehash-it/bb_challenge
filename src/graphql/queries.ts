import { gql } from "@apollo/client";

export const LOAD_FEED =  gql`
query ($input: GetFeedInput!) {
  getFeed(input: $input) {
    items {
      __typename
      ... on IGStoryMission {
        title
        date
        video {
          src
          alt
        }
        cashReward
      }
      ... on FBPostMission {
        title
        date
        image {
          src
          alt
        }
        cashReward
      }
    }
    hasNextPage
  }
}
`;
