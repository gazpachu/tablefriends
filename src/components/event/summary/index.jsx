import React from "react";
import dateFnsFormat from "date-fns/format";
import { InlineShareButtons } from "sharethis-reactjs";
import { PageContainer } from "../../../styles/common.styles";
import { Description, SummaryList, ShareButtons } from "../styles";

const Summary = props => {
  const { event } = props;
  return (
    <PageContainer>
      <Description>{props.event.description}</Description>
      <SummaryList>
        <li>
          Confirmed: <strong>{event.participants.length} attendants</strong>
        </li>
        <li>
          Date: currently voting{" "}
          <strong>
            {event.dateDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.dateDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
        <li>
          Place or restaurant: currently voting{" "}
          <strong>
            {event.placeDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.placeDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
        <li>
          Menu(s) / Drinks / Extras: currently voting / pending to be submitted{" "}
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
