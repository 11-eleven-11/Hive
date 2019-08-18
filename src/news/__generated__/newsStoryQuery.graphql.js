/**
 * @flow
 * @relayHash 9734b746340a5b1e5f7e06e96e277a55
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_data$ref = any;
type Story$ref = any;
export type newsStoryQueryVariables = {|
  slug: string
|};
export type newsStoryQueryResponse = {|
  +story: ?{|
    +title: string,
    +$fragmentRefs: Story$ref,
  |},
  +$fragmentRefs: Layout_data$ref,
|};
export type newsStoryQuery = {|
  variables: newsStoryQueryVariables,
  response: newsStoryQueryResponse,
|};
*/


/*
query newsStoryQuery(
  $slug: String!
) {
  ...Layout_data
  story(slug: $slug) {
    title
    ...Story
    id
  }
}

fragment Layout_data on Query {
  me {
    ...LayoutToolbar_me
    ...AutoUpdater_user
    id
  }
}

fragment Story on Story {
  title
  text
  isURL
}

fragment LayoutToolbar_me on User {
  id
  displayName
  photoURL
}

fragment AutoUpdater_user on User {
  id
  timeZone
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "slug",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "newsStoryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "story",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Story",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "Story",
            "args": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "Layout_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "newsStoryQuery",
    "argumentDefinitions": (v0/*: any*/),
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
          (v3/*: any*/),
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "timeZone",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "story",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Story",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "newsStoryQuery",
    "id": null,
    "text": "query newsStoryQuery(\n  $slug: String!\n) {\n  ...Layout_data\n  story(slug: $slug) {\n    title\n    ...Story\n    id\n  }\n}\n\nfragment Layout_data on Query {\n  me {\n    ...LayoutToolbar_me\n    ...AutoUpdater_user\n    id\n  }\n}\n\nfragment Story on Story {\n  title\n  text\n  isURL\n}\n\nfragment LayoutToolbar_me on User {\n  id\n  displayName\n  photoURL\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cfad51b81775a3038d8baea92de4399c';
module.exports = node;
