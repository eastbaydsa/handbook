import React, { PureComponent } from "react";
import { H2, H3, P } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";
import Figure from "../components/Figure";
import Link from "../components/Link";

class FAQSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>FAQ.</H2>
            <H3>How do you endorse electoral candidates?</H3>
            <P>
              The democratic structure of DSA makes it essential that the
              collective membership gets to vote on a DSA endorsement. Electoral
              endorsements require a full General Meeting and 60% vote of the
              general membership.
            </P>
            <div>
              <Figure
                graphic="electoral-endorsements"
                alt="Two electoral candidates speak behind lecterns. A DSA member stands on a stool and waves a red flag."
                align="right"
              />
              <H3>What is DSA’s position on...?</H3>
              <P>
                Be mindful of when you’re representing the chapter and when
                you’re speaking as an individual. If you’re in communication
                with another organization, a business, or the press, feel free
                to mention you’re a member and speak your mind. There’s no
                muzzle here. However, just make it clear you’re not speaking on
                behalf of the organization until you’re sure it’s a position
                approved by a democratic process. The Steering Committee
                approves official chapter representatives for the purposes of
                interacting with other organizations or within a coalition
                space. Steering Committee and general membership meetings vote
                to approve positions, events, and strategies for the chapter;
                any work done by caucuses or ad hoc members should be presented
                as such.
              </P>
            </div>
            <H3>How do I start a new project?</H3>
            <P>
              If you’ve gotten involved and find that there is a specific need
              that is not being met by existing teams, you can talk to an
              organizer about your ideas and work together to develop a proposal
              for the membership or Steering Committee to vote on. Writing a
              resolution for the General Membership or Steering Committee to
              consider usually requires at least 5 members in good standing to
              sign on. You can read more about how to write a resolution, and
              when to submit to steering vs. a General Meeting, on our{" "}
              <Link href="https://www.eastbaydsa.org/resources/#how-to-submit-a-resolution">
                chapter website
              </Link>.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default FAQSection;
