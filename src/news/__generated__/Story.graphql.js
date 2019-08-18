/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Story$ref: FragmentReference;
declare export opaque type Story$fragmentType: Story$ref;
export type Story = {|
  +title: string,
  +text: string,
  +isURL: boolean,
  +$refType: Story$ref,
|};
export type Story$data = Story;
export type Story$key = {
  +$data?: Story$data,
  +$fragmentRefs: Story$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Story",
  "type": "Story",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isURL",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'dc0c5356f83641129460f60f89d3f3fc';
module.exports = node;
