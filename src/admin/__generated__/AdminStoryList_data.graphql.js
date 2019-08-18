/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdminStoryList_data$ref: FragmentReference;
declare export opaque type AdminStoryList_data$fragmentType: AdminStoryList_data$ref;
export type AdminStoryList_data = {|
  +me: ?{|
    +id: string
  |},
  +$refType: AdminStoryList_data$ref,
|};
export type AdminStoryList_data$data = AdminStoryList_data;
export type AdminStoryList_data$key = {
  +$data?: AdminStoryList_data$data,
  +$fragmentRefs: AdminStoryList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AdminStoryList_data",
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
(node/*: any*/).hash = '63efdab22eacb8c0e36cf3cad3402e6d';
module.exports = node;
