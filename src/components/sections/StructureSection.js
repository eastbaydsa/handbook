import React, { PureComponent } from "react";
import SideBar from "../SideBar";
import { H2, H3, P, Strong } from "../typography";
import Container from "../Container";
import Section from "../Section";
import NavAnchor from "../NavAnchor";
import Figure from "../Figure";
import Link from "../Link";

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
              <Strong>General Membership</Strong>, the
              <Strong>Local Council</Strong> (LC), the{" "}
              <Strong>Internal Organizing Committee</Strong> (IOC), and the
              <Strong>External Organizing Committee</Strong> (EOC).
            </P>
            <P>
              <Strong>THE GENERAL MEMBERSHIP:</Strong> That’s all of us and
              where power rests. We meet as a body to set priorities at a yearly
              convention, and gather every two months for general meetings to
              vote on important questions. A petition signed by 10 percent of
              the membership can also trigger action.
            </P>
            <P>
              <Strong>The Local Council</Strong> (LC): This is the elected
              leadership and the second-highest body after the general
              membership. It manages the chapter’s day-to-day affairs, provides
              oversight, and resolves conflicts. It consists of thirteen elected
              members who serve roughly one-year terms.
            </P>
            <P>
              THE INTERNAL ORGANIZING COMMITTEE (IOC): This committee is
              responsible for the internal health of the organization. That
              includes new member orientation, political education, fundraising,
              and writing this handbook. Internal Organizers are good people to
              talk to if you’re feeling lost.
            </P>
            <SideBar title="Who is the local council?" theme="red">
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
                co-chairs aren’t able to fulfil their duties.
              </P>
              <P>
                <Strong>One Secretary:</Strong> The secretary takes notes and
                makes sure that minutes of all general membership and LC
                meetings are freely available along with any other outputs of
                meetings. They manage the institutional knowledge of the Local.
              </P>
              <P>
                <Strong>One Treasurer:</Strong> The treasurer is responsible for
                dealing with all that dirty, dirty money: fundraising,
                budgeting, expenditures, and keeping the financial ship in
                order. They keep transparent and open finances, periodically
                reported out.
              </P>
              <P>
                <Strong>Three Elected Internal Organizers:</Strong> Internal
                organizers are responsible for fostering a lively participatory
                democratic culture and making sure no one falls through the
                cracks. They oversee the Internal Organizing Committee (IOC) and
                head up internally focused events, fundraisers, and educational
                efforts.
              </P>
              <P>
                <Strong>Three Elected External Organizers:</Strong> External
                organizers oversee the External Organizing Committee (EOC) and
                are responsible for outward facing efforts like electoral
                campaigns, direct actions, rallies, and otherwise
                propagandizing.
              </P>
              <P>
                <Strong>Two At-Large Council Members:</Strong> They’re sort of
                like “ministers without portfolio” in the UK. Because they’re
                not tasked with specific roles, they can think a bit more deeply
                about Local Council decision-making and can speak for the
                membership as their main focus.
              </P>
            </SideBar>
            <div>
              <Figure
                graphic="single-payer"
                alt="Patients and medical professionals raise their fists into the air"
                align="right"
              />
              <P>
                <Strong>THE EXTERNAL ORGANIZING COMMITTEE (EOC):</Strong> This
                committee is responsible for outward facing efforts, from public
                outreach campaigns to direct action. If you want to get out into
                the world to fight for socialism, EOC meetings are a good place
                to start.
              </P>
            </div>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default StructureSection;
