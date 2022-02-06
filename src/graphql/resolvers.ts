import { gql } from 'apollo-boost';

export const typeDefs = gql`

type Image {
    alt: String
    src: String!
    src2x: String!
   }
   type Video {
    alt: String
    src: String!
   }
   type IGStoryMission {
    date: String!
    title: String!
    video: Video!
    cashReward: Float!
   }
   type FBPostMission {
    date: String!
    title: String!
    image: Image!
    cashReward: Float!
   }
   union Mission = IGStoryMission | FBPostMission
   type GetFeedResponse {
    items: [Mission!]!
    hasNextPage: Boolean!
   }
   input GetFeedInput {
    limit: Int!
    offset: Int!
   }
   type Query {
    getFeed(input: GetFeedInput!): GetFeedResponse!
   }
`;



// const GET_FEED_ITEMS = gql`
//   {
//     cartItems @client
//   }
// `;


// const updateFeedItemsRelatedQueries = (cache :  , newFeedITems : Array) => {

//     cache.writeQuery({
//         query: GET_FEED_ITEMS,
//         data: { cartItems: newFeedITems }
//     });
// };
