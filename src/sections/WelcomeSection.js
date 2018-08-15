import React, { PureComponent } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import { H2, P, Strong } from "../components/typography";
import NavAnchor from "../components/NavAnchor";

class WelcomeSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Welcome to East Bay DSA. We’re glad you’re here.</H2>
            <P>
              Welcome to the fastest-growing socialist organization in the
              country. We need you (and two or more of your friends) to pitch
              in, show up, and drag a new world into being. There’s no time to
              lose, and everything to win.
            </P>
            <P>
              The Democratic Socialists of America has its roots in the surges
              of socialist activity in the early 20th century, which at its peak
              had six-figure membership for the Socialist Party and hundreds of
              mayors and state legislators across the country. In 1982, a merger
              of Michael Harrington’s Democratic Socialist Organizing Committee
              with the New American Movement led to the creation of DSA,
              bringing together feminist, anti-Stalinist, and anti-imperialist
              currents from across the American Left. DSA is a “big tent”:{" "}
              <Strong>
                We're a mass organization for everybody who wants to work
                together to win socialism.
              </Strong>
            </P>
            <P>
              In just the past year, national DSA membership has quadrupled to
              over 30,000 members in all 50 states. Here in the East Bay, our
              active membership has grown even faster, as a dozen-strong
              donuts-and-conversation group suddenly took on hundreds of new
              members. An all-volunteer force built the chapter as we know it
              (its structure, processes, and culture, right down to this
              handbook) over the course of 2017. We’re figuring it out as we go,
              and as we all seek to understand and act in a new political
              context.
            </P>
            <P>
              We're a mix of experienced union and community organizers, newly
              minted socialists, and everyone in between. This guide is to help
              you get started. We've got a beautiful movement to build!
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default WelcomeSection;
