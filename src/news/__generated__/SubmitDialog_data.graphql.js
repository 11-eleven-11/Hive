/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SubmitDialog_data$ref: FragmentReference;
declare export opaque type SubmitDialog_data$fragmentType: SubmitDialog_data$ref;
export type SubmitDialog_data = {|
  +me: ?{|
    +id: string
  |},
  +$refType: SubmitDialog_data$ref,
|};
export type SubmitDialog_data$data = SubmitDialog_data;
export type SubmitDialog_data$key = {
  +$data?: SubmitDialog_data$data,
  +$fragmentRefs: SubmitDialog_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SubmitDialog_data",
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
(node/*: any*/).hash = '773a9e2be2e4677ed809237e300b3384';
module.exports = node;
