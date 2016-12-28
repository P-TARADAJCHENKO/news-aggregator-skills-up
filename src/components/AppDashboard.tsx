import * as React from "react";

import { NavBar } from "./NavBar";
import {NewsList} from "./NewsList";

export class AppDashboard extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div>
        <NavBar />
        <NewsList />
      </div>
    );
  }
}
