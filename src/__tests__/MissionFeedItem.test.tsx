import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { render } from '@testing-library/react';
import MissionFeedItem from '../components/MissionFeedItem/MissionFeedItem.component';

it('should render the dog breed', async () => {
	// client has the exact same configuration as our root app client
	const client = new ApolloClient({
		cache: new InMemoryCache(),
	});
	const feedItem = {
		title: 'title',
		date: 'date',
		video: {
			alt: 'alt',
			src: 'SRC',
		},
		image: {
			alt: 'alt',
			src: 'SRC',
		},
		cashReward: 5,
	};
	render(
		<ApolloProvider client={client}>
			<MissionFeedItem feedItem={feedItem} />
		</ApolloProvider>,
	);
});
