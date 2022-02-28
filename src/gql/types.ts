/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddMarker
// ====================================================

export interface AddMarker_addMarker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

export interface AddMarker_addMarker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface AddMarker_addMarker_requests_user {
  email: string;
  name: string;
}

export interface AddMarker_addMarker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: AddMarker_addMarker_requests_user;
}

export interface AddMarker_addMarker {
  adminRequests: AddMarker_addMarker_adminRequests[];
  category: AddMarker_addMarker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: AddMarker_addMarker_requests[];
  subscribedUsers: number;
  timeZone: string;
}

export interface AddMarker {
  addMarker: AddMarker_addMarker;
}

export interface AddMarkerVariables {
  input: AddMarkerInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddRequest
// ====================================================

export interface AddRequest_addRequest_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

export interface AddRequest_addRequest_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface AddRequest_addRequest_requests_user {
  email: string;
  name: string;
}

export interface AddRequest_addRequest_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: AddRequest_addRequest_requests_user;
}

export interface AddRequest_addRequest {
  adminRequests: AddRequest_addRequest_adminRequests[];
  category: AddRequest_addRequest_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: AddRequest_addRequest_requests[];
  subscribedUsers: number;
  timeZone: string;
}

export interface AddRequest {
  addRequest: AddRequest_addRequest;
}

export interface AddRequestVariables {
  input: AddRequestInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AdminRequests
// ====================================================

export interface AdminRequests_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

export interface AdminRequests_marker {
  adminRequests: AdminRequests_marker_adminRequests[];
  id: number;
}

export interface AdminRequests {
  marker: AdminRequests_marker;
}

export interface AdminRequestsVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AppVersion
// ====================================================

export interface AppVersion_appVersion {
  android: string;
  ios: string;
}

export interface AppVersion {
  appVersion: AppVersion_appVersion;
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
// GraphQL mutation operation: ConfirmMarker
// ====================================================

export interface ConfirmMarker_confirmMarker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

export interface ConfirmMarker_confirmMarker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface ConfirmMarker_confirmMarker_requests_user {
  email: string;
  name: string;
}

export interface ConfirmMarker_confirmMarker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: ConfirmMarker_confirmMarker_requests_user;
}

export interface ConfirmMarker_confirmMarker {
  adminRequests: ConfirmMarker_confirmMarker_adminRequests[];
  category: ConfirmMarker_confirmMarker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: ConfirmMarker_confirmMarker_requests[];
  subscribedUsers: number;
  timeZone: string;
}

export interface ConfirmMarker {
  confirmMarker: ConfirmMarker_confirmMarker;
}

export interface ConfirmMarkerVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteMarker
// ====================================================

export interface DeleteMarker_deleteMarker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

export interface DeleteMarker_deleteMarker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface DeleteMarker_deleteMarker_requests_user {
  email: string;
  name: string;
}

export interface DeleteMarker_deleteMarker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: DeleteMarker_deleteMarker_requests_user;
}

export interface DeleteMarker_deleteMarker {
  adminRequests: DeleteMarker_deleteMarker_adminRequests[];
  category: DeleteMarker_deleteMarker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: DeleteMarker_deleteMarker_requests[];
  subscribedUsers: number;
  timeZone: string;
}

export interface DeleteMarker {
  deleteMarker: DeleteMarker_deleteMarker[];
}

export interface DeleteMarkerVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserLazyQuery
// ====================================================

export interface UserLazyQuery_user_events_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: UserLazyQuery_user_events_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
}

export interface UserLazyQuery_user_events {
  marker: UserLazyQuery_user_events_marker;
}

export interface UserLazyQuery_user_profile {
  email: string;
  name: string;
}

export interface UserLazyQuery_user_subscriptions_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
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
  adminRequests: UserLazyQuery_user_subscriptions_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export interface MarkerQuery_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: MarkerQuery_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export interface MarkersQuery_markers_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: MarkersQuery_markers_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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
// GraphQL mutation operation: ReportMarker
// ====================================================

export interface ReportMarker_reportMarker {
  id: number;
}

export interface ReportMarker {
  reportMarker: ReportMarker_reportMarker;
}

export interface ReportMarkerVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RequestMarkerAdministration
// ====================================================

export interface RequestMarkerAdministration_requestMarkerAdministration {
  id: number;
}

export interface RequestMarkerAdministration {
  requestMarkerAdministration: RequestMarkerAdministration_requestMarkerAdministration;
}

export interface RequestMarkerAdministrationVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RespondMarkerRequest
// ====================================================

export interface RespondMarkerRequest_respondMarkerRequest_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

export interface RespondMarkerRequest_respondMarkerRequest {
  adminRequests: RespondMarkerRequest_respondMarkerRequest_adminRequests[];
  id: number;
}

