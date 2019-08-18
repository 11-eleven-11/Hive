/**
 * @flow
 * @relayHash c9dd5b5681251105dacadbee4d016d1f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Account$ref = any;
type Layout_data$ref = any;
export type userQueryVariables = {||};
export type userQueryResponse = {|
  +$fragmentRefs: Layout_data$ref & Account$ref
|};
export type userQuery = {|
  variables: userQueryVariables,
  response: userQueryResponse,
|};
*/


/*
query userQuery {
  ...Layout_data
  ...Account
}

fragment Layout_data on Query {
  me {
    ...LayoutToolbar_me
    ...AutoUpdater_user
    id
  }
}

fragment Account on Query {
  me {
    id
    username
    displayName
    photoURL
  }
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

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "userQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout_data",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "Account",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "userQuery",
    "argumentDefinitions": [],
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "displayName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "photoURL",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "timeZone",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "userQuery",
    "id": null,
    "text": "query userQuery {\n  ...Layout_data\n  ...Account\n}\n\nfragment Layout_data on Query {\n  me {\n    ...LayoutToolbar_me\n    ...AutoUpdater_user\n    id\n  }\n}\n\nfragment Account on Query {\n  me {\n    id\n    username\n    displayName\n    photoURL\n  }\n}\n\nfragment LayoutToolbar_me on User {\n  id\n  displayName\n  photoURL\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c0f29ba0dc56dfbd226e57bc2ebf4655';
module.exports = node;
