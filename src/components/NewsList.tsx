import * as React from "react";

import { News } from "./News";

const newsMock = [
  {
    "by" : "akkartik",
    "descendants" : 18,
    "score" : 75,
    "time" : 3,
    "title" : "LiChess: Learn from your mistakes",
    "domen" : "en.lichess.org",
    "url" : "https://en.lichess.org/blog/WFvLpiQAACMA8e9D/learn-from-your-mistakes"
  },
  {
    "by" : "pw",
    "descendants" : 229,
    "score" : 314,
    "time" : 2,
    "title" : "Superintelligence: The Idea That Eats Smart People",
    "domen" : "idlewords.com",
    "url" : "http://idlewords.com/talks/superintelligence.htm"
  },
  {
    "by" : "derwiki",
    "descendants" : 29,
    "score" : 86,
    "time" : 4,
    "title" : "Uber lawsuit alleges employees were misled on equity compensation",
    "domen" : "techcrunch.com",
    "url" : "https://techcrunch.com/2016/12/22/uber-lawsuit-alleges-employees-were-misled-on-equity-compensation/"
  }
];

export class NewsList extends React.Component<undefined, undefined> {
  public render() {
    let news = newsMock.map((news, id) => {
      return (
        <News
          key={'news-' + id}
          id={id}
          by={news.by}
          descendants={news.descendants}
          score={news.score}
          time={news.time}
          title={news.title}
          domen={news.domen}
          url={news.url}
        />
      );
    });
    return (
      <ul className="list-unstyled">
        {news}
      </ul>
    );
  }
}
