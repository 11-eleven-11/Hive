/**
 * @flow
 * @relayHash 9330b220f6b6a0f3451033689a38a791
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AdminLayout_data$ref = any;
type AdminUserList_data$ref = any;
export type adminUserListQueryVariables = {||};
export type adminUserListQueryResponse = {|
  +$fragmentRefs: AdminLayout_data$ref & AdminUserList_data$ref
|};
export type adminUserListQuery = {|
  variables: adminUserListQueryVariables,
  response: adminUserListQueryResponse,
|};
*/


/*
query adminUserListQuery {
  ...AdminLayout_data
  ...AdminUserList_data
}

fragment AdminLayout_data on Query {
  me {
    id
  }
}

fragment AdminUserList_data on Query {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "adminUserListQuery",
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
        "name": "AdminUserList_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "adminUserListQuery",
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
    "name": "adminUserListQuery",
    "id": null,
    "text": "query adminUserListQuery {\n  ...AdminLayout_data\n  ...AdminUserList_data\n}\n\nfragment AdminLayout_data on Query {\n  me {\n    id\n  }\n}\n\nfragment AdminUserList_data on Query {\n  me {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'd86409713fc342e2fcc44a52da3c48ca';
module.exports = node;
