import React from "react";
import { Route, Switch } from "react-router-dom";

import TopNav from "./components/sections/TopNav";
import TOC from "./components/sections/TOC";
import Cover from "./components/sections/Cover";
import WelcomeSection from "./components/sections/WelcomeSection";
import WhySection from "./components/sections/WhySection";
import MembershipSection from "./components/sections/MembershipSection";
import GetInvolvedSection from "./components/sections/GetInvolvedSection";
import StructureSection from "./components/sections/StructureSection";
import ConflictSection from "./components/sections/ConflictSection";
import DirectorySection from "./components/sections/DirectorySection";

const links = [
  { label: "Welcome", to: "/welcome" },
  { label: "Why are we here?", to: "/why" },
  { label: "What does it mean to be a member?", to: "/membership" },
  { label: "What do I do as a member?", to: "/get-involved" },
  {
    label: "What's the organizational structure of the DSA?",
    to: "/structure"
  },
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
    <GetInvolvedSection anchor="get-involved" />
    <StructureSection anchor="structure" />
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