export interface RespondMarkerRequest {
  respondMarkerRequest: RespondMarkerRequest_respondMarkerRequest;
}

export interface RespondMarkerRequestVariables {
  input: RespondMarkerRequestInput;
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
// GraphQL mutation operation: SubscribeMarker
// ====================================================

export interface SubscribeMarker_subscribeMarker_subscriptions_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

export interface SubscribeMarker_subscribeMarker_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface SubscribeMarker_subscribeMarker_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface SubscribeMarker_subscribeMarker_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: SubscribeMarker_subscribeMarker_subscriptions_marker_requests_user;
}

export interface SubscribeMarker_subscribeMarker_subscriptions_marker {
  adminRequests: SubscribeMarker_subscribeMarker_subscriptions_marker_adminRequests[];
  category: SubscribeMarker_subscribeMarker_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: SubscribeMarker_subscribeMarker_subscriptions_marker_requests[];
  subscribedUsers: number;
  timeZone: string;
}

export interface SubscribeMarker_subscribeMarker_subscriptions {
  date: any;
  id: number;
  marker: SubscribeMarker_subscribeMarker_subscriptions_marker;
}

export interface SubscribeMarker_subscribeMarker {
  id: number;
  subscriptions: SubscribeMarker_subscribeMarker_subscriptions[];
}

export interface SubscribeMarker {
  subscribeMarker: SubscribeMarker_subscribeMarker;
}

export interface SubscribeMarkerVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnsubscribeMarker
// ====================================================

export interface UnsubscribeMarker_unsubscribeMarker_subscriptions_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

export interface UnsubscribeMarker_unsubscribeMarker_subscriptions_marker_category {
  color: string;
  description: string | null;
  id: number;
  name: string;
}

export interface UnsubscribeMarker_unsubscribeMarker_subscriptions_marker_requests_user {
  email: string;
  name: string;
}

export interface UnsubscribeMarker_unsubscribeMarker_subscriptions_marker_requests {
  createdAt: any;
  description: string;
  expiresAt: any | null;
  id: number;
  user: UnsubscribeMarker_unsubscribeMarker_subscriptions_marker_requests_user;
}

export interface UnsubscribeMarker_unsubscribeMarker_subscriptions_marker {
  adminRequests: UnsubscribeMarker_unsubscribeMarker_subscriptions_marker_adminRequests[];
  category: UnsubscribeMarker_unsubscribeMarker_subscriptions_marker_category;
  description: string | null;
  duration: number;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
  requests: UnsubscribeMarker_unsubscribeMarker_subscriptions_marker_requests[];
  subscribedUsers: number;
  timeZone: string;
}

export interface UnsubscribeMarker_unsubscribeMarker_subscriptions {
  date: any;
  id: number;
  marker: UnsubscribeMarker_unsubscribeMarker_subscriptions_marker;
}

export interface UnsubscribeMarker_unsubscribeMarker {
  id: number;
  subscriptions: UnsubscribeMarker_unsubscribeMarker_subscriptions[];
}

export interface UnsubscribeMarker {
  unsubscribeMarker: UnsubscribeMarker_unsubscribeMarker;
}

export interface UnsubscribeMarkerVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserQuery
// ====================================================

export interface UserQuery_user_events_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: UserQuery_user_events_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
}

export interface UserQuery_user_events {
  marker: UserQuery_user_events_marker;
}

export interface UserQuery_user_profile {
  email: string;
  name: string;
}

export interface UserQuery_user_subscriptions_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
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
  adminRequests: UserQuery_user_subscriptions_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export interface UserEventsQuery_user_events_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: UserEventsQuery_user_events_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export interface UserSubscriptionsQuery_user_subscriptions_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: UserSubscriptionsQuery_user_subscriptions_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export interface Marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: Marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export interface Events_events_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: Events_events_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export interface Subscriptions_subscriptions_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: Subscriptions_subscriptions_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export interface User_events_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
}

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
  adminRequests: User_events_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
}

export interface User_events {
  marker: User_events_marker;
}

export interface User_profile {
  email: string;
  name: string;
}

export interface User_subscriptions_marker_adminRequests {
  createdAt: any;
  id: number;
  status: RequestStatus;
  userName: string;
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
  adminRequests: User_subscriptions_marker_adminRequests[];
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
  subscribedUsers: number;
  timeZone: string;
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

export enum Platform {
  android = "android",
  ios = "ios",
}

export enum RequestStatus {
  accepted = "accepted",
  pending = "pending",
  rejected = "rejected",
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
  timeZone: string;
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

export interface RespondMarkerRequestInput {
  requestId: number;
  response: RequestStatus;
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

//==============================================================
// END Enums and Input Objects
//==============================================================
