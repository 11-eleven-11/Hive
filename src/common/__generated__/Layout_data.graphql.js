/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AutoUpdater_user$ref = any;
type LayoutToolbar_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Layout_data$ref: FragmentReference;
declare export opaque type Layout_data$fragmentType: Layout_data$ref;
export type Layout_data = {|
  +me: ?{|
    +$fragmentRefs: LayoutToolbar_me$ref & AutoUpdater_user$ref
  |},
  +$refType: Layout_data$ref,
|};
export type Layout_data$data = Layout_data;
export type Layout_data$key = {
  +$data?: Layout_data$data,
  +$fragmentRefs: Layout_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Layout_data",
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
          "kind": "FragmentSpread",
          "name": "LayoutToolbar_me",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "AutoUpdater_user",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '423f48f0e6d5f7791bddc9ef9b9518e0';
module.exports = node;
