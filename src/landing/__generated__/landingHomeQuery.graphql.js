/**
 * @flow
 * @relayHash 07cc7aee7a89c437c5fd55f251b49fd2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_data$ref = any;
export type landingHomeQueryVariables = {||};
export type landingHomeQueryResponse = {|
  +$fragmentRefs: Layout_data$ref
|};
export type landingHomeQuery = {|
  variables: landingHomeQueryVariables,
  response: landingHomeQueryResponse,
|};
*/


/*
query landingHomeQuery {
  ...Layout_data
}

fragment Layout_data on Query {
  me {
    ...LayoutToolbar_me
    ...AutoUpdater_user
    id
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
    "name": "landingHomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "landingHomeQuery",
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "landingHomeQuery",
    "id": null,
    "text": "query landingHomeQuery {\n  ...Layout_data\n}\n\nfragment Layout_data on Query {\n  me {\n    ...LayoutToolbar_me\n    ...AutoUpdater_user\n    id\n  }\n}\n\nfragment LayoutToolbar_me on User {\n  id\n  displayName\n  photoURL\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'cbdd83c7da1d00f9113b5fcdb451ae76';
module.exports = node;
