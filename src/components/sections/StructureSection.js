import React, { PureComponent } from "react";
import SideBar from "../SideBar";
import { H2, H3, P, Strong } from "../typography";
import Container from "../Container";
import Section from "../Section";
import NavAnchor from "../NavAnchor";

class StructureSection extends PureComponent {
  render() {
    return (
      <Section>
        <NavAnchor anchor={this.props.anchor} />
        <Container>
          <H2>What’s the organizational structure of DSA?</H2>
          <P>
            DSA is a national confederation of local chapters. Every two years,
            chapters send delegates to a national convention. The delegates
            debate proposals, set priorities, and elect a 16-person body known
            as the National Political Council (NPC), which works to carry out
            the democratically determined priorities of the national
            organization over the following two years.
          </P>
          <P>
            It’s worth noting that national priorities don’t mean we can’t have
            local efforts of our own, based on our particular geographic and
            political circumstances. National’s role is to support and encourage
            local chapters (where the life of the organization is), not to tell
            us what to do. At the same time, being a part of a national
            organization allows chapters to work together for the kind of big,
            ambitious wins against entrenched capitalist interests that could
            never be achieved without national coordination. A finger is weak,
            but a fist is strong.
          </P>
          <H3>Local structure</H3>
          <P>
            The following is a breezy paraphrase of the official bylaws for East
            Bay DSA, which can be found in full at{" "}
            <a href="http://eastbaydsa.org/resources-bylaws">
              eastbaydsa.org/resources-bylaws
            </a>.
          </P>
          <P>
            The primary bodies to keep track of are the{" "}
            <Strong>General Membership</Strong>, the
            <Strong>Local Council</Strong> (LC), the{" "}
            <Strong>Internal Organizing Committee</Strong> (IOC), and the
            <Strong>External Organizing Committee</Strong> (EOC).
          </P>
          <P>
            <Strong>THE GENERAL MEMBERSHIP:</Strong> That’s all of us. That’s
            where power rests ultimately. We do the work together, set
            priorities at our yearly convention, and gather every two months for
            General Meetings to vote on chapter business. Outside of official
            meetings, petitions that are signed by significant percentages of
            the membership (usually 10%) can trigger action. General Membership
            meetings are every other month; watch the website or the EBDSA
            newsletter for specific details.
          </P>
          <P>
            <Strong>The Local Council</Strong> (LC): The East Bay DSA Local
            Council serves as the democratically elected leadership of the Local
            and is the second-highest body after the General Membership. It
            manages the chapter’s day-today affairs, provides oversight, and
            resolves conflicts. It consists of thirteen elected members, who
            serve roughly one-year terms. If you’ve got a proposal for the LC,
            reach out to one of its members to workshop it and get it on the
            docket.
          </P>
          <P>
            The Local Council has open meetings on the third Sunday of every
            month, unless several members can’t make it, in which case it’s
            sometimes (but rarely) rescheduled.
          </P>
          <P>
            THE INTERNAL ORGANIZING COMMITTEE (IOC): The Internal Organizing
            Committee focuses on the internal health of the organization. They
            focus on questions like, Are we encouraging a vibrant democratic
            culture? Do people feel like they know where to plug in? Are we
            providing pathways for people to build trust within the organization
            and further their political education? (They’re also in charge of
            recruitment and orientation for new members; this handbook, for
            instance, was the product of IOC work.) It’s also their
            responsibility to communicate with the membership about upcoming
            events and important local and national issues.
          </P>
          <P>
            When it’s time for a meeting of the General Membership, IOC handles
            the logistics and planning. The IOC consists of the three elected
            Internal Organizers and a number of appointed organizers to
            strengthen their capacities. If you’re ever feeling lost, Internal
            Organizers are good people to talk to.
          </P>
          <P>
            Their projects and teams include{" "}
            <Strong>Political Education</Strong>, <Strong>Mobilizers</Strong> (a
            shop-steward style system for engaging individual members), and
            <Strong>Social/Fundraising Events</Strong>. The IOC meets the last
            Wednesday of every month to bring in new organizers to help build
            our organization.
          </P>
          <SideBar title="Who is the local council?" style="red">
            <P>
              The Council consists of 13 elected (voting) members, for good
              luck. These are:
            </P>
            <P>
              <Strong>Two Co-Chairs:</Strong> Co-Chairs organize and preside
              over meetings of the Council. They also act as “executive
              officers” when the situation requires it: acting as official
              spokespeople, putting their names on financial documents, and
              managing communications with National or other chapters.
            </P>
            <P>
              <Strong>One Vice-Chair:</Strong> The Vice-Chair assists the
              Co-Chairs with their duties and fills in if either of the
              Co-Chairs aren’t able to fulfil their duties.
            </P>
            <P>
              <Strong>One Secretary:</Strong> The secretary takes notes and
              makes sure that minutes of all General Membership and LC meetings
              are freely available, along with any other outputs of meetings.
              They manage the institutional knowledge of the Local.
            </P>
            <P>
              <Strong>One Treasurer:</Strong> The Treasurer is responsible for
              dealing with all that dirty, dirty money: fundraising, budgeting,
              expenditures, and keeping the financial ship in order. They keep
              transparent and open finances, periodically reported out.
            </P>
            <P>
              <Strong>Three Elected Internal Organizers:</Strong> Internal
              Organizers are responsible for fostering a lively participatory
              democratic culture, and making sure no one falls through the
              cracks. They oversee the Internal Organizing Committee (IOC) and
              head up internally focused events, fundraisers, and educational
              efforts.
            </P>
            <P>
              <Strong>Three Elected External Organizers:</Strong> External
              Organizers oversee the External Organizing Committee (EOC) and are
              responsible for outward facing efforts like electoral campaigns,
              direct actions, rallies, and otherwise propagandizing.
            </P>
            <P>
              <Strong>Two At-Large Council Members:</Strong> They’re sort of
              like “ministers without portfolio” in the UK. Because they’re not
              tasked with specific roles, they can think a bit more deeply about
              Local Council decision-making and can speak for the membership as
              their main focus.
            </P>
          </SideBar>
          <P>
            <Strong>THE EXTERNAL ORGANIZING COMMITTEE (EOC):</Strong> The
            External Organizing Committee focuses on the fight for socialism in
            the East Bay and beyond, including campaigns, actions, and
            publicity. When the General Membership determines priorities and the
            Local Council turns them into plans, it’s the role of the EOC to
            execute on them.
          </P>
          <P>
            The questions they focus on will change depending on outside cir-
            cumstances and EBDSA priorities, but currently include things like,
            How do we build power in these circumstances? Who’s tabling at First
            Friday? How can we help people wake up to their power? Which
            electoral candidates are open to a socialist vision and how vocal
            are they about it? How many comrades will we have marching in the
            streets on Saturday?
          </P>
          <P>
            Like the IOC, the EOC consists of three elected External Organizers
            and a number of appointed organizers. If an effort is focused on the
            general public or the “outside world,” it probably involves EOC.
          </P>
          <P>
            Their projects and teams include <Strong>Direct Action</Strong>,{" "}
            <Strong>District Canvassing</Strong>
            (currently focused on Single-Payer), and (for efforts approved by
            the General Membership) <Strong>Electoral</Strong> work.
          </P>
          <P>
            The EOC meets the last Tuesday of every month to bring new
            organizers into our public-facing political campaigns.
          </P>
          <P>
            <Strong>BRINGING IT ALL TOGETHER</Strong>, the org looks like this
            (though the exact projects and groups within the IOC and EOC will be
            subject to change).
          </P>
        </Container>
      </Section>
    );
  }
}

export default StructureSection;
