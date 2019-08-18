/**
 * @flow
 * @relayHash 25c1bc297aabd2c8635b46d6be34ad1b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_data$ref = any;
type News_data$ref = any;
export type newsQueryVariables = {||};
export type newsQueryResponse = {|
  +$fragmentRefs: Layout_data$ref & News_data$ref
|};
export type newsQuery = {|
  variables: newsQueryVariables,
  response: newsQueryResponse,
|};
*/


/*
query newsQuery {
  ...Layout_data
  ...News_data
}

fragment Layout_data on Query {
  me {
    ...LayoutToolbar_me
    ...AutoUpdater_user
    id
  }
}

fragment News_data on Query {
  ...SubmitDialog_data
  stories {
    id
    slug
    title
    text
    isURL
    createdAt(format: "MMM Do, YYYY")
    author {
      username
      displayName
      photoURL
      id
    }
    pointsCount
    pointGiven
  }
}

fragment SubmitDialog_data on Query {
  me {
    id
  }
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayName",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "photoURL",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "newsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Layout_data",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "News_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "newsQuery",
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
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
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
        "name": "stories",
        "storageKey": null,
        "args": null,
        "concreteType": "Story",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
              (v1/*: any*/),
              (v2/*: any*/),
              (v0/*: any*/)
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "newsQuery",
    "id": null,
    "text": "query newsQuery {\n  ...Layout_data\n  ...News_data\n}\n\nfragment Layout_data on Query {\n  me {\n    ...LayoutToolbar_me\n    ...AutoUpdater_user\n    id\n  }\n}\n\nfragment News_data on Query {\n  ...SubmitDialog_data\n  stories {\n    id\n    slug\n    title\n    text\n    isURL\n    createdAt(format: \"MMM Do, YYYY\")\n    author {\n      username\n      displayName\n      photoURL\n      id\n    }\n    pointsCount\n    pointGiven\n  }\n}\n\nfragment SubmitDialog_data on Query {\n  me {\n    id\n  }\n}\n\nfragment LayoutToolbar_me on User {\n  id\n  displayName\n  photoURL\n}\n\nfragment AutoUpdater_user on User {\n  id\n  timeZone\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6347a2fff461802e659e9476494c1ff9';
module.exports = node;
