/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AutoUpdater_user$ref: FragmentReference;
declare export opaque type AutoUpdater_user$fragmentType: AutoUpdater_user$ref;
export type AutoUpdater_user = {|
  +id: string,
  +timeZone: ?string,
  +$refType: AutoUpdater_user$ref,
|};
export type AutoUpdater_user$data = AutoUpdater_user;
export type AutoUpdater_user$key = {
  +$data?: AutoUpdater_user$data,
  +$fragmentRefs: AutoUpdater_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AutoUpdater_user",
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
      "name": "timeZone",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '66712bcde4af21afc73c9023ffd80d96';
module.exports = node;
