import React, { PureComponent } from "react";
import styled from "styled-components";
import breakpoint from "../components/styles/breakpoint";
import SideBar from "../components/SideBar";
import Figure from "../components/Figure";
import { H2, P, Strong } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";

const FlexOnTablet = styled.div`
  ${breakpoint.tablet`
    display: flex;
  `};
`;

class WhySection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Why are we here?</H2>
            <P>
              DSA’s surge in membership is part of the post-2016 election
              reality, a recognition of the crisis in American politics from
              healthcare to DACA to the EPA to Nazis marching in
              Charlottesville. More and more people are fed up with a system
              that seems to benefit no one but the rich and powerful. Young
              people are looking around and seeing that the planet we’ve
              inherited is falling apart, and that capitalism has nothing to
              offer except debt, depression, and wage slavery.
            </P>
            <SideBar title="A simple drink of water" theme="purple">
              <P>
                When you lean over a water fountain, you have a right to expect
                that it delivers clean, safe water for anyone and everyone. It
                should not be a segregated service. It should not be a form of
                means-tested charity for the needy, or run through decaying lead
                pipes. Water is life, water is precious, and water is not
                something to be privatized. It is a public good.
              </P>
              <P>
                We seek to take more parts of the economy out of the hands of
                profit-seekers, and instead treat them like you might treat
                clean water from a public fountain. (That’s what we mean when we
                talk about decommodifying something.)
              </P>
              <Figure graphic="drink-water" align="right" />
              <P>
                There are many other examples of profit motives creating
                screwed-up situations, like privately owned prisons or
                price-gouging during disasters. That’s part of why we’re
                socialists.
              </P>
            </SideBar>
            <P>
              The powers that be can’t and won’t deliver a world of peace,
              freedom, and human dignity; we’re going to have to do that
              ourselves.
            </P>
            <P>
              Democratic socialism starts from the basic belief that every human
              life is important, and that we have a right to make decisions
              about the world we create together. The basic needs of life—clean
              air, water, food, shelter, education—should be considered
              fundamental human rights, not an opportunity for someone to make a
              buck.
            </P>
            <P>
              It’s important to recognize that exploitation and abuse aren’t
              occasional side-effects of capitalism. Instead, they’re actually
              necessary to its function. Young people are learning through their
              own experiences what Marx observed 150 years ago: The world’s
              monetary wealth is accumulated by taking advantage of other
              people’s need to survive.
            </P>
            <FlexOnTablet>
              <Figure graphic="solidarity-in-action">
                We organize for an economy (and a society) run democratically to
                meet human needs, not for private profit.
              </Figure>
              <P>
                We organize for an economy (and a society) run democratically to
                meet human needs, not for private profit. In the short term, we
                aim to win living wages for all workers; in the long term, we
                aim to end the wage system altogether. In the short term, we
                endeavor to put an end to police and anti-immigrant violence; in
                the long term, we envision a world in which prisons and borders
                are obsolete. Now and in the future, we seek to guarantee
                quality healthcare, housing, environment, and education for all.
              </P>
            </FlexOnTablet>
            <P>
              To get there, our strategy is to build working-class political
              power from the grassroots. We are organizing face-to-face in our
              neighborhoods and workplaces, in churches and in dive bars. (Many
              of our new members have joined up after a canvasser knocked on
              their door and had a deeply real conversation with them.) We’re
              forging a democratic, volunteer, and member-run network of
              accountable relationships, so we can take collective action again
              and again.
            </P>
            <P>
              <Strong>That’s real power.</Strong> We use it to defend each other
              and take on bosses, landlords, and political elites; we aim to win
              office, change the terms of political debate, and move our society
              towards justice.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default WhySection;
