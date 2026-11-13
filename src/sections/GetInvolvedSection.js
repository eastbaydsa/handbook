import React, { PureComponent } from "react";
import SideBar from "../components/SideBar";
import { H2, H3, P, Strong } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";
import Graphic from "../components/Graphic";
import Link from "../components/Link";
import { red } from "../components/colors";

class GetInvolvedSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>How do I get involved?</H2>
            <P>
              The way our members become active members is usually: “show up to
              meetings, then take on work.” We have a variety of meetings every
              month: Each of them should include opportunities for new members
              to dig into ongoing projects -- and if they don’t, feel free to
              ask! If you’re not sure how or where to get involved, our{" "}
              <Strong>
                <Link href="https://www.eastbaydsa.org/events/" color={red}>
                  online events calendar
                </Link>
              </Strong>{" "}
              and our{" "}
              <Strong>
                <Link href="https://www.eastbaydsa.org/discord/" color={red}>
                  Discord server
                </Link>
              </Strong>{" "}
              are our most frequently updated sources of things to do. For
              specific questions, the <Link to="/directory">directory</Link> at
              the end of this guide should help you figure out who to contact.
            </P>
            <P>
              We think of all DSA members as socialist organizers (that’s what
              it says on your membership card!), but at the same time we know
              that almost no one comes to DSA a fully formed socialist
              organizer. Organizing requires us all to develop a variety of
              skills: being able to map out a social group, identifying natural
              leaders, figuring out what people need to hear in order to bring
              their best, and making courageous asks. These are skills you can
              apply inside the organization as you get your feet under you, but
              also outside of it: figuring out what friends to invite to which
              events, testing which appeals work on your uncle at Thanksgiving,
              and otherwise advancing socialism through honest conversations.
              Organizing also requires practical skills like being reliable,
              organized, and communicative about your limits and your
              availability.
            </P>
            <SideBar title="Showing up builds trust!" theme="purple">
              <P>
                There is a spectre haunting NorCal: the spectre of flakiness.
                People say “We should meet up!” and never follow through.
                Good-sounding ideas are tossed around without serious
                consideration of what it would take to make them happen. This is
                undoubtedly a consequence of living in a society where we’re
                taught to be consumers instead of a community and where the
                prevailing ethos is “You don’t owe anyone anything.” We’ve all
                been guilty of this, at one point or another, but if we are
                going to seriously build a structure strong enough to remake the
                world, we need to be on time for meetings.
              </P>
              <P>
                In this organization, what you do matters. We might be socially
                conditioned to window-shop every single possible choice until
                the last minute, but that doesn’t foster a strong organization.
                We’re not asking you to martyr yourself, because that’s how
                burnout happens. Don’t take on more than you can sustain. We
                also recognize that not everyone has a few extra hours per week,
                because capitalism is awful. Just do what you can. When you
                honor people’s time and energy, you build trust. When we have
                strong bonds of trust, we build power.
              </P>
            </SideBar>
            <H3>There’s also a lot of room for bottom-up creation.</H3>
            <P>
              If you want to do informal social things with your comrades like
              rock climbing, book clubs, or park clean-ups, just start doing it.
              Our movement gets stronger when we have a strong body of
              activities that stitch us together alongside the work. Post in the
              Discord Forum to drum up interest!
            </P>
            <P>
              If you have an idea for something more official, like putting
              together an earthquake preparedness plan, coordinating an event
              with another local organization, or tabling at the Coliseum BART
              stop on game days, it helps to be plugged in first. Find the
              committee doing the organizing closest to your idea, get involved
              with their ongoing work, and once you have the lay of the land,
              ask some of the organizers to talk it over with you. The more you
              can take on the logistical work surrounding your idea (and recruit
              others to help), the more likely you are to make it happen.
            </P>
            <Graphic name="people-marching" alt="People marching" />
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default GetInvolvedSection;
