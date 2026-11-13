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
              Welcome to the largest socialist organization in the history of
              the country! Join us (and bring a friend) as we drag a better
              world into being. There’s no time to lose, and everything to win.
            </P>
            <P>
              We're a mix of experienced union and community organizers, newly
              minted socialists, and everyone in between. This guide is to help
              you get started. We've got a beautiful movement to build!
            </P>
            <P>
              We’re here because it feels better to knock on doors than stare at
              social media for another hour. We’re here because the old world is
              dying and the new world struggles to be born.
            </P>
            <P>
              <Strong>
                We’re here because the only other options are denial and
                despair.
              </Strong>
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default WelcomeSection;
