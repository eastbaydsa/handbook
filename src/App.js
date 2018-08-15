import React from "react";
import { Route, Switch } from "react-router-dom";

import TopNav from "./sections/TopNav";
import TOC from "./sections/TOC";
import Cover from "./sections/Cover";
import WelcomeSection from "./sections/WelcomeSection";
import WhySection from "./sections/WhySection";
import MembershipSection from "./sections/MembershipSection";
import GetInvolvedSection from "./sections/GetInvolvedSection";
import StructureSection from "./sections/StructureSection";
import ConflictSection from "./sections/ConflictSection";
import DirectorySection from "./sections/DirectorySection";

const links = [
  { label: "Welcome", to: "/welcome" },
  { label: "Why are we here?", to: "/why" },
  { label: "What does it mean to be a member?", to: "/membership" },
  {
    label: "What's the organizational structure of the DSA?",
    to: "/structure"
  },
  { label: "What do I do as a member?", to: "/get-involved" },
  {
    label: "I have a conflict with someone. What should I do?",
    to: "/conflict"
  },
  { label: "Directory", to: "/directory" }
];

const Content = () => (
  <div>
    <TopNav links={links} />
    <Cover anchor="" />
    <TOC anchor="toc" links={links} />
    <WelcomeSection anchor="welcome" />
    <WhySection anchor="why" />
    <MembershipSection anchor="membership" />
    <StructureSection anchor="structure" />
    <GetInvolvedSection anchor="get-involved" />
    <ConflictSection anchor="conflict" />
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
