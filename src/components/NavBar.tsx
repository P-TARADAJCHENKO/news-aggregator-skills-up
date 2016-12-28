import * as React from "react";

export class NavBar extends React.Component<undefined, undefined> {
  public render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a href="#" className="navbar-brand">News-Aggregator</a>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a href="#" className="nav-link">Popular</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">New</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Submit</a>
          </li>
        </ul>
        <button type="button" className="btn btn-outline-primary float-xs-right">Login</button>
      </nav>
    );
  }
}