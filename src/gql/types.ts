/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoriesQuery
// ====================================================

export interface CategoriesQuery_categories {
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
// GraphQL query operation: MarkersQuery
// ====================================================

export interface MarkersQuery_markers_category {
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
  isSubscribed: boolean;
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
// GraphQL mutation operation: SubscribeMutation
// ====================================================

export interface SubscribeMutation_subscribeMarker_subscriptions_marker_category {
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
  isSubscribed: boolean;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: SubscribeMutation_subscribeMarker_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface SubscribeMutation_subscribeMarker_subscriptions {
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
  isSubscribed: boolean;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface UnsubscribeMarkerMutation_unsubscribeMarker_subscriptions {
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

export interface UserQuery_user_profile {
  email: string;
  name: string;
}

export interface UserQuery_user_subscriptions_marker_category {
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
  isSubscribed: boolean;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UserQuery_user_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface UserQuery_user_subscriptions {
  marker: UserQuery_user_subscriptions_marker;
}

export interface UserQuery_user {
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
// GraphQL fragment: Category
// ====================================================

export interface Category {
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
  isSubscribed: boolean;
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
// GraphQL fragment: User
// ====================================================

export interface User_profile {
  email: string;
  name: string;
}

export interface User_subscriptions_marker_category {
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
  isSubscribed: boolean;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: User_subscriptions_marker_requests[];
  state: MarkerState;
}

export interface User_subscriptions {
  marker: User_subscriptions_marker;
}

export interface User {
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
