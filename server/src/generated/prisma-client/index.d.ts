// Code generated by Prisma (prisma@1.22.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  event: (where?: EventWhereInput) => Promise<boolean>;
  place: (where?: PlaceWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  event: (where: EventWhereUniqueInput) => EventPromise;
  events: (
    args?: {
      where?: EventWhereInput;
      orderBy?: EventOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Event>;
  eventsConnection: (
    args?: {
      where?: EventWhereInput;
      orderBy?: EventOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => EventConnectionPromise;
  place: (where: PlaceWhereUniqueInput) => PlacePromise;
  places: (
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Place>;
  placesConnection: (
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PlaceConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEvent: (data: EventCreateInput) => EventPromise;
  updateEvent: (
    args: { data: EventUpdateInput; where: EventWhereUniqueInput }
  ) => EventPromise;
  updateManyEvents: (
    args: { data: EventUpdateManyMutationInput; where?: EventWhereInput }
  ) => BatchPayloadPromise;
  upsertEvent: (
    args: {
      where: EventWhereUniqueInput;
      create: EventCreateInput;
      update: EventUpdateInput;
    }
  ) => EventPromise;
  deleteEvent: (where: EventWhereUniqueInput) => EventPromise;
  deleteManyEvents: (where?: EventWhereInput) => BatchPayloadPromise;
  createPlace: (data: PlaceCreateInput) => PlacePromise;
  updatePlace: (
    args: { data: PlaceUpdateInput; where: PlaceWhereUniqueInput }
  ) => PlacePromise;
  updateManyPlaces: (
    args: { data: PlaceUpdateManyMutationInput; where?: PlaceWhereInput }
  ) => BatchPayloadPromise;
  upsertPlace: (
    args: {
      where: PlaceWhereUniqueInput;
      create: PlaceCreateInput;
      update: PlaceUpdateInput;
    }
  ) => PlacePromise;
  deletePlace: (where: PlaceWhereUniqueInput) => PlacePromise;
  deleteManyPlaces: (where?: PlaceWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  event: (
    where?: EventSubscriptionWhereInput
  ) => EventSubscriptionPayloadSubscription;
  place: (
    where?: PlaceSubscriptionWhereInput
  ) => PlaceSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PlaceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "url_ASC"
  | "url_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type EventOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "slug_ASC"
  | "slug_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface EventUpdatedatesInput {
  set?: String[] | String;
}

export type EventWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  slug?: String;
}>;

export interface PlaceUpdateWithoutEventDataInput {
  name?: String;
  url?: String;
}

export interface EventWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  places_every?: PlaceWhereInput;
  places_some?: PlaceWhereInput;
  places_none?: PlaceWhereInput;
  AND?: EventWhereInput[] | EventWhereInput;
  OR?: EventWhereInput[] | EventWhereInput;
  NOT?: EventWhereInput[] | EventWhereInput;
}

export interface EventCreatedatesInput {
  set?: String[] | String;
}

export interface EventUpdatemenusInput {
  set?: String[] | String;
}

export interface PlaceCreateManyWithoutEventInput {
  create?: PlaceCreateWithoutEventInput[] | PlaceCreateWithoutEventInput;
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
}

export interface PlaceUpsertWithWhereUniqueWithoutEventInput {
  where: PlaceWhereUniqueInput;
  update: PlaceUpdateWithoutEventDataInput;
  create: PlaceCreateWithoutEventInput;
}

export interface PlaceCreateWithoutEventInput {
  name: String;
  url?: String;
}

export interface EventSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EventWhereInput;
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
}

export interface EventCreatemenusInput {
  set?: String[] | String;
}

export interface EventUpsertWithoutPlacesInput {
  update: EventUpdateWithoutPlacesDataInput;
  create: EventCreateWithoutPlacesInput;
}

export interface EventUpdateInput {
  slug?: String;
  title?: String;
  description?: String;
  dates?: EventUpdatedatesInput;
  places?: PlaceUpdateManyWithoutEventInput;
  menus?: EventUpdatemenusInput;
}

export interface EventUpdateOneRequiredWithoutPlacesInput {
  create?: EventCreateWithoutPlacesInput;
  update?: EventUpdateWithoutPlacesDataInput;
  upsert?: EventUpsertWithoutPlacesInput;
  connect?: EventWhereUniqueInput;
}

export interface PlaceCreateInput {
  name: String;
  url?: String;
  event: EventCreateOneWithoutPlacesInput;
}

export interface PlaceUpdateInput {
  name?: String;
  url?: String;
  event?: EventUpdateOneRequiredWithoutPlacesInput;
}

export interface PlaceUpdateManyWithoutEventInput {
  create?: PlaceCreateWithoutEventInput[] | PlaceCreateWithoutEventInput;
  delete?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  connect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  disconnect?: PlaceWhereUniqueInput[] | PlaceWhereUniqueInput;
  update?:
    | PlaceUpdateWithWhereUniqueWithoutEventInput[]
    | PlaceUpdateWithWhereUniqueWithoutEventInput;
  upsert?:
    | PlaceUpsertWithWhereUniqueWithoutEventInput[]
    | PlaceUpsertWithWhereUniqueWithoutEventInput;
  deleteMany?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  updateMany?:
    | PlaceUpdateManyWithWhereNestedInput[]
    | PlaceUpdateManyWithWhereNestedInput;
}

export interface EventCreateOneWithoutPlacesInput {
  create?: EventCreateWithoutPlacesInput;
  connect?: EventWhereUniqueInput;
}

export interface PlaceUpdateWithWhereUniqueWithoutEventInput {
  where: PlaceWhereUniqueInput;
  data: PlaceUpdateWithoutEventDataInput;
}

export interface EventCreateInput {
  slug: String;
  title: String;
  description?: String;
  dates?: EventCreatedatesInput;
  places?: PlaceCreateManyWithoutEventInput;
  menus?: EventCreatemenusInput;
}

export interface PlaceWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  event?: EventWhereInput;
  AND?: PlaceWhereInput[] | PlaceWhereInput;
  OR?: PlaceWhereInput[] | PlaceWhereInput;
  NOT?: PlaceWhereInput[] | PlaceWhereInput;
}

export interface PlaceUpdateManyMutationInput {
  name?: String;
  url?: String;
}

export type PlaceWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PlaceUpdateManyDataInput {
  name?: String;
  url?: String;
}

export interface PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput;
  data: PlaceUpdateManyDataInput;
}

export interface PlaceScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  AND?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  OR?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
  NOT?: PlaceScalarWhereInput[] | PlaceScalarWhereInput;
}

export interface EventUpdateManyMutationInput {
  slug?: String;
  title?: String;
  description?: String;
  dates?: EventUpdatedatesInput;
  menus?: EventUpdatemenusInput;
}

export interface EventCreateWithoutPlacesInput {
  slug: String;
  title: String;
  description?: String;
  dates?: EventCreatedatesInput;
  menus?: EventCreatemenusInput;
}

export interface EventUpdateWithoutPlacesDataInput {
  slug?: String;
  title?: String;
  description?: String;
  dates?: EventUpdatedatesInput;
  menus?: EventUpdatemenusInput;
}

export interface PlaceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PlaceWhereInput;
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface PlacePreviousValues {
  id: ID_Output;
  name: String;
  url?: String;
}

export interface PlacePreviousValuesPromise
  extends Promise<PlacePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  url: () => Promise<String>;
}

