import React, { PureComponent } from "react";
import SideBar from "../components/SideBar";
import { H2, H3, P, Strong } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";
import Figure from "../components/Figure";
import Link from "../components/Link";

class StructureSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>What’s the organizational structure of DSA?</H2>
            <P>
              DSA is a national confederation of local chapters. Every two
              years, chapters send delegates to a national convention. The
              delegates debate proposals, set priorities, and elect a 16-person
              body known as the National Political Council (NPC), which works to
              carry out the democratically determined priorities of the national
              organization over the following two years.
            </P>
            <P>
              It’s worth noting that national priorities don’t mean we can’t
              have local efforts of our own, based on our particular geographic
              and political circumstances. National’s role is to support and
              encourage local chapters (where the life of the organization is),
              not to tell us what to do. At the same time, being a part of a
              national organization allows chapters to work together for the
              kind of big, ambitious wins against entrenched capitalist
              interests that could never be achieved without national
              coordination. A finger is weak, but a fist is strong.
            </P>
            <H3>Local structure</H3>
            <P>
              The following is a breezy paraphrase of the official bylaws for
              East Bay DSA, which can be found in full at{" "}
              <Link href="http://eastbaydsa.org/resources-bylaws">
                eastbaydsa.org/resources-bylaws
              </Link>.
            </P>
            <P>
              The primary bodies to keep track of are the{" "}
              <Strong>General Membership</Strong>, and the{" "}
              <Strong>Steering Committee</Strong> (SC)
            </P>
            <P>
              <Strong>THE GENERAL MEMBERSHIP:</Strong> That’s all of us and
              where power rests. We meet as a body to set priorities at a yearly
              convention, and gather regularly for general meetings to vote on
              important questions.
            </P>
            <P>
              <Strong>THE STEERING COMMITTEE</Strong> (SC): This is the elected
              leadership and the second-highest body after the general
              membership. It manages the chapter’s day-to-day affairs, provides
              oversight, and resolves conflicts. It consists of thirteen elected
              members who serve roughly one-year terms.
            </P>
            <SideBar title="Who is the steering committee?" theme="purple">
              <P>
                The Council consists of 13 elected (voting) members, for good
                luck. These are:
              </P>
              <P>
                <Strong>Two Co-Chairs:</Strong> Co-chairs organize and preside
                over meetings of the Council. They also act as “executive
                officers” when the situation requires it, acting as official
                spokespeople, putting their names on financial documents, and
                managing communications with National or other chapters.
              </P>
              <P>
                <Strong>One Vice-Chair:</Strong> The vice-chair assists the
                co-chairs with their duties and fills in if either of the
                co-chairs aren’t able to fulfill their duties.
              </P>
              <P>
                <Strong>One Recording Secretary:</Strong> The secretary is
                responsible for taking the minutes of all general membership and
                Steering Committee meetings and reporting the minutes,
                resolutions, reports, and other official records of the chapter.
                The recording secretary may appoint, but must oversee, a
                temporary proxy minutes-taker for any meeting.
              </P>
              <P>
                <Strong>One Communications Secretary:</Strong> The
                communications secretary is responsible for the member
                newsletter and website, though each of these functions may be
                substantially delegated to or shared with designated committees.
              </P>
              <P>
                <Strong>One Treasurer:</Strong> The treasurer is responsible for
                dealing with fundraising, budgeting, expenditures, and keeping
                the financial ship in order. They keep transparent and open
                finances, periodically reported out.
              </P>
              <P>
                <Strong>Seven At-Large Council Members:</Strong> At-large
                Steering Committee members participate in Steering Committee
                decision-making and are responsible for attending all relevant
                meetings and reading all relevant documents. At-large Steering
                Committee members are also tasked with representing the views of
                the membership that elected them as well as helping to advance
                the goals of the chapter generally.
              </P>
            </SideBar>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default StructureSection;
