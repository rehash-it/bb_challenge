type FileSrc = {
    alt: string;
    src: string;
};

type Feed = {
    title: string;
    date: string;
    video: FileSrc;
    image: FileSrc;
    cashReward: number;
    __typename: string
};

export default Feed;