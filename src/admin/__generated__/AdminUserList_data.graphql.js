/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdminUserList_data$ref: FragmentReference;
declare export opaque type AdminUserList_data$fragmentType: AdminUserList_data$ref;
export type AdminUserList_data = {|
  +me: ?{|
    +id: string
  |},
  +$refType: AdminUserList_data$ref,
|};
export type AdminUserList_data$data = AdminUserList_data;
export type AdminUserList_data$key = {
  +$data?: AdminUserList_data$data,
  +$fragmentRefs: AdminUserList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AdminUserList_data",
  "type": "Query",
  "metadata": null,
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
};
// prettier-ignore
(node/*: any*/).hash = '68385706a7178daaebf4a4ee4b727aeb';
module.exports = node;
