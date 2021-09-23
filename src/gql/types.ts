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

export interface MarkersQuery_markers {
  active: boolean;
  category: MarkersQuery_markers_category;
  description: string | null;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
}

export interface MarkersQuery {
  markers: MarkersQuery_markers[];
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
  isAdmin: boolean;
  name: string;
}

export interface UserQuery_user {
  id: number;
  profile: UserQuery_user_profile;
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

export interface Marker {
  active: boolean;
  category: Marker_category;
  description: string | null;
  expiresAt: any | null;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  recurrence: string;
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
  isAdmin: boolean;
  name: string;
}

export interface User {
  id: number;
  profile: User_profile;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

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
