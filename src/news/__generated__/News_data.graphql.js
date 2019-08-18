/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SubmitDialog_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type News_data$ref: FragmentReference;
declare export opaque type News_data$fragmentType: News_data$ref;
export type News_data = {|
  +stories: ?$ReadOnlyArray<?{|
    +id: string,
    +slug: string,
    +title: string,
    +text: string,
    +isURL: boolean,
    +createdAt: ?string,
    +author: {|
      +username: string,
      +displayName: ?string,
      +photoURL: ?string,
    |},
    +pointsCount: number,
    +pointGiven: boolean,
  |}>,
  +$fragmentRefs: SubmitDialog_data$ref,
  +$refType: News_data$ref,
|};
export type News_data$data = News_data;
export type News_data$key = {
  +$data?: News_data$data,
  +$fragmentRefs: News_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "News_data",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "stories",
      "storageKey": null,
      "args": null,
      "concreteType": "Story",
      "plural": true,
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
          "name": "slug",
          "args": null,
          "storageKey": null
        },
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "createdAt",
          "args": [
            {
              "kind": "Literal",
              "name": "format",
              "value": "MMM Do, YYYY"
            }
          ],
          "storageKey": "createdAt(format:\"MMM Do, YYYY\")"
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "author",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "pointsCount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "pointGiven",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "SubmitDialog_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '183cde36512de81c8a55f38cb7227a5d';
module.exports = node;
