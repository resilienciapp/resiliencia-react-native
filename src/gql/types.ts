/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddMarkerMutation
// ====================================================

export interface AddMarkerMutation_addMarker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface AddMarkerMutation_addMarker_requests_user {
  email: string;
  name: string;
}

export interface AddMarkerMutation_addMarker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: AddMarkerMutation_addMarker_requests_user;
}

export interface AddMarkerMutation_addMarker {
  category: AddMarkerMutation_addMarker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: AddMarkerMutation_addMarker_requests[];
  state: MarkerState;
}

export interface AddMarkerMutation {
  addMarker: AddMarkerMutation_addMarker[];
}

export interface AddMarkerMutationVariables {
  input: AddMarkerInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddRequestMutation
// ====================================================

export interface AddRequestMutation_addRequest_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface AddRequestMutation_addRequest_requests_user {
  email: string;
  name: string;
}

export interface AddRequestMutation_addRequest_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: AddRequestMutation_addRequest_requests_user;
}

export interface AddRequestMutation_addRequest {
  category: AddRequestMutation_addRequest_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: AddRequestMutation_addRequest_requests[];
  state: MarkerState;
}

export interface AddRequestMutation {
  addRequest: AddRequestMutation_addRequest;
}

export interface AddRequestMutationVariables {
  input: AddRequestInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoriesQuery
// ====================================================

export interface CategoriesQuery_categories {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface CategoriesQuery {
  categories: CategoriesQuery_categories[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserLazyQuery
// ====================================================

export interface UserLazyQuery_user_events_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface UserLazyQuery_user_events_marker_requests_user {
  email: string;
  name: string;
}

export interface UserLazyQuery_user_events_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: UserLazyQuery_user_events_marker_requests_user;
}

export interface UserLazyQuery_user_events_marker {
  category: UserLazyQuery_user_events_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UserLazyQuery_user_events_marker_requests[];
  state: MarkerState;
}

export interface UserLazyQuery_user_events {
  marker: UserLazyQuery_user_events_marker;
}

export interface UserLazyQuery_user_profile {
  email: string;
  name: string;
}

export interface UserLazyQuery_user_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface UserLazyQuery_user_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface UserLazyQuery_user_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: UserLazyQuery_user_subscriptions_marker_requests_user;
}

export interface UserLazyQuery_user_subscriptions_marker {
  category: UserLazyQuery_user_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UserLazyQuery_user_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface UserLazyQuery_user_subscriptions {
  date: any;
  id: number;
  marker: UserLazyQuery_user_subscriptions_marker;
}

export interface UserLazyQuery_user {
  events: UserLazyQuery_user_events[];
  id: number;
  profile: UserLazyQuery_user_profile;
  subscriptions: UserLazyQuery_user_subscriptions[];
}

export interface UserLazyQuery {
  user: UserLazyQuery_user;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MarkerQuery
// ====================================================

export interface MarkerQuery_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface MarkerQuery_marker_requests_user {
  email: string;
  name: string;
}

export interface MarkerQuery_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: MarkerQuery_marker_requests_user;
}

export interface MarkerQuery_marker {
  category: MarkerQuery_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: MarkerQuery_marker_requests[];
  state: MarkerState;
}

export interface MarkerQuery {
  marker: MarkerQuery_marker;
}

export interface MarkerQueryVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MarkersQuery
// ====================================================

export interface MarkersQuery_markers_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface MarkersQuery_markers_requests_user {
  email: string;
  name: string;
}

export interface MarkersQuery_markers_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: MarkersQuery_markers_requests_user;
}

export interface MarkersQuery_markers {
  category: MarkersQuery_markers_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: MarkersQuery_markers_requests[];
  state: MarkerState;
}

export interface MarkersQuery {
  markers: MarkersQuery_markers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterDeviceTokenMutation
// ====================================================

export interface RegisterDeviceTokenMutation_registerDeviceToken {
  id: number;
}

export interface RegisterDeviceTokenMutation {
  registerDeviceToken: RegisterDeviceTokenMutation_registerDeviceToken;
}

export interface RegisterDeviceTokenMutationVariables {
  input: RegisterDeviceTokenInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignInMutation
// ====================================================

export interface SignInMutation_signIn {
  jwt: string;
}

export interface SignInMutation {
  signIn: SignInMutation_signIn;
}

export interface SignInMutationVariables {
  input: SignInInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUpMutation
// ====================================================

export interface SignUpMutation_signUp {
  jwt: string;
}

export interface SignUpMutation {
  signUp: SignUpMutation_signUp;
}

export interface SignUpMutationVariables {
  input: SignUpInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubscribeMutation
// ====================================================

export interface SubscribeMutation_subscribeMarker_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface SubscribeMutation_subscribeMarker_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface SubscribeMutation_subscribeMarker_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: SubscribeMutation_subscribeMarker_subscriptions_marker_requests_user;
}

export interface SubscribeMutation_subscribeMarker_subscriptions_marker {
  category: SubscribeMutation_subscribeMarker_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: SubscribeMutation_subscribeMarker_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface SubscribeMutation_subscribeMarker_subscriptions {
  date: any;
  id: number;
  marker: SubscribeMutation_subscribeMarker_subscriptions_marker;
}

export interface SubscribeMutation_subscribeMarker {
  id: number;
  subscriptions: SubscribeMutation_subscribeMarker_subscriptions[];
}

export interface SubscribeMutation {
  subscribeMarker: SubscribeMutation_subscribeMarker;
}

export interface SubscribeMutationVariables {
  input: SubscribeMarkerInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnsubscribeMarkerMutation
// ====================================================

export interface UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker_requests_user;
}

export interface UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker {
  category: UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions {
  date: any;
  id: number;
  marker: UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker;
}

export interface UnsubscribeMarkerMutation_unsubscribeMarker {
  id: number;
  subscriptions: UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions[];
}

export interface UnsubscribeMarkerMutation {
  unsubscribeMarker: UnsubscribeMarkerMutation_unsubscribeMarker;
}

export interface UnsubscribeMarkerMutationVariables {
  input: UnsubscribeMarkerInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserQuery
// ====================================================

export interface UserQuery_user_events_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface UserQuery_user_events_marker_requests_user {
  email: string;
  name: string;
}

export interface UserQuery_user_events_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: UserQuery_user_events_marker_requests_user;
}

export interface UserQuery_user_events_marker {
  category: UserQuery_user_events_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UserQuery_user_events_marker_requests[];
  state: MarkerState;
}

export interface UserQuery_user_events {
  marker: UserQuery_user_events_marker;
}

export interface UserQuery_user_profile {
  email: string;
  name: string;
}

export interface UserQuery_user_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface UserQuery_user_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface UserQuery_user_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: UserQuery_user_subscriptions_marker_requests_user;
}

export interface UserQuery_user_subscriptions_marker {
  category: UserQuery_user_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UserQuery_user_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface UserQuery_user_subscriptions {
  date: any;
  id: number;
  marker: UserQuery_user_subscriptions_marker;
}

export interface UserQuery_user {
  events: UserQuery_user_events[];
  id: number;
  profile: UserQuery_user_profile;
  subscriptions: UserQuery_user_subscriptions[];
}

export interface UserQuery {
  user: UserQuery_user;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserEventsQuery
// ====================================================

export interface UserEventsQuery_user_events_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface UserEventsQuery_user_events_marker_requests_user {
  email: string;
  name: string;
}

export interface UserEventsQuery_user_events_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: UserEventsQuery_user_events_marker_requests_user;
}

export interface UserEventsQuery_user_events_marker {
  category: UserEventsQuery_user_events_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UserEventsQuery_user_events_marker_requests[];
  state: MarkerState;
}

export interface UserEventsQuery_user_events {
  marker: UserEventsQuery_user_events_marker;
}

export interface UserEventsQuery_user {
  events: UserEventsQuery_user_events[];
  id: number;
}

export interface UserEventsQuery {
  user: UserEventsQuery_user;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserSubscriptionsQuery
// ====================================================

export interface UserSubscriptionsQuery_user_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface UserSubscriptionsQuery_user_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface UserSubscriptionsQuery_user_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: UserSubscriptionsQuery_user_subscriptions_marker_requests_user;
}

export interface UserSubscriptionsQuery_user_subscriptions_marker {
  category: UserSubscriptionsQuery_user_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UserSubscriptionsQuery_user_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface UserSubscriptionsQuery_user_subscriptions {
  date: any;
  id: number;
  marker: UserSubscriptionsQuery_user_subscriptions_marker;
}

export interface UserSubscriptionsQuery_user {
  id: number;
  subscriptions: UserSubscriptionsQuery_user_subscriptions[];
}

export interface UserSubscriptionsQuery {
  user: UserSubscriptionsQuery_user;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Category
// ====================================================

export interface Category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Marker
// ====================================================

export interface Marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface Marker_requests_user {
  email: string;
  name: string;
}

export interface Marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: Marker_requests_user;
}

export interface Marker {
  category: Marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: Marker_requests[];
  state: MarkerState;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Request
// ====================================================

export interface Request_user {
  email: string;
  name: string;
}

export interface Request {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: Request_user;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Events
// ====================================================

export interface Events_events_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface Events_events_marker_requests_user {
  email: string;
  name: string;
}

export interface Events_events_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: Events_events_marker_requests_user;
}

export interface Events_events_marker {
  category: Events_events_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: Events_events_marker_requests[];
  state: MarkerState;
}

export interface Events_events {
  marker: Events_events_marker;
}

export interface Events {
  events: Events_events[];
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Subscriptions
// ====================================================

export interface Subscriptions_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface Subscriptions_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface Subscriptions_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: Subscriptions_subscriptions_marker_requests_user;
}

export interface Subscriptions_subscriptions_marker {
  category: Subscriptions_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: Subscriptions_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface Subscriptions_subscriptions {
  date: any;
  id: number;
  marker: Subscriptions_subscriptions_marker;
}

export interface Subscriptions {
  id: number;
  subscriptions: Subscriptions_subscriptions[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User_events_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface User_events_marker_requests_user {
  email: string;
  name: string;
}

export interface User_events_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: User_events_marker_requests_user;
}

export interface User_events_marker {
  category: User_events_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: User_events_marker_requests[];
  state: MarkerState;
}

export interface User_events {
  marker: User_events_marker;
}

export interface User_profile {
  email: string;
  name: string;
}

export interface User_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface User_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface User_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: User_subscriptions_marker_requests_user;
}

export interface User_subscriptions_marker {
  category: User_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: User_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface User_subscriptions {
  date: any;
  id: number;
  marker: User_subscriptions_marker;
}

export interface User {
  events: User_events[];
  id: number;
  profile: User_profile;
  subscriptions: User_subscriptions[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum MarkerState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING_CONFIRMATION = "PENDING_CONFIRMATION",
}

export enum Platform {
  android = "android",
  ios = "ios",
}

export interface AddMarkerInput {
  category: number;
  description?: string | null;
  duration: number;
  expiresAt?: any | null;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
}

export interface AddRequestInput {
  description: string;
  expiresAt?: any | null;
  marker: number;
  notifiable: boolean;
}

export interface RegisterDeviceTokenInput {
  deviceId: string;
  platform: Platform;
  token: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignUpInput {
  email: string;
  name: string;
  password: string;
}

export interface SubscribeMarkerInput {
  marker: number;
}

export interface UnsubscribeMarkerInput {
  marker: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
