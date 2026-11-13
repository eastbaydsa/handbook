import React, { PureComponent } from "react";
import { H2, P, Strong } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";
import Graphic from "../components/Graphic";

class CaucusesSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Caucuses</H2>
            <P>
              In DSA,{" "}
              <Strong>
                a caucus is an informal group of members seeking to influence
                the direction of the organization.
              </Strong>{" "}
              Caucuses can be primarily organized around a specific political
              goal, or based on a shared identity like gender or race. They can
              be a space for political development and discussion among
              ideologically aligned people within the big tent that is DSA,
              coordinating to influence the direction of DSA on big political
              questions, or work to elect likeminded comrades to leadership
              positions at the national or chapter level.
            </P>
            <P>
              Caucuses are a big part of DSA’s internal democracy. DSA has (so
              far) avoided the fate of a lot of other Left organizations in the
              US when it comes to marginality and schisms. The open organizing
              of caucuses is a big reason for this resiliency, because it allows
              for people to publicly disagree with decisions taken up by the
              membership or leadership.
            </P>
            <P>
              It is inevitable in a “big tent” political organization as large
              as DSA, and a chapter as large as East Bay DSA, that people will
              want to contest leadership and advance certain ideas by organizing
              with people who align with them more closely. Though it may seem
              counterintuitive, the transparent and open existence of groups
              putting forward competing visions for DSA and EBDSA helps create a
              more democratic culture, and avoids disagreements hardening into
              splits.
            </P>
            <P>
              Because caucuses are not official DSA bodies, we do not use
              chapter or national resources to promote or publicize their
              events. As unofficial groups, caucuses are not required (unlike
              official chapter bodies) to publicize their meetings and events to
              the membership.
            </P>
            <P>
              <Strong>Caucuses are not a secret.</Strong> Any caucus you hear
              about in East Bay DSA most likely has a website you could easily
              find via a google search. Some caucuses even publish guides on all
              the other ones - the Libertarian Socialist Caucus (which doesn’t
              have any members locally) produced a guide in early 2025 that many
              people find fair. Most chapter leaders who have been around for a
              while are probably happy to share their perspective with you on
              caucuses, though you should take any individual perspective with a
              grain of salt.
            </P>
            <P>
              <Strong>
                Most DSA members - even most active ones - are not in a caucus!
                A group of 10 un-caucused members in EBDSA with a specific idea
                can have just as much impact on the chapter as any formal
                caucus.
              </Strong>
            </P>
            <Graphic
              name="forming-a-caucus"
              alt="People painting protest signs"
              align="center"
              maxWidth="400px"
            />
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default CaucusesSection;
