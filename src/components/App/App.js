import React from "react";

import { Route, Switch } from "react-router-dom";
import Theme from "../../theme/Theme";
import { Wrapper } from "./AppStyle";
import { Circle1, Circle2 } from "../Shared/BackgroundCircle/BackgroundCircles";

import Header from "../Shared/Header";
import Home from "../Home/Home";
import Information from "../Information/Info";
import Page404 from "../PageNotFound/Page404";
import Footer from "../Shared/Footer";

function App() {
  return (
    <Theme>
      <Wrapper>
        <Circle1 />
        <Circle2 />
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Information} />
            <Route path="*" component={Page404} />
          </Switch>
        </div>
        <Footer />
      </Wrapper>
    </Theme>
  );
}

export default App;