export interface PlacePreviousValuesSubscription
  extends Promise<AsyncIterator<PlacePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEvent {
  count: Int;
}

export interface AggregateEventPromise
  extends Promise<AggregateEvent>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEventSubscription
  extends Promise<AsyncIterator<AggregateEvent>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface EventSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface EventSubscriptionPayloadPromise
  extends Promise<EventSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EventPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EventPreviousValuesPromise>() => T;
}

export interface EventSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EventSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EventSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EventPreviousValuesSubscription>() => T;
}

export interface EventEdge {
  cursor: String;
}

export interface EventEdgePromise extends Promise<EventEdge>, Fragmentable {
  node: <T = EventPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EventEdgeSubscription
  extends Promise<AsyncIterator<EventEdge>>,
    Fragmentable {
  node: <T = EventSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Place {
  id: ID_Output;
  name: String;
  url?: String;
}

export interface PlacePromise extends Promise<Place>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  url: () => Promise<String>;
  event: <T = EventPromise>() => T;
}

export interface PlaceSubscription
  extends Promise<AsyncIterator<Place>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  event: <T = EventSubscription>() => T;
}

export interface Event {
  id: ID_Output;
  slug: String;
  title: String;
  description?: String;
  dates: String[];
  menus: String[];
}

export interface EventPromise extends Promise<Event>, Fragmentable {
  id: () => Promise<ID_Output>;
  slug: () => Promise<String>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  dates: () => Promise<String[]>;
  places: <T = FragmentableArray<Place>>(
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  menus: () => Promise<String[]>;
}

export interface EventSubscription
  extends Promise<AsyncIterator<Event>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  slug: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  dates: () => Promise<AsyncIterator<String[]>>;
  places: <T = Promise<AsyncIterator<PlaceSubscription>>>(
    args?: {
      where?: PlaceWhereInput;
      orderBy?: PlaceOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  menus: () => Promise<AsyncIterator<String[]>>;
}

export interface EventPreviousValues {
  id: ID_Output;
  slug: String;
  title: String;
  description?: String;
  dates: String[];
  menus: String[];
}

export interface EventPreviousValuesPromise
  extends Promise<EventPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  slug: () => Promise<String>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  dates: () => Promise<String[]>;
  menus: () => Promise<String[]>;
}

export interface EventPreviousValuesSubscription
  extends Promise<AsyncIterator<EventPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  slug: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  dates: () => Promise<AsyncIterator<String[]>>;
  menus: () => Promise<AsyncIterator<String[]>>;
}

export interface EventConnection {}

export interface EventConnectionPromise
  extends Promise<EventConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EventEdge>>() => T;
  aggregate: <T = AggregateEventPromise>() => T;
}

export interface EventConnectionSubscription
  extends Promise<AsyncIterator<EventConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EventEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEventSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregatePlace {
  count: Int;
}

export interface AggregatePlacePromise
  extends Promise<AggregatePlace>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePlaceSubscription
  extends Promise<AsyncIterator<AggregatePlace>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PlaceSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PlaceSubscriptionPayloadPromise
  extends Promise<PlaceSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PlacePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PlacePreviousValuesPromise>() => T;
}

export interface PlaceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PlaceSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PlaceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PlacePreviousValuesSubscription>() => T;
}

export interface PlaceConnection {}

export interface PlaceConnectionPromise
  extends Promise<PlaceConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PlaceEdge>>() => T;
  aggregate: <T = AggregatePlacePromise>() => T;
}

export interface PlaceConnectionSubscription
  extends Promise<AsyncIterator<PlaceConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PlaceEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePlaceSubscription>() => T;
}

export interface PlaceEdge {
  cursor: String;
}

export interface PlaceEdgePromise extends Promise<PlaceEdge>, Fragmentable {
  node: <T = PlacePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PlaceEdgeSubscription
  extends Promise<AsyncIterator<PlaceEdge>>,
    Fragmentable {
  node: <T = PlaceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Place",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
