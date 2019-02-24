import React from "react";
import dateFnsFormat from "date-fns/format";
import { Link } from "react-router-dom";
import { InlineShareButtons } from "sharethis-reactjs";
import { PageContainer } from "../../../styles/common.styles";
import {
  Description,
  SummaryTitle,
  SummaryList,
  ShareButtons
} from "../styles";

const Summary = props => {
  const { event, location } = props;
  return (
    <PageContainer>
      {props.event.description ? (
        <Description>{props.event.description}</Description>
      ) : (
        <div>
          <strong>Congratulations!</strong>, your event is now online.
          <p>
            The next step is to{" "}
            <Link to={`${location.pathname}/edit`}>
              enter the event details
            </Link>{" "}
            and the possible dates, places and menus to vote for.
          </p>
          <p>
            Then you can share this page with your friends, so they can start
            voting what they prefer!
          </p>
          <p>Good luck!</p>
        </div>
      )}
      <SummaryTitle>Event summary</SummaryTitle>
      <SummaryList>
        <li>
          Participants:{" "}
          <strong>
            {event.places.length > 0 ? (
              `${event.participants.length} attendants`
            ) : (
              <Link to={`${location.pathname}/registration`}>
                enter participants
              </Link>
            )}
          </strong>
        </li>
        <li>
          Date:{" "}
          <strong>
            {event.places.length > 0 ? (
              "currently voting"
            ) : (
              <Link to={`${location.pathname}/edit?section=dates`}>
                enter details
              </Link>
            )}
          </strong>{" "}
          <strong>
            {event.dateDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.dateDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
        <li>
          Place or restaurant:{" "}
          <strong>
            {event.places.length > 0 ? (
              "currently voting"
            ) : (
              <Link to={`${location.pathname}/edit?section=places`}>
                enter details
              </Link>
            )}
          </strong>{" "}
          <strong>
            {event.placeDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.placeDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
        <li>
          Menu(s) / Drinks / Extras:{" "}
          <strong>
            {event.places.length > 0 ? (
              "currently voting / pending to be submitted"
            ) : (
              <Link to={`${location.pathname}/edit?section=menus`}>
                enter details
              </Link>
            )}
          </strong>{" "}
          <strong>
            {event.menuDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.menuDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
      </SummaryList>
      <p>Share the event with your friends:</p>
      <ShareButtons>
        <InlineShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 14, // font size for the buttons
            labels: "cta", // button labels (cta, counts, null)
            language: "en", // which language to use (see LANGUAGES)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "whatsapp",
              "linkedin",
              "messenger",
              "facebook",
              "twitter"
            ],
            padding: 12, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            show_total: true,
            size: 35 // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            // url: 'https://www.sharethis.com', // (defaults to current url)
            // image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            // description: 'custom text',       // (defaults to og:description or twitter:description)
            // title: 'custom title',            // (defaults to og:title or twitter:title)
            // message: 'custom email text',     // (only for email sharing)
            // subject: 'custom email subject',  // (only for email sharing)
            // username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
      </ShareButtons>
    </PageContainer>
  );
};

export default Summary;
