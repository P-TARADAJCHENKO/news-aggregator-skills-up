import * as React from "react";

export interface NewsProps {
  id: number,
  by: string,
  descendants: number,
  score: number
  time: number,
  title: string,
  domen: string,
  url: string
}

export class News extends React.Component<NewsProps, undefined> {
  public render() {
    return (
      <li className="row m-1">
        <div className="col-xs-1 p-0">
          <span className="pr-1">{this.props.id}</span>
          <button className="btn btn-outline-success btn-sm">^</button>
        </div>
        <div className="col-xs-11">
          <div className="row">
            <a href={this.props.url} className="news-title">{this.props.title}</a>
            <button type="button" className="btn btn-link btn-sm">({this.props.domen})</button>
          </div>
          <div className="row text-muted">
            <span className="news-score">{this.props.score} points </span>
            <span>by </span>
            <a href="#" className="news-author text-muted">{this.props.by}</a>
            <span> </span>
            <a href="#" className="news-time text-muted">{this.props.time} hours ago</a>
            <span> | </span>
            <a href="#" className="news-hide text-muted">hide</a>
            <span> | </span>
            <a href="#" className="news-comments text-muted">{this.props.descendants} comments</a>
          </div>
        </div>
      </li>
    );
  }
}