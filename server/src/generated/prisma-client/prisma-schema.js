module.exports = {
        typeDefs: /* GraphQL */ `type AggregateEvent {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Event {
  id: ID!
  slug: String!
  title: String!
  description: String
  dates: [String!]!
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
  menus: [String!]!
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreatedatesInput {
  set: [String!]
}

input EventCreateInput {
  slug: String!
  title: String!
  description: String
  dates: EventCreatedatesInput
  places: PlaceCreateManyWithoutEventInput
  menus: EventCreatemenusInput
}

input EventCreatemenusInput {
  set: [String!]
}

input EventCreateOneWithoutPlacesInput {
  create: EventCreateWithoutPlacesInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutPlacesInput {
  slug: String!
  title: String!
  description: String
  dates: EventCreatedatesInput
  menus: EventCreatemenusInput
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
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EventPreviousValues {
  id: ID!
  slug: String!
  title: String!
  description: String
  dates: [String!]!
  menus: [String!]!
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

input EventUpdatedatesInput {
  set: [String!]
}

input EventUpdateInput {
  slug: String
  title: String
  description: String
  dates: EventUpdatedatesInput
  places: PlaceUpdateManyWithoutEventInput
  menus: EventUpdatemenusInput
}

input EventUpdateManyMutationInput {
  slug: String
  title: String
  description: String
  dates: EventUpdatedatesInput
  menus: EventUpdatemenusInput
}

input EventUpdatemenusInput {
  set: [String!]
}

input EventUpdateOneRequiredWithoutPlacesInput {
  create: EventCreateWithoutPlacesInput
  update: EventUpdateWithoutPlacesDataInput
  upsert: EventUpsertWithoutPlacesInput
  connect: EventWhereUniqueInput
}

input EventUpdateWithoutPlacesDataInput {
  slug: String
  title: String
  description: String
  dates: EventUpdatedatesInput
  menus: EventUpdatemenusInput
}

input EventUpsertWithoutPlacesInput {
  update: EventUpdateWithoutPlacesDataInput!
  create: EventCreateWithoutPlacesInput!
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  places_every: PlaceWhereInput
  places_some: PlaceWhereInput
  places_none: PlaceWhereInput
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
  createPlace(data: PlaceCreateInput!): Place!
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateManyPlaces(data: PlaceUpdateManyMutationInput!, where: PlaceWhereInput): BatchPayload!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
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

type Place {
  id: ID!
  name: String!
  url: String
  event: Event!
}

type PlaceConnection {
  pageInfo: PageInfo!
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  name: String!
  url: String
  event: EventCreateOneWithoutPlacesInput!
}

input PlaceCreateManyWithoutEventInput {
  create: [PlaceCreateWithoutEventInput!]
  connect: [PlaceWhereUniqueInput!]
}

input PlaceCreateWithoutEventInput {
  name: String!
  url: String
}

type PlaceEdge {
  node: Place!
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlacePreviousValues {
  id: ID!
  name: String!
  url: String
}

input PlaceScalarWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [PlaceScalarWhereInput!]
  OR: [PlaceScalarWhereInput!]
  NOT: [PlaceScalarWhereInput!]
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
  AND: [PlaceSubscriptionWhereInput!]
  OR: [PlaceSubscriptionWhereInput!]
  NOT: [PlaceSubscriptionWhereInput!]
}

input PlaceUpdateInput {
  name: String
  url: String
  event: EventUpdateOneRequiredWithoutPlacesInput
}

input PlaceUpdateManyDataInput {
  name: String
  url: String
}

input PlaceUpdateManyMutationInput {
  name: String
  url: String
}

input PlaceUpdateManyWithoutEventInput {
  create: [PlaceCreateWithoutEventInput!]
  delete: [PlaceWhereUniqueInput!]
  connect: [PlaceWhereUniqueInput!]
  disconnect: [PlaceWhereUniqueInput!]
  update: [PlaceUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [PlaceUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [PlaceScalarWhereInput!]
  updateMany: [PlaceUpdateManyWithWhereNestedInput!]
}

input PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput!
  data: PlaceUpdateManyDataInput!
}

input PlaceUpdateWithoutEventDataInput {
  name: String
  url: String
}

input PlaceUpdateWithWhereUniqueWithoutEventInput {
  where: PlaceWhereUniqueInput!
  data: PlaceUpdateWithoutEventDataInput!
}

input PlaceUpsertWithWhereUniqueWithoutEventInput {
  where: PlaceWhereUniqueInput!
  update: PlaceUpdateWithoutEventDataInput!
  create: PlaceCreateWithoutEventInput!
}

input PlaceWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  event: EventWhereInput
  AND: [PlaceWhereInput!]
  OR: [PlaceWhereInput!]
  NOT: [PlaceWhereInput!]
}

input PlaceWhereUniqueInput {
  id: ID
}

type Query {
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  place(where: PlaceWhereUniqueInput!): Place
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  node(id: ID!): Node
}

type Subscription {
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
}
`
      }
    