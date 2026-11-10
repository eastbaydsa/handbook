import React, { PureComponent } from "react";
import Directory from "../components/directory/Directory";
import DirectoryItem from "../components/directory/DirectoryItem";
import { H2 } from "../components/typography";
import Container from "../components/Container";
import Section from "../components/Section";
import NavAnchor from "../components/NavAnchor";
import Graphic from "../components/Graphic";

class DirectorySection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Directory</H2>
            <Directory>
              <DirectoryItem
                text="Branches"
                description="A list of the geographical-based chapter bodies currently organizing with our chapter."
                links={[
                  {
                    label: "eastbaydsa.org/branches",
                    href: "https://eastbaydsa.org/branches"
                  }
                ]}
              />
              <DirectoryItem
                text="Campaigns, Committees and Working Groups"
                description="An overview of the current active organizing projects within East Bay DSA, along with contact info for each. Please note that the best way to get in contact with a particular Campaign, Committee, or Working Group may be via Discord, or by attending an event hosted by that body on the chapter Events Calendar."
                links={[
                  {
                    label: "eastbaydsa.org/campaigns",
                    href: "https://eastbaydsa.org/campaigns"
                  }
                ]}
              />
              <DirectoryItem
                text="Chapter Bylaws"
                description="The democratic structures through which we make decisions, carry out collective goals, and elect accountable leaders."
                links={[
                  {
                    label: "eastbaydsa.org/bylaws",
                    href: "https://eastbaydsa.org/bylaws"
                  }
                ]}
              />
              <DirectoryItem
                text="Chapter Platform"
                description="An outline of our ongoing strategies and issues to focus on, with unity and urgency, toward achieving a democratic socialist world together."
                links={[
                  {
                    label: "eastbaydsa.org/platform",
                    href: "https://eastbaydsa.org/platform"
                  }
                ]}
              />
              <DirectoryItem
                text="Code of Conduct"
                description="The chapter has a code of conduct which we expect all members to follow."
                links={[
                  {
                    label: "eastbaydsa.org/conduct",
                    href: "https://eastbaydsa.org/conduct"
                  }
                ]}
              />
              <DirectoryItem
                text="Discord"
                description="Our chapter’s Discord channel is where the conversation happens! Get in touch with comrades, get involved in our work, ask questions, and hang out."
                links={[
                  {
                    label: "eastbaydsa.org/discord",
                    href: "https://eastbaydsa.org/discord"
                  }
                ]}
              />
              <DirectoryItem
                text="Events Calendar"
                description="The central location to find out what’s happening in East Bay DSA. Any event with a rose emoji 🌹 is designed to be accessible to New Members, so feel free to RSVP and show up!"
                links={[
                  {
                    label: "eastbaydsa.org/events",
                    href: "https://eastbaydsa.org/events"
                  }
                ]}
              />
              <DirectoryItem
                text="Give Local Solidarity Dues"
                description="Local dues go directly to our chapter, and are a fantastic way to support the work we do. (Please note, local dues are not required, nor do they make you an official member of the Democratic Socialists of America - Join National DSA to become an official member!)"
                links={[
                  {
                    label: "eastbaydsa.org/dues",
                    href: "https://eastbaydsa.org/dues"
                  }
                ]}
              />
              <DirectoryItem
                text="Grievances"
                description="Grievance Stewards are available to answer any questions you may have about grievances, and if you would like to initiate a grievance process, they will help you do that, confidentially."
                links={[
                  {
                    label: "eastbaydsa.org/grievance",
                    href: "https://eastbaydsa.org/grievance"
                  }
                ]}
              />
              <DirectoryItem
                text="Join National DSA"
                description="To become a member of East Bay DSA, join National DSA with an address within the East Bay! This gives you voting power in our chapter, access to our chapter Discord channel, and membership in the largest socialist organization in our country’s history. Dues are on a sliding scale, with the option of a financial hardship dues waiver. Join today!"
                links={[
                  {
                    label: "dsausa.org/join",
                    href: "https://dsausa.org/join"
                  }
                ]}
              />
            </Directory>
            <Graphic name="community-activism" />
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default DirectorySection;
