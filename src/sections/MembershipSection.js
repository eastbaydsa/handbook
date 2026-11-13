import React, { PureComponent } from "react";
import Figure from "../components/Figure";
import { H2, H3, P, Strong } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";
import Graphic from "../components/Graphic";

class MembershipSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Membership</H2>
            <P>
              As Democratic Socialists, we aim to build a mass movement. And
              when we say 'mass movement,' we mean truly massive. Anyone who
              wants to build a socialist future is welcome in DSA. If we’re
              going to get this right, it’s going to take kindness, unselfish
              curiosity, and commitment.
            </P>
            <P>
              As part of that, we strive for two things:{" "}
              <Strong>solidarity in action,</Strong> and{" "}
              <Strong>an eye for the long haul.</Strong> Solidarity is a word
              that gets thrown around a lot. At its core, it’s a recognition
              that we are all in this together. When strikers a hundred years
              ago marched against the police, the Pinkertons, and anyone else
              trying to break them, this wasn’t an abstract concept: It was a
              survival principle. There is power in a united crowd! Like when
              British textile workers refused to work on cotton picked by
              enslaved people during the Civil War, or when varied liberation
              movements of the 1960s acted as one. These movements of solidarity
              achieved things once considered unthinkable. Similarly, there’s a
              lot of value in setting aside one’s ego and showing up for the
              work to be done. Sometimes that means reaching out to (and
              learning from) other local organizations that have been fighting
              the good fight for a long time. Sometimes that means working
              within the chapter, or just being willing to have a deep
              conversation about the things we all fear, and why no one has to
              bear it alone.
            </P>
            <div>
              <Figure graphic="solidarity-in-action">
                By doing the quiet things, we build an organization that is
                robust, resilient, and more prepared for the long haul.
              </Figure>
              <P>
                <Strong>
                  By doing the quiet things, we build an organization that is
                  robust, resilient, and more prepared for the long haul.
                </Strong>{" "}
                We can express solidarity in a lot of ways. The big, public ones
                are easy to see. The quiet ones are harder. It’s remembering
                someone’s name and pronouns. It’s putting in a little extra
                effort to fold chairs and stack clipboards after the big event.
                It’s slowing yourself down during a heated argument and taking
                time to listen to what someone is really saying, and where
                they’re coming from. If we think about building socialism as a
                generation-long project, and maybe one that will outlive us, it
                changes how we consider things. When you recognize that you
                could be working with somone for years to come, it changes the
                way you communicate. We may disagree about the ways to get
                there, but the ways we disagree can allow us to work together in
                the future.
              </P>
            </div>
            <P>
              <Strong>
                We also consider the long haul by taking care of each other and
                ourselves.
              </Strong>{" "}
              Caring about anything in this historical moment means facing up to
              crisis after crisis, from natural disasters to ICE raids to
              organized harassment. We can’t react well if we’re all anxious,
              isolated wrecks. Reach out to people and aim for genuine human
              connection. When it comes to building trust and sustained
              dialogue, in-person meetings are better than phone calls, and
              phone calls are better than texting. Most forms are better than
              social media.
            </P>
            <P>
              EBDSA is a member-run and member-funded organization. Anything
              that’s being done, from phone banking to strategic planning to
              organizing childcare for canvassers, happens because someone made
              the time for it, despite demands from work, our loves, and our
              homes.
            </P>
            <H3>What do members do?</H3>
            <P>
              As an organizer with DSA, you might be knocking on doors,
              organizing meetings, hosting a neighborhood potluck, or showing
              someone the power they didn’t know they had. You might also find
              yourself stuffing envelopes, learning (or teaching) at a socialist
              education event, or watching kids for volunteers. Whatever it is,
              prepare to feel that what you’re doing matters and is worth the
              effort. (If you joined because you wanted to show off your
              superior knowledge of Marx or get into fights on the internet, you
              should probably revise your expectations.)
            </P>
            <Graphic
              name="the-long-haul"
              alt="The long haul: People erect wind turbine"
              align="right"
              maxWidth="500px"
            />
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default MembershipSection;
