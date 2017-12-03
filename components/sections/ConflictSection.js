import React, { PureComponent } from "react";
import Figure from "../Figure";

class ConflictSection extends PureComponent {
  render() {
    return (
      <div>
        <h2>I have a conflict with someone in EB DSA. What should I do?</h2>
        <p>
          Socialism is based on mutual respect for all and the enhancement of
          human dignity. That said, even with the best of intentions, conflicts
          arise.
        </p>
        <p>
          If you have a conflict with an East Bay DSA comrade that you can’t
          resolve on your own, please let someone in leadership know. There are
          policies in place for grievances and harassment, and we’re building
          out structures for accountability with an eventual eye towards fully
          formed restorative justice practices. We are categorically against
          abuse, predatory behavior, and otherwise shitty actions, and know that
          you can’t build a platform for socialism with a lot of broken stairs.
          If there are people active in our chapter that you have concerns
          about, please let us know.
        </p>
        <Figure>
          You can’t build a platform for socialism with a lot of broken stairs.
        </Figure>
        <p>
          You can request a one-on-one meeting with a Local Council member or
          another leader within the organization to discuss the issue. The mem-
          ber-leader will interview you to collect more information about the
          situation and determine how to proceed. Serious complaints will be
          brought before the Local Council and discussed confidentially in
          closed session. The Local Council may appoint investigators to make
          further assessments and will maintain records of all complaints
          brought before them. Serious complaints will always be handled with
          complete confidentiality for all involved members.
        </p>
        <p>
          It should go without saying, but{" "}
          <strong>
            being a member also means being willing to stand accountable for
            what you do and say
          </strong>. When you are able to listen and hear honestly, you honor
          their courage in breaking silence.
        </p>
      </div>
    );
  }
}

export default ConflictSection;
