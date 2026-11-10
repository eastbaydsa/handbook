import React, { PureComponent } from "react";
import { H2, H3, P, Strong } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";
import Link from "../components/Link";

class StructureSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>How is DSA Structured?</H2>
            <H3>National Organization</H3>
            <P>
              DSA is a national organization, although most of its work is
              carried out by local chapters. Every two years, each chapter sends
              elected delegates to a <Strong>National Convention</Strong>. The
              delegates debate proposals, set priorities, and elect a 25-person
              body known as the{" "}
              <Strong>National Political Committee (NPC)</Strong>, which works
              to carry out the democratically determined priorities of the
              national organization over the following two years. The National
              organization also works on labor, elections, international
              solidarity, and more.
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
            <a href="/images/org-chart.png">
              <img
                src="/images/org-chart.png"
                alt="East Bay DSA org chart. The General Membership elects the Steering Committee (with the Propaganda Team, Comms Secretary, Bay Area Current and Grievance Stewards) and the Chapter Coordination Committee (with the New Member Cohort Team, Membership Development Team, Meetings Team, Red Rabbits, Tech Team, Disability Justice Working Group and Office Team). The General Membership authorizes Priority Campaigns, Working Groups, Electoral Endorsements, Committees (Anti-Imperialism, Stop Cop Nation, Housing, Climate Action, Socialism Beats Fascism, Political Education, Migrants Defense, Labor) and Branches (Contra Costa, Solano & Napa Region, Chochenyo Baylands & Valley)."
                style={{ width: "100%", height: "auto", marginBottom: "30px" }}
              />
            </a>
            <H3>East Bay Chapter</H3>
            <P>
              The following is a breezy paraphrase of the official bylaws for
              East Bay DSA, which can be found in full on our{" "}
              <Link href="https://www.eastbaydsa.org/bylaws/">website</Link>.
            </P>
            <P>
              <Strong>General Membership:</Strong> That’s all of us, and where
              power rests. We meet as a body to set priorities at an annual
              convention, and gather regularly for General Meetings (GMs) to
              vote on important questions. Membership elects the Steering
              Committee, which is tasked with implementing the will of the
              membership as determined by General Meetings and convention. East
              Bay DSA is all of us!
            </P>
            <P>
              <Strong>Steering Committee (SC):</Strong> This is the
              second-highest chapter body, elected annually to one-year terms by
              all members in good standing, with a maximum of three consecutive
              terms. SC makes time-sensitive political and financial decisions
              that can’t wait for a General Meeting, or that aren’t significant
              enough to go to a GM. Steering consists of 9 elected (voting)
              members. These are: two Co-Chairs, one Recording Secretary, one
              Vice-Chair, one Treasurer, and four At-Large Members.
            </P>
            <P>
              <Strong>Chapter Coordination Committee (CCC):</Strong> This
              umbrella committee coordinates the more internal-facing aspects of
              the chapter. Two CCC co-chairs are elected annually to help ensure
              these bodies are functioning and interfacing with the rest of the
              chapter well.
            </P>
            <P>
              <Strong>Branches:</Strong> These are geographically-bounded
              chapter bodies approved to both implement existing chapter work in
              their areas, and bring proposals for new work that would be
              specifically strategic or meaningful to their area.
            </P>
            <P>
              <Strong>Working Groups:</Strong> Generally approved for more
              temporary or experimental work, these chapter bodies usually get
              an initial charter of 6 months. They can apply to become
              committees later, if they choose.
            </P>
            <P>
              <Strong>Steering Committee Appointees:</Strong> The Propaganda
              Team, the Bay Area Current (EBDSA’s outward-facing news
              publication), and the Grievance Team, report directly to the SC.
              Steering appoints the Stewards, Officers, Comms Secretary, and
              leaders of CCC teams. All other Committees and Campaigns are
              subject to renewal at chapter convention each year.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default StructureSection;
