import React from "react";
import { Route, Switch } from "react-router-dom";

import menuLinks from "./data/menuLinks";
import TopNav from "./sections/TopNav";
import TOC from "./sections/TOC";
import Cover from "./sections/Cover";
import WelcomeSection from "./sections/WelcomeSection";
import OriginsSection from "./sections/OriginsSection";
import WhySection from "./sections/WhySection";
import MembershipSection from "./sections/MembershipSection";
import ConductSection from "./sections/ConductSection";
import GetInvolvedSection from "./sections/GetInvolvedSection";
import CaucusesSection from "./sections/CaucusesSection";
import FAQSection from "./sections/FAQSection";
import StructureSection from "./sections/StructureSection";
import DirectorySection from "./sections/DirectorySection";

const Content = () => (
  <div>
    <TopNav links={menuLinks} />
    <Cover anchor="" />
    <TOC anchor="toc" links={menuLinks} />
    <WelcomeSection anchor="welcome" />
    <OriginsSection anchor="origins" />
    <WhySection anchor="why" />
    <MembershipSection anchor="membership" />
    <ConductSection anchor="conduct" />
    <StructureSection anchor="structure" />
    <GetInvolvedSection anchor="get-involved" />
    <CaucusesSection anchor="caucuses" />
    <FAQSection anchor="faq" />
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
