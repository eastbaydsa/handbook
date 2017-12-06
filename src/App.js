import React from "react";
import stylesheet from "./styles/index.css";
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
  { label: "Welcome", href: "#welcome" },
  { label: "Why are we here?", href: "#why" },
  { label: "What does it mean to be a member?", href: "#membership" },
  { label: "What do I do as a member?", href: "#get-involved" },
  {
    label: "What's the organizational structure of the DSA?",
    href: "#structure"
  },
  {
    label: "I have a conflict with someone in the EB DSA. What should I do?",
    href: "#conflict"
  },
  { label: "Directory", href: "#directory" }
];

const App = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <TopNav links={links} />
    <Cover />
    <TOC links={links} />
    <WelcomeSection anchor="welcome" />
    <WhySection anchor="why" />
    <MembershipSection anchor="membership" />
    <GetInvolvedSection anchor="get-involved" />
    <StructureSection anchor="structure" />
    <ConflictSection anchor="conflict" />
    <DirectorySection anchor="directory" />
  </div>
);

export default App;
