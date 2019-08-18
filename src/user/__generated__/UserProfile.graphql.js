/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserProfile$ref: FragmentReference;
declare export opaque type UserProfile$fragmentType: UserProfile$ref;
export type UserProfile = {|
  +id: string,
  +username: string,
  +displayName: ?string,
  +photoURL: ?string,
  +$refType: UserProfile$ref,
|};
export type UserProfile$data = UserProfile;
export type UserProfile$key = {
  +$data?: UserProfile$data,
  +$fragmentRefs: UserProfile$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserProfile",
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
      "name": "username",
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
(node/*: any*/).hash = 'b4fa822f11fe761a55f9d56ad3203915';
module.exports = node;
