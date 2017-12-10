import React, { PureComponent } from "react";
import Directory from "../directory/Directory";
import DirectoryItem from "../directory/DirectoryItem";
import { H2, P } from "../typography";
import Container from "../Container";
import Section from "../Section";
import NavAnchor from "../NavAnchor";
import Graphic from "../Graphic";

class DirectorySection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Directory</H2>
            <P>
              Trying to reach out but not sure who you should talk to? Look no
              further!
            </P>
            <P>
              Bear in mind, though, that like everything else, our departments
              are all-volunteer. Depending on communications backlog and the
              number of people we have on a given address, turnaround could be
              anywhere from a few minutes to a couple days.
            </P>
            <Directory>
              <DirectoryItem
                text="If you have a burning question for our Local Council Leadership"
                links={[
                  {
                    label: "Leadership",
                    href: "mailto:localcouncil@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="New to East Bay DSA and not sure where to plug in?"
                links={[
                  {
                    label: "New Members",
                    href: "mailto:newmember@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="For inquiries about events"
                links={[
                  {
                    label: "Events",
                    href: "mailto:events@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="The memes of production"
                links={[
                  {
                    label: "Communications",
                    href: "mailto:communications@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="Educational events and opportunities"
                links={[
                  {
                    label: "Education",
                    href: "mailto:education@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="Make sure people can find their lane"
                links={[
                  {
                    label: "Internal Organizing",
                    href: "mailto:internalorganizing@eastbaydsa.org"
                  }
                ]}
              />
            </Directory>
            <Graphic name="community-activism" />
            <Directory>
              <DirectoryItem
                text="Win friends, irritate neoliberals"
                links={[
                  {
                    label: "External Organizing",
                    href: "mailto:externalorganizing@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="Single. Payer. Is. Our. Fight."
                links={[
                  {
                    label: "Single Payer",
                    href: "mailto:singlepayer@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="To refuse, resist and otherwise get the goods"
                links={[
                  {
                    label: "Direct Action",
                    href: "mailto:directaction@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="Got a good shot?"
                links={[
                  {
                    label: "Photos",
                    href: "mailto:photos@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="Until capitalism is abolished (reimbursements, budgets, tax status questions and other money-related logistics)"
                links={[
                  {
                    label: "Finance",
                    href: "mailto:finance@eastbaydsa.org"
                  }
                ]}
              />
              <DirectoryItem
                text="Oh, yeah. We’re online."
                links={[
                  {
                    label: "facebook.com/eastbaydsa",
                    href: "http://facebook.com/eastbaydsa"
                  },
                  {
                    label: "twitter.com/DSAEastBay",
                    href: "http://twitter.com/DSAEastBay"
                  }
                ]}
              />
            </Directory>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default DirectorySection;
