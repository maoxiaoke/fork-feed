This is a forked version of feed, to enhance the feed generation for many usecases.

# Getting Started

## Installation

```bash
$ npm i @nzha/feed
```

## Example

```js
import { Feed } from "@nzha/feed";

const feed = new Feed({
  title: "Feed Title",
  description: "This is my personal feed!",
  id: "http://example.com/",
  link: "http://example.com/",
  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: "http://example.com/image.png",
  favicon: "http://example.com/favicon.ico",
  copyright: "All rights reserved 2013, John Doe",
  updated: new Date(2013, 6, 14), // optional, default = today
  generator: "awesome", // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: "https://example.com/json",
    atom: "https://example.com/atom"
  },
  author: {
    name: "John Doe",
    email: "johndoe@example.com",
    link: "https://example.com/johndoe"
  }
});

posts.forEach(post => {
  feed.addItem({
    title: post.title,
    id: post.url,
    link: post.url,
    description: post.description,
    content: post.content,
    author: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        link: "https://example.com/janedoe"
      },
      {
        name: "Joe Smith",
        email: "joesmith@example.com",
        link: "https://example.com/joesmith"
      }
    ],
    contributor: [
      {
        name: "Shawn Kemp",
        email: "shawnkemp@example.com",
        link: "https://example.com/shawnkemp"
      },
      {
        name: "Reggie Miller",
        email: "reggiemiller@example.com",
        link: "https://example.com/reggiemiller"
      }
    ],
    date: post.date,
    image: post.image
  });
});

feed.addCategory("Technologie");

feed.addContributor({
  name: "Johan Cruyff",
  email: "johancruyff@example.com",
  link: "https://example.com/johancruyff"
});

console.log(feed.rss2());
// Output: RSS 2.0

console.log(feed.atom1());
// Output: Atom 1.0

console.log(feed.json1());
// Output: JSON Feed 1.0
```

## How to claim feeds for [Follow](https://github.com/RSSNext/Follow)

To claim your feed for [Follow](https://github.com/RSSNext/Follow):

```js
const feed = new Feed({
  // ...
});

feed.addExtra('follow_challenge', {
  feedId: 'your-feed-id',
  userId: 'your-user-id'
});
```

## More Information

- Follow [@nazha](https://x.com/xiaokedada) on X for updates
