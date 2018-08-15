import React, { PureComponent } from "react";
import Figure from "../components/Figure";
import { H2, P, Strong } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";

class ConflictSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>
              I have a conflict with someone in East Bay DSA. What should I do?
            </H2>
            <P>
              Socialism is based on mutual respect for all and the enhancement
              of human dignity. That said, even with the best of intentions,
              conflicts arise.
            </P>
            <P>
              If you have a conflict with an East Bay DSA comrade that you can’t
              resolve on your own, please let someone in leadership know. There
              are policies in place for grievances and harassment, and we’re
              building out structures for accountability with an eventual eye
              towards fully formed restorative justice practices. We are
              categorically against abuse, predatory behavior, and otherwise
              shitty actions, and know that you can’t build a platform for
              socialism with a lot of broken stairs. If you have concerns about
              people who are active in the chapter, please let us know.
            </P>
            <div>
              <Figure
                graphic="solidarity-in-action"
                alt="People of all sorts interlocking their arms"
              >
                You can’t build a platform for socialism with a lot of broken
                stairs.
              </Figure>
              <P>
                You can request a one-on-one meeting with a Local Council member
                or an appointed organizer to discuss the issue. The
                member-leader will interview you to collect more information
                about the situation and determine how to proceed. Serious
                complaints will be brought before the Local Council and
                discussed confidentially in closed session. The Local Council
                may appoint investigators to make further assessments and will
                maintain records of all complaints brought before them.
                According to our bylaws, the Local Council may vote to
                discipline (suspend or expel) members that are found to be in
                substantial disagreement with the principles or policies of the
                organization or if they consistently engage in undemocratic,
                disruptive behavior.Serious complaints will always be handled
                with complete confidentiality for all involved members.
              </P>
            </div>
            <P>
              It should go without saying, but{" "}
              <Strong>
                being a member also means being willing to stand accountable for
                what you do and say.
              </Strong>{" "}
              When you are able to listen and hear honestly, you honor their
              courage in breaking silence.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default ConflictSection;
