import React from 'react';
import { InlineShareButtons } from 'sharethis-reactjs';
import { Header, Title, Description, ShareButtons } from './styles';
import { Nav, NavItem, TabLink, TabIcon } from '../../../styles/common.styles';

function EventHeader(props) {
  return (
    <Header>
      <Title>{props.event.title}</Title>
      <Description>{props.event.description}</Description>
      <ShareButtons>
        <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 14,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'linkedin',
              'messenger',
              'facebook',
              'twitter'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,
            size: 35,             // the size of each button (INTEGER)

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
      <Nav>
        <NavItem>
          <TabLink active={props.active === 'vote' ? 1 : 0} to={`/${props.event.slug}`}>
            <TabIcon className="fas fa-vote-yea" />
            Register &amp; Vote
          </TabLink>
        </NavItem>
        <NavItem>
          <TabLink active={props.active === 'edit' ? 1 : 0} to={`/${props.event.slug}/edit`}>
            <TabIcon className="fas fa-edit" />
            Edit event
          </TabLink>
        </NavItem>
      </Nav>
    </Header>
  );
}

export default EventHeader;
