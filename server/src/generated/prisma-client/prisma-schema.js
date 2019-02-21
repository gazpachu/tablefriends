module.exports = {
        typeDefs: /* GraphQL */ `type AggregateDate {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateMenu {
  count: Int!
}

type AggregateParticipant {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Date {
  id: ID!
  timestamp: String!
  event: Event!
}

type DateConnection {
  pageInfo: PageInfo!
  edges: [DateEdge]!
  aggregate: AggregateDate!
}

input DateCreateInput {
  timestamp: String!
  event: EventCreateOneWithoutDatesInput!
}

input DateCreateManyWithoutEventInput {
  create: [DateCreateWithoutEventInput!]
  connect: [DateWhereUniqueInput!]
}

input DateCreateWithoutEventInput {
  timestamp: String!
}

type DateEdge {
  node: Date!
  cursor: String!
}

enum DateOrderByInput {
  id_ASC
  id_DESC
  timestamp_ASC
  timestamp_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DatePreviousValues {
  id: ID!
  timestamp: String!
}

input DateScalarWhereInput {
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
  timestamp: String
  timestamp_not: String
  timestamp_in: [String!]
  timestamp_not_in: [String!]
  timestamp_lt: String
  timestamp_lte: String
  timestamp_gt: String
  timestamp_gte: String
  timestamp_contains: String
  timestamp_not_contains: String
  timestamp_starts_with: String
  timestamp_not_starts_with: String
  timestamp_ends_with: String
  timestamp_not_ends_with: String
  AND: [DateScalarWhereInput!]
  OR: [DateScalarWhereInput!]
  NOT: [DateScalarWhereInput!]
}

type DateSubscriptionPayload {
  mutation: MutationType!
  node: Date
  updatedFields: [String!]
  previousValues: DatePreviousValues
}

input DateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DateWhereInput
  AND: [DateSubscriptionWhereInput!]
  OR: [DateSubscriptionWhereInput!]
  NOT: [DateSubscriptionWhereInput!]
}

input DateUpdateInput {
  timestamp: String
  event: EventUpdateOneRequiredWithoutDatesInput
}

input DateUpdateManyDataInput {
  timestamp: String
}

input DateUpdateManyMutationInput {
  timestamp: String
}

input DateUpdateManyWithoutEventInput {
  create: [DateCreateWithoutEventInput!]
  delete: [DateWhereUniqueInput!]
  connect: [DateWhereUniqueInput!]
  disconnect: [DateWhereUniqueInput!]
  update: [DateUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [DateUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [DateScalarWhereInput!]
  updateMany: [DateUpdateManyWithWhereNestedInput!]
}

input DateUpdateManyWithWhereNestedInput {
  where: DateScalarWhereInput!
  data: DateUpdateManyDataInput!
}

input DateUpdateWithoutEventDataInput {
  timestamp: String
}

input DateUpdateWithWhereUniqueWithoutEventInput {
  where: DateWhereUniqueInput!
  data: DateUpdateWithoutEventDataInput!
}

input DateUpsertWithWhereUniqueWithoutEventInput {
  where: DateWhereUniqueInput!
  update: DateUpdateWithoutEventDataInput!
  create: DateCreateWithoutEventInput!
}

input DateWhereInput {
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
  timestamp: String
  timestamp_not: String
  timestamp_in: [String!]
  timestamp_not_in: [String!]
  timestamp_lt: String
  timestamp_lte: String
  timestamp_gt: String
  timestamp_gte: String
  timestamp_contains: String
  timestamp_not_contains: String
  timestamp_starts_with: String
  timestamp_not_starts_with: String
  timestamp_ends_with: String
  timestamp_not_ends_with: String
  event: EventWhereInput
  AND: [DateWhereInput!]
  OR: [DateWhereInput!]
  NOT: [DateWhereInput!]
}

input DateWhereUniqueInput {
  id: ID
}

type Event {
  id: ID!
  slug: String!
  title: String!
  description: String
  dates(where: DateWhereInput, orderBy: DateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Date!]
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
  menus(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Menu!]
  participants(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Participant!]
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  slug: String!
  title: String!
  description: String
  dates: DateCreateManyWithoutEventInput
  places: PlaceCreateManyWithoutEventInput
  menus: MenuCreateManyWithoutEventInput
  participants: ParticipantCreateManyWithoutEventInput
}

input EventCreateOneWithoutDatesInput {
  create: EventCreateWithoutDatesInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutMenusInput {
  create: EventCreateWithoutMenusInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutParticipantsInput {
  create: EventCreateWithoutParticipantsInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutPlacesInput {
  create: EventCreateWithoutPlacesInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutDatesInput {
  slug: String!
  title: String!
  description: String
  places: PlaceCreateManyWithoutEventInput
  menus: MenuCreateManyWithoutEventInput
  participants: ParticipantCreateManyWithoutEventInput
}

input EventCreateWithoutMenusInput {
  slug: String!
  title: String!
  description: String
  dates: DateCreateManyWithoutEventInput
  places: PlaceCreateManyWithoutEventInput
  participants: ParticipantCreateManyWithoutEventInput
}

input EventCreateWithoutParticipantsInput {
  slug: String!
  title: String!
  description: String
  dates: DateCreateManyWithoutEventInput
  places: PlaceCreateManyWithoutEventInput
  menus: MenuCreateManyWithoutEventInput
}

input EventCreateWithoutPlacesInput {
  slug: String!
  title: String!
  description: String
  dates: DateCreateManyWithoutEventInput
  menus: MenuCreateManyWithoutEventInput
  participants: ParticipantCreateManyWithoutEventInput
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
  title: String
  description: String
  dates: DateUpdateManyWithoutEventInput
  places: PlaceUpdateManyWithoutEventInput
  menus: MenuUpdateManyWithoutEventInput
  participants: ParticipantUpdateManyWithoutEventInput
}

input EventUpdateManyMutationInput {
  slug: String
  title: String
  description: String
}

input EventUpdateOneRequiredWithoutDatesInput {
  create: EventCreateWithoutDatesInput
  update: EventUpdateWithoutDatesDataInput
  upsert: EventUpsertWithoutDatesInput
  connect: EventWhereUniqueInput
}

input EventUpdateOneRequiredWithoutMenusInput {
  create: EventCreateWithoutMenusInput
  update: EventUpdateWithoutMenusDataInput
  upsert: EventUpsertWithoutMenusInput
  connect: EventWhereUniqueInput
}

input EventUpdateOneRequiredWithoutParticipantsInput {
  create: EventCreateWithoutParticipantsInput
  update: EventUpdateWithoutParticipantsDataInput
  upsert: EventUpsertWithoutParticipantsInput
  connect: EventWhereUniqueInput
}

input EventUpdateOneRequiredWithoutPlacesInput {
  create: EventCreateWithoutPlacesInput
  update: EventUpdateWithoutPlacesDataInput
  upsert: EventUpsertWithoutPlacesInput
  connect: EventWhereUniqueInput
}

input EventUpdateWithoutDatesDataInput {
  slug: String
  title: String
  description: String
  places: PlaceUpdateManyWithoutEventInput
  menus: MenuUpdateManyWithoutEventInput
  participants: ParticipantUpdateManyWithoutEventInput
}

input EventUpdateWithoutMenusDataInput {
  slug: String
  title: String
  description: String
  dates: DateUpdateManyWithoutEventInput
  places: PlaceUpdateManyWithoutEventInput
  participants: ParticipantUpdateManyWithoutEventInput
}

input EventUpdateWithoutParticipantsDataInput {
  slug: String
  title: String
  description: String
  dates: DateUpdateManyWithoutEventInput
  places: PlaceUpdateManyWithoutEventInput
  menus: MenuUpdateManyWithoutEventInput
}

input EventUpdateWithoutPlacesDataInput {
  slug: String
  title: String
  description: String
  dates: DateUpdateManyWithoutEventInput
  menus: MenuUpdateManyWithoutEventInput
  participants: ParticipantUpdateManyWithoutEventInput
}

input EventUpsertWithoutDatesInput {
  update: EventUpdateWithoutDatesDataInput!
  create: EventCreateWithoutDatesInput!
}

input EventUpsertWithoutMenusInput {
  update: EventUpdateWithoutMenusDataInput!
  create: EventCreateWithoutMenusInput!
}

input EventUpsertWithoutParticipantsInput {
  update: EventUpdateWithoutParticipantsDataInput!
  create: EventCreateWithoutParticipantsInput!
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
  dates_every: DateWhereInput
  dates_some: DateWhereInput
  dates_none: DateWhereInput
  places_every: PlaceWhereInput
  places_some: PlaceWhereInput
  places_none: PlaceWhereInput
  menus_every: MenuWhereInput
  menus_some: MenuWhereInput
  menus_none: MenuWhereInput
  participants_every: ParticipantWhereInput
  participants_some: ParticipantWhereInput
  participants_none: ParticipantWhereInput
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
  slug: String
}

scalar Long

type Menu {
  id: ID!
  name: String!
  url: String
  event: Event!
}

type MenuConnection {
  pageInfo: PageInfo!
  edges: [MenuEdge]!
  aggregate: AggregateMenu!
}

input MenuCreateInput {
  name: String!
  url: String
  event: EventCreateOneWithoutMenusInput!
}

input MenuCreateManyWithoutEventInput {
  create: [MenuCreateWithoutEventInput!]
  connect: [MenuWhereUniqueInput!]
}

input MenuCreateWithoutEventInput {
  name: String!
  url: String
}

type MenuEdge {
  node: Menu!
  cursor: String!
}

enum MenuOrderByInput {
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

type MenuPreviousValues {
  id: ID!
  name: String!
  url: String
}

input MenuScalarWhereInput {
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
  AND: [MenuScalarWhereInput!]
  OR: [MenuScalarWhereInput!]
  NOT: [MenuScalarWhereInput!]
}

type MenuSubscriptionPayload {
  mutation: MutationType!
  node: Menu
  updatedFields: [String!]
  previousValues: MenuPreviousValues
}

input MenuSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MenuWhereInput
  AND: [MenuSubscriptionWhereInput!]
  OR: [MenuSubscriptionWhereInput!]
  NOT: [MenuSubscriptionWhereInput!]
}

input MenuUpdateInput {
  name: String
  url: String
  event: EventUpdateOneRequiredWithoutMenusInput
}

input MenuUpdateManyDataInput {
  name: String
  url: String
}

input MenuUpdateManyMutationInput {
  name: String
  url: String
}

input MenuUpdateManyWithoutEventInput {
  create: [MenuCreateWithoutEventInput!]
  delete: [MenuWhereUniqueInput!]
  connect: [MenuWhereUniqueInput!]
  disconnect: [MenuWhereUniqueInput!]
  update: [MenuUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [MenuUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [MenuScalarWhereInput!]
  updateMany: [MenuUpdateManyWithWhereNestedInput!]
}

input MenuUpdateManyWithWhereNestedInput {
  where: MenuScalarWhereInput!
  data: MenuUpdateManyDataInput!
}

input MenuUpdateWithoutEventDataInput {
  name: String
  url: String
}

input MenuUpdateWithWhereUniqueWithoutEventInput {
  where: MenuWhereUniqueInput!
  data: MenuUpdateWithoutEventDataInput!
}

input MenuUpsertWithWhereUniqueWithoutEventInput {
  where: MenuWhereUniqueInput!
  update: MenuUpdateWithoutEventDataInput!
  create: MenuCreateWithoutEventInput!
}

input MenuWhereInput {
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
  AND: [MenuWhereInput!]
  OR: [MenuWhereInput!]
  NOT: [MenuWhereInput!]
}

input MenuWhereUniqueInput {
  id: ID
}

type Mutation {
  createDate(data: DateCreateInput!): Date!
  updateDate(data: DateUpdateInput!, where: DateWhereUniqueInput!): Date
  updateManyDates(data: DateUpdateManyMutationInput!, where: DateWhereInput): BatchPayload!
  upsertDate(where: DateWhereUniqueInput!, create: DateCreateInput!, update: DateUpdateInput!): Date!
  deleteDate(where: DateWhereUniqueInput!): Date
  deleteManyDates(where: DateWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createMenu(data: MenuCreateInput!): Menu!
  updateMenu(data: MenuUpdateInput!, where: MenuWhereUniqueInput!): Menu
  updateManyMenus(data: MenuUpdateManyMutationInput!, where: MenuWhereInput): BatchPayload!
  upsertMenu(where: MenuWhereUniqueInput!, create: MenuCreateInput!, update: MenuUpdateInput!): Menu!
  deleteMenu(where: MenuWhereUniqueInput!): Menu
  deleteManyMenus(where: MenuWhereInput): BatchPayload!
  createParticipant(data: ParticipantCreateInput!): Participant!
  updateParticipant(data: ParticipantUpdateInput!, where: ParticipantWhereUniqueInput!): Participant
  updateManyParticipants(data: ParticipantUpdateManyMutationInput!, where: ParticipantWhereInput): BatchPayload!
  upsertParticipant(where: ParticipantWhereUniqueInput!, create: ParticipantCreateInput!, update: ParticipantUpdateInput!): Participant!
  deleteParticipant(where: ParticipantWhereUniqueInput!): Participant
  deleteManyParticipants(where: ParticipantWhereInput): BatchPayload!
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

type Participant {
  id: ID!
  name: String!
  dates: [ID!]!
  places: [ID!]!
  menus: [ID!]!
  event: Event!
}

type ParticipantConnection {
  pageInfo: PageInfo!
  edges: [ParticipantEdge]!
  aggregate: AggregateParticipant!
}

input ParticipantCreatedatesInput {
  set: [ID!]
}

input ParticipantCreateInput {
  name: String!
  dates: ParticipantCreatedatesInput
  places: ParticipantCreateplacesInput
  menus: ParticipantCreatemenusInput
  event: EventCreateOneWithoutParticipantsInput!
}

input ParticipantCreateManyWithoutEventInput {
  create: [ParticipantCreateWithoutEventInput!]
  connect: [ParticipantWhereUniqueInput!]
}

input ParticipantCreatemenusInput {
  set: [ID!]
}

input ParticipantCreateplacesInput {
  set: [ID!]
}

input ParticipantCreateWithoutEventInput {
  name: String!
  dates: ParticipantCreatedatesInput
  places: ParticipantCreateplacesInput
  menus: ParticipantCreatemenusInput
}

type ParticipantEdge {
  node: Participant!
  cursor: String!
}

enum ParticipantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ParticipantPreviousValues {
  id: ID!
  name: String!
  dates: [ID!]!
  places: [ID!]!
  menus: [ID!]!
}

input ParticipantScalarWhereInput {
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
  AND: [ParticipantScalarWhereInput!]
  OR: [ParticipantScalarWhereInput!]
  NOT: [ParticipantScalarWhereInput!]
}

type ParticipantSubscriptionPayload {
  mutation: MutationType!
  node: Participant
  updatedFields: [String!]
  previousValues: ParticipantPreviousValues
}

input ParticipantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParticipantWhereInput
  AND: [ParticipantSubscriptionWhereInput!]
  OR: [ParticipantSubscriptionWhereInput!]
  NOT: [ParticipantSubscriptionWhereInput!]
}

input ParticipantUpdatedatesInput {
  set: [ID!]
}

input ParticipantUpdateInput {
  name: String
  dates: ParticipantUpdatedatesInput
  places: ParticipantUpdateplacesInput
  menus: ParticipantUpdatemenusInput
  event: EventUpdateOneRequiredWithoutParticipantsInput
}

input ParticipantUpdateManyDataInput {
  name: String
  dates: ParticipantUpdatedatesInput
  places: ParticipantUpdateplacesInput
  menus: ParticipantUpdatemenusInput
}

input ParticipantUpdateManyMutationInput {
  name: String
  dates: ParticipantUpdatedatesInput
  places: ParticipantUpdateplacesInput
  menus: ParticipantUpdatemenusInput
}

input ParticipantUpdateManyWithoutEventInput {
  create: [ParticipantCreateWithoutEventInput!]
  delete: [ParticipantWhereUniqueInput!]
  connect: [ParticipantWhereUniqueInput!]
  disconnect: [ParticipantWhereUniqueInput!]
  update: [ParticipantUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [ParticipantUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [ParticipantScalarWhereInput!]
  updateMany: [ParticipantUpdateManyWithWhereNestedInput!]
}

input ParticipantUpdateManyWithWhereNestedInput {
  where: ParticipantScalarWhereInput!
  data: ParticipantUpdateManyDataInput!
}

input ParticipantUpdatemenusInput {
  set: [ID!]
}

input ParticipantUpdateplacesInput {
  set: [ID!]
}

input ParticipantUpdateWithoutEventDataInput {
  name: String
  dates: ParticipantUpdatedatesInput
  places: ParticipantUpdateplacesInput
  menus: ParticipantUpdatemenusInput
}

input ParticipantUpdateWithWhereUniqueWithoutEventInput {
  where: ParticipantWhereUniqueInput!
  data: ParticipantUpdateWithoutEventDataInput!
}

input ParticipantUpsertWithWhereUniqueWithoutEventInput {
  where: ParticipantWhereUniqueInput!
  update: ParticipantUpdateWithoutEventDataInput!
  create: ParticipantCreateWithoutEventInput!
}

input ParticipantWhereInput {
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
  event: EventWhereInput
  AND: [ParticipantWhereInput!]
  OR: [ParticipantWhereInput!]
  NOT: [ParticipantWhereInput!]
}

input ParticipantWhereUniqueInput {
  id: ID
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
  date(where: DateWhereUniqueInput!): Date
  dates(where: DateWhereInput, orderBy: DateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Date]!
  datesConnection(where: DateWhereInput, orderBy: DateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DateConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  menu(where: MenuWhereUniqueInput!): Menu
  menus(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Menu]!
  menusConnection(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuConnection!
  participant(where: ParticipantWhereUniqueInput!): Participant
  participants(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Participant]!
  participantsConnection(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParticipantConnection!
  place(where: PlaceWhereUniqueInput!): Place
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  node(id: ID!): Node
}

type Subscription {
  date(where: DateSubscriptionWhereInput): DateSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  menu(where: MenuSubscriptionWhereInput): MenuSubscriptionPayload
  participant(where: ParticipantSubscriptionWhereInput): ParticipantSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
}
`
      }
    