import Feed from "../types/Feed";

export const SetMetaTags = (feed: Feed) => {
    document.getElementsByTagName('meta')?.namedItem('twitter:title')?.setAttribute('content', feed.title)
    document.getElementsByTagName('meta')?.namedItem('og:title')?.setAttribute('content', feed.title)
    if (feed.image){
        document.getElementsByTagName('meta')?.namedItem('og:type')?.setAttribute('content', 'type/image')
        document.getElementsByTagName('meta')?.namedItem('og:image')?.setAttribute('content',feed.image.src)
        document.getElementsByTagName('meta')?.namedItem('twitter:image')?.setAttribute('content',feed.image.src)
        document.getElementsByTagName('meta')?.namedItem('twitter:image.alt')?.setAttribute('content',feed.image.alt)
    }
    if (feed.video){
        document.getElementsByTagName('meta')?.namedItem('og:type')?.setAttribute('content', 'type/video')
        document.getElementsByTagName('meta')?.namedItem('og:url')?.setAttribute('content',feed.video.src)
        document.getElementsByTagName('meta')?.namedItem('twitter:player')?.setAttribute('content', feed.video.src)
    }
};
