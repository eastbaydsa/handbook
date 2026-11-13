import React, { PureComponent } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import { H2, P, Strong } from "../components/typography";
import NavAnchor from "../components/NavAnchor";

class OriginsSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>DSA’s Origins</H2>
            <P>
              The Democratic Socialists of America has its roots in the surges
              of socialist activity in the early 20th century, which at its peak
              had six-figure membership for the Socialist Party and hundreds of
              mayors and state legislators across the country. In 1982, a merger
              of Michael Harrington’s Democratic Socialist Organizing Committee
              with the New American Movement led to the creation of DSA currents
              from across the American Left.
            </P>
            <P>
              DSA was effectively reborn as an organization over the course of
              2017, following Bernie’s 2016 primary campaign and Trump’s first
              election. Since then, by deepening our ties to workplace
              struggles, sharpening our differences with corporate Democrats
              through commitments to causes like Palestinian liberation, and
              developing our collective skills as organizers, DSA members and
              electeds have emerged as a key force in the opposition to Trumpism
              and fascism in this country. We’re still evolving and growing as
              we move through this era of perpetual political crisis.
            </P>
            <P>
              <Strong>
                In 2026, national DSA membership surged to over 120,000 members
                in all 50 states, making us the largest socialist organization
                in US history.
              </Strong>{" "}
              Here in the East Bay, our active membership has grown to over
              2,500 members. By the time you’re reading this, these numbers have
              undoubtedly changed.
            </P>
            <P>
              DSA, from its inception, has been conceived of as a “big tent”, in
              contrast to some other socialist organizations where adherence to
              a highly specific set of ideas is necessary to participate.
            </P>
            <P>
              <Strong>
                We're a mass organization for everybody who wants to work
                together to win socialism.
              </Strong>
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default OriginsSection;
