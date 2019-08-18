/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdminLayout_data$ref: FragmentReference;
declare export opaque type AdminLayout_data$fragmentType: AdminLayout_data$ref;
export type AdminLayout_data = {|
  +me: ?{|
    +id: string
  |},
  +$refType: AdminLayout_data$ref,
|};
export type AdminLayout_data$data = AdminLayout_data;
export type AdminLayout_data$key = {
  +$data?: AdminLayout_data$data,
  +$fragmentRefs: AdminLayout_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AdminLayout_data",
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
(node/*: any*/).hash = '1529d3df7b7adda0b10cb59869290c64';
module.exports = node;
