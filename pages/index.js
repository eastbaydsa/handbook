import stylesheet from "../styles/index.css";
import TopNav from "../components/sections/TopNav";
import TOC from "../components/sections/TOC";
import Cover from "../components/sections/Cover";
import WelcomeSection from "../components/sections/WelcomeSection";
import WhySection from "../components/sections/WhySection";
import MembershipSection from "../components/sections/MembershipSection";
import GetInvolvedSection from "../components/sections/GetInvolvedSection";
import StructureSection from "../components/sections/StructureSection";
import ConflictSection from "../components/sections/ConflictSection";
import DirectorySection from "../components/sections/DirectorySection";

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
    label: "I have a conflict with someone in the EB DSA. What should I do?",
    to: "/conflict"
  },
  { label: "Directory", to: "/directory" }
];

const Index = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <TopNav links={links} />
    <Cover />
    <TOC links={links} />
    <WelcomeSection />
    <WhySection />
    <MembershipSection />
    <GetInvolvedSection />
    <StructureSection />
    <ConflictSection />
    <DirectorySection />
  </div>
);

export default Index;
