/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LayoutToolbar_me$ref: FragmentReference;
declare export opaque type LayoutToolbar_me$fragmentType: LayoutToolbar_me$ref;
export type LayoutToolbar_me = {|
  +id: string,
  +displayName: ?string,
  +photoURL: ?string,
  +$refType: LayoutToolbar_me$ref,
|};
export type LayoutToolbar_me$data = LayoutToolbar_me;
export type LayoutToolbar_me$key = {
  +$data?: LayoutToolbar_me$data,
  +$fragmentRefs: LayoutToolbar_me$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "LayoutToolbar_me",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4b6ca289157db6f3284d3424d43c175d';
module.exports = node;
