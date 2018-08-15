import React from "react";
import { Route, Switch } from "react-router-dom";

import menuLinks from "./data/menuLinks";
import TopNav from "./sections/TopNav";
import TOC from "./sections/TOC";
import Cover from "./sections/Cover";
import WelcomeSection from "./sections/WelcomeSection";
import WhySection from "./sections/WhySection";
import MembershipSection from "./sections/MembershipSection";
import GetInvolvedSection from "./sections/GetInvolvedSection";
import StructureSection from "./sections/StructureSection";
import DirectorySection from "./sections/DirectorySection";

const Content = () => (
  <div>
    <TopNav links={menuLinks} />
    <Cover anchor="" />
    <TOC anchor="toc" links={menuLinks} />
    <WelcomeSection anchor="welcome" />
    <WhySection anchor="why" />
    <MembershipSection anchor="membership" />
    <StructureSection anchor="structure" />
    <GetInvolvedSection anchor="get-involved" />
    <DirectorySection anchor="directory" />
  </div>
);

function App() {
  return (
    <Switch>
      <Route path="/:section/:candidate" component={Content} />
      <Route path="/:section" component={Content} />
      <Route path="/" component={Content} />
    </Switch>
  );
}

export default App;
