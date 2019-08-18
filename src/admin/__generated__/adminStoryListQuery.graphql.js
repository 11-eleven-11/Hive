/**
 * @flow
 * @relayHash a225433f7cc1d2dd17f47e62c1f251b4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AdminLayout_data$ref = any;
type AdminStoryList_data$ref = any;
export type adminStoryListQueryVariables = {||};
export type adminStoryListQueryResponse = {|
  +$fragmentRefs: AdminLayout_data$ref & AdminStoryList_data$ref
|};
export type adminStoryListQuery = {|
  variables: adminStoryListQueryVariables,
  response: adminStoryListQueryResponse,
|};
*/


/*
query adminStoryListQuery {
  ...AdminLayout_data
  ...AdminStoryList_data
}

fragment AdminLayout_data on Query {
  me {
    id
  }
}

fragment AdminStoryList_data on Query {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "adminStoryListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AdminLayout_data",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "AdminStoryList_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "adminStoryListQuery",
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "adminStoryListQuery",
    "id": null,
    "text": "query adminStoryListQuery {\n  ...AdminLayout_data\n  ...AdminStoryList_data\n}\n\nfragment AdminLayout_data on Query {\n  me {\n    id\n  }\n}\n\nfragment AdminStoryList_data on Query {\n  me {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'ee85804f8fb370fc2320d4a2e6c39223';
module.exports = node;
