module.exports = {
        typeDefs: /* GraphQL */ `type AggregateEvent {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Event {
  id: ID!
  slug: String!
  published: Boolean!
  title: String!
  content: String
  date: String
  place: String
  menu: String
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  slug: String!
  published: Boolean
  title: String!
  content: String
  date: String
  place: String
  menu: String
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  date_ASC
  date_DESC
  place_ASC
  place_DESC
  menu_ASC
  menu_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EventPreviousValues {
  id: ID!
  slug: String!
  published: Boolean!
  title: String!
  content: String
  date: String
  place: String
  menu: String
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  slug: String
  published: Boolean
  title: String
  content: String
  date: String
  place: String
  menu: String
}

input EventUpdateManyMutationInput {
  slug: String
  published: Boolean
  title: String
  content: String
  date: String
  place: String
  menu: String
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  place: String
  place_not: String
  place_in: [String!]
  place_not_in: [String!]
  place_lt: String
  place_lte: String
  place_gt: String
  place_gte: String
  place_contains: String
  place_not_contains: String
  place_starts_with: String
  place_not_starts_with: String
  place_ends_with: String
  place_not_ends_with: String
  menu: String
  menu_not: String
  menu_in: [String!]
  menu_not_in: [String!]
  menu_lt: String
  menu_lte: String
  menu_gt: String
  menu_gte: String
  menu_contains: String
  menu_not_contains: String
  menu_starts_with: String
  menu_not_starts_with: String
  menu_ends_with: String
  menu_not_ends_with: String
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
  slug: String
}

scalar Long

type Mutation {
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  node(id: ID!): Node
}

type Subscription {
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
}
`
      }
    