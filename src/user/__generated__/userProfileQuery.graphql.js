/**
 * @flow
 * @relayHash 9bcaddc3885420c97b05b6d80c6785b5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_data$ref = any;
type UserProfile$ref = any;
export type userProfileQueryVariables = {|
  username: string
|};
export type userProfileQueryResponse = {|
  +user: ?{|
    +displayName: ?string,
    +$fragmentRefs: UserProfile$ref,
  |},
  +$fragmentRefs: Layout_data$ref,
|};
export type userProfileQuery = {|
  variables: userProfileQueryVariables,
  response: userProfileQueryResponse,
|};
*/


/*
query userProfileQuery(
  $username: String!
) {
  ...Layout_data
  user(username: $username) {
    displayName
    ...UserProfile
    id
  }
}

fragment Layout_data on Query {
  me {
    ...LayoutToolbar_me
    ...AutoUpdater_user
    id
  }
}

fragment UserProfile on User {
  id
  username
  displayName
  photoURL
}

fragment LayoutToolbar_me on User {
  id
  displayName
  photoURL
}

fragment AutoUpdater_user on User {
  id
  timeZone
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "photoURL",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "userProfileQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "UserProfile",
            "args": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "Layout_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "userProfileQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "timeZone",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "userProfileQuery",
    "id": null,
    "text": "query userProfileQuery(\n  $username: String!\n) {\n  ...Layout_data\n  user(username: $username) {\n    displayName\n    ...UserProfile\n    id\n  }\n}\n\nfragment Layout_data on Query {\n  me {\n    ...LayoutToolbar_me\n    ...AutoUpdater_user\n    id\n  }\n}\n\nfragment UserProfile on User {\n  id\n  username\n  displayName\n  photoURL\n}\n\nfragment LayoutToolbar_me on User {\n  id\n  displayName\n  photoURL\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f7d29f1becee3dceae24e12a8f2c6e0e';
module.exports = node;
