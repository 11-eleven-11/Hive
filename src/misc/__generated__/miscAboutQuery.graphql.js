/**
 * @flow
 * @relayHash a0557d52c797e80e09d96ba77b2c14ef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_data$ref = any;
export type miscAboutQueryVariables = {||};
export type miscAboutQueryResponse = {|
  +$fragmentRefs: Layout_data$ref
|};
export type miscAboutQuery = {|
  variables: miscAboutQueryVariables,
  response: miscAboutQueryResponse,
|};
*/


/*
query miscAboutQuery {
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
    "name": "miscAboutQuery",
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
    "name": "miscAboutQuery",
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
    "name": "miscAboutQuery",
    "id": null,
    "text": "query miscAboutQuery {\n  ...Layout_data\n}\n\nfragment Layout_data on Query {\n  me {\n    ...LayoutToolbar_me\n    ...AutoUpdater_user\n    id\n  }\n}\n\nfragment LayoutToolbar_me on User {\n  id\n  displayName\n  photoURL\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '8625eb9e98b64433c52195a614f0218a';
module.exports = node;
