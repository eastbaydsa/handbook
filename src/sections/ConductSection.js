import React, { PureComponent } from "react";
import SideBar from "../components/SideBar";
import { H2, P, Strong } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";
import Graphic from "../components/Graphic";
import Link from "../components/Link";

class ConductSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Keeping it Comradely</H2>
            <P>
              A comrade is your partner in solidarity. It’s sort of like a
              teammate: They don’t have to be your friend, but there’s a shared
              recognition of being on the same side. As a multi-tendency
              organization with a broad spectrum of opinions and a culture of
              open expression, it can be easy to quickly find oneself in
              disagreement. When disagreements arise, it’s important to remember
              that we’re all pulling for a better future. While far from an
              exhaustive list, here are some things we ask our members to commit
              to:
            </P>
            <P>
              <Strong>Act in good faith.</Strong> Stay in integrity with what
              you think, say, and do.
            </P>
            <P>
              <Strong>Assume good faith in your fellow comrades.</Strong> That
              means trusting that we are all here with a hope for a better
              world. If someone says something that rubs you the wrong way,
              start by asking clarifying questions before leaping to
              conclusions. If you’re being challenged on something, try to be
              open to it as a valid critique first. If you disagree with a
              tactic or project someone proposes, remember that they are
              motivated by wanting to build a socialist world just like you.
            </P>
            <P>
              <Strong>Notice when you're thinking in either/or terms.</Strong>{" "}
              It’s tempting to split the world into “only two choices” or “two
              kinds of people” or other sets of opposites that fundamentally
              boil down to “good/bad.” (This is referred to as binary thinking.)
              Unfortunately, this also makes it easy to separate into artificial
              forms of “us” and “them,” and harder to stay in solidarity.
            </P>
            <P>
              <Strong>
                Know whether you need to “step up” or “step back.”
              </Strong>{" "}
              If you notice yourself speaking significantly more than others,
              see how you can open up opportunities for others to contribute to
              the conversation. On the other hand, if you typically shy away, we
              encourage you to speak up.
            </P>
            <P>
              <Strong>Bring people into the conversation.</Strong> Building
              power means everyone feels welcome to speak. As you take part in
              conversations, try to notice if people are disengaging and give
              them on-ramps back in. If they said something important that
              didn’t get addressed, echo it.
            </P>
            <P>
              <Strong>
                Listen fully with a willingness to have your mind changed.
              </Strong>{" "}
              “Winning” as an individual is counterproductive if the discussion
              goes nowhere. When others are speaking, attend to what they have
              to say, instead of planning your response. Give them the respect
              of your undivided attention, minimizing phone and computer use
              unless it’s necessary to the task at hand.
            </P>
            <P>
              <Strong>
                Recognize and respect others’ feelings, backgrounds, and
                cultural differences.
              </Strong>{" "}
              Everyone has a piece of the truth, and you can learn something
              from everyone. Respect where people are coming from. This is
              particularly important given the demographics of the East Bay and
              the historical marginalization of many working-class communities
              here.
            </P>
            <P>
              <Strong>Keep the conversation accessible.</Strong> Try to clarify
              terms when jargon or acronyms get thrown around, and remember that
              everything we do can be an opportunity for socialist education.
            </P>
            <P style={{ marginTop: "50px" }}>
              We also know that having been raised in oppressive systems, every
              last one of us will have blind spots. Everyone is a work in
              progress, and mass organizations are necessarily full of
              contradictions. Moral clarity is important, but there’s no such
              thing as purity. None of us are perfect, and all of us make
              mistakes. We’re all working on becoming better than we are now.
            </P>
            <Graphic
              name="no-work-picnic"
              alt="No work pinic"
              align="center"
              maxWidth="300px"
            />
            <SideBar title="Abuse and predatory behavior" theme="purple">
              <P>
                Even with the best of intentions, conflicts arise. There are
                policies in place for grievances and harassment.
              </P>
              <P>
                We have no tolerance for abuse and predatory behavior. According
                to our bylaws, the Steering Committee may vote to discipline
                (suspend or expel) members whose actions are found to be in
                violation of our code of conduct. The chapter takes these
                complaints seriously, and will always handle them with
                confidentiality and care.
              </P>
              <P>
                If you have a conflict with an East Bay DSA comrade that you
                can’t resolve on your own, please let someone in leadership
                know. If you are concerned about a code of conduct violation,
                reach out to our chapter Grievance Stewards at{" "}
                <Link href="mailto:stewards@eastbaydsa.org">
                  stewards@eastbaydsa.org
                </Link>.
              </P>
            </SideBar>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default ConductSection;
