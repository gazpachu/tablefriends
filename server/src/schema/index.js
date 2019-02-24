module.exports = /* GraphQL */ `
  enum EventsOrderByInput {
    createdAt_ASC
    createdAt_DESC
  }

  type Query {
    events(orderBy: EventsOrderByInput): [Event!]!
    event(slug: String!): Event
    places: [Place!]!
    dates: [Date!]!
    menus: [Menu!]!
    participants: [Participant!]!
  }

  type Mutation {
    createEvent(title: String!, slug: String!): Event
    deleteEvent(id: ID!): Event
    updateEvent(
      id: ID!
      title: String!
      slug: String!
      description: String
      photo: String
      dateDeadline: String
      placeDeadline: String
      menuDeadline: String
    ): Event
    createDate(timestamp: String!, event: ID!): Date
    deleteDate(id: ID!): Date
    createPlace(name: String!, url: String, event: ID!): Place
    deletePlace(id: ID!): Place
    createMenu(name: String!, url: String, event: ID!): Menu
    deleteMenu(id: ID!): Menu
    createParticipant(name: String!, event: ID!): Participant
    deleteParticipant(id: ID!): Participant
    updateParticipant(
      id: ID!
      dates: [ID]
      places: [ID]
      menus: [ID]
    ): Participant
  }

  type Event {
    id: ID!
    slug: String!
    title: String!
    description: String
    photo: String
    dates: [Date]
    places: [Place]
    menus: [Menu]
    participants: [Participant]
    dateDeadline: String
    placeDeadline: String
    menuDeadline: String
  }

  type Date {
    id: ID!
    timestamp: String!
    event: Event!
  }

  type Place {
    id: ID!
    name: String!
    url: String
    event: Event!
  }

  type Menu {
    id: ID!
    name: String!
    url: String
    event: Event!
  }

  type Participant {
    id: ID!
    name: String
    dates: [ID]
    places: [ID]
    menus: [ID]
    event: Event!
  }
`;
