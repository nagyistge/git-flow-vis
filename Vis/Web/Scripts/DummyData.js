var Dummy = {

    // basic version 3 features, 2 releases
    Data: [
        {},
        {},
        /* a simple set of commits including one finishe feature, one release, one hotfix (unfinished) */
{
    branches: { "size": 6, "limit": 100, "isLastPage": true, "values": [{ "id": "refs/heads/hotfix/h1", "displayId": "hotfix/h1", "latestChangeset": "871a7a651cf22f7390d547a8a28782530d191367", "isDefault": false }, { "id": "refs/heads/release/r2", "displayId": "release/r2", "latestChangeset": "0aabee3cc5a668e1dffd3c464b18890caf98e6e9", "isDefault": false }, { "id": "refs/heads/feature/f3", "displayId": "feature/f3", "latestChangeset": "fcda73616bf16fc0d4560c628ed3876ccc9762f5", "isDefault": false }, { "id": "refs/heads/develop", "displayId": "develop", "latestChangeset": "035b319c4dfa9f6baa8580edcaf9f40557bbfd80", "isDefault": false }, { "id": "refs/heads/master", "displayId": "master", "latestChangeset": "12a048fd7a67e4a1690e67cb242e589d7a2594f4", "isDefault": true }, { "id": "refs/heads/feature/F1", "displayId": "feature/F1", "latestChangeset": "ea08c2c5f4fa9778baec512b28603ff763ef9022", "isDefault": false }], "start": 0 }
,
    tags: { "size": 1, "limit": 100, "isLastPage": true, "values": [{ "id": "refs/tags/r1", "displayId": "r1", "latestChangeset": "12a048fd7a67e4a1690e67cb242e589d7a2594f4", "hash": "b9e9d72be9e1e04adbc2b3635aadee3b3714c4d2" }], "start": 0 }
,
    commits: [
        { "values": [{ "id": "871a7a651cf22f7390d547a8a28782530d191367", "displayId": "871a7a6", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405528298000, "message": "no message", "parents": [{ "id": "33e12f603fec10963eb1da11fdd0e0457f9923f0", "displayId": "33e12f6" }] }, { "id": "33e12f603fec10963eb1da11fdd0e0457f9923f0", "displayId": "33e12f6", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527791000, "message": "no message", "parents": [{ "id": "12a048fd7a67e4a1690e67cb242e589d7a2594f4", "displayId": "12a048f" }] }, { "id": "12a048fd7a67e4a1690e67cb242e589d7a2594f4", "displayId": "12a048f", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527578000, "message": "Merge branch 'release/r1'", "parents": [{ "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27" }, { "id": "39d50e3d5293fcecb3f83043af1372f2d9861f6d", "displayId": "39d50e3" }] }, { "id": "39d50e3d5293fcecb3f83043af1372f2d9861f6d", "displayId": "39d50e3", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527561000, "message": "fix", "parents": [{ "id": "55aa691047c7e235c7d27d2922fd78b6d384ea25", "displayId": "55aa691" }] }, { "id": "55aa691047c7e235c7d27d2922fd78b6d384ea25", "displayId": "55aa691", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527507000, "message": "Merge branch 'feature/F2' into develop", "parents": [{ "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d" }, { "id": "e0eeec7e3c999ad09a6a86ed292b89327791755e", "displayId": "e0eeec7" }] }, { "id": "e0eeec7e3c999ad09a6a86ed292b89327791755e", "displayId": "e0eeec7", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527483000, "message": "extra empty commit", "parents": [{ "id": "c9548d2e3d8a061187aed23023d0419f52d87c83", "displayId": "c9548d2" }] }, { "id": "c9548d2e3d8a061187aed23023d0419f52d87c83", "displayId": "c9548d2", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527413000, "message": "f3", "parents": [{ "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d" }] }, { "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527316000, "message": "no message", "parents": [{ "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27" }] }, { "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527279000, "message": "2", "parents": [{ "id": "0a971a835aa695970494c16aa9a96bcdf45f0e3c", "displayId": "0a971a8" }] }, { "id": "0a971a835aa695970494c16aa9a96bcdf45f0e3c", "displayId": "0a971a8", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527258000, "message": "initial commit", "parents": [] }], "size": 10, "isLastPage": true, "start": 0, "limit": 100, "nextPageStart": null }
    , { "values": [{ "id": "fcda73616bf16fc0d4560c628ed3876ccc9762f5", "displayId": "fcda736", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527730000, "message": "Merge branch 'develop' into feature/f3\n\nConflicts:\n\ttest.txt", "parents": [{ "id": "9271572e68256f05a747014e119af1779f37e8e5", "displayId": "9271572" }, { "id": "035b319c4dfa9f6baa8580edcaf9f40557bbfd80", "displayId": "035b319" }] }, { "id": "035b319c4dfa9f6baa8580edcaf9f40557bbfd80", "displayId": "035b319", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527668000, "message": "commit directly on develop", "parents": [{ "id": "4b9d6fcfe8cbac8d3ad5334e13f115f60ab13b40", "displayId": "4b9d6fc" }] }, { "id": "9271572e68256f05a747014e119af1779f37e8e5", "displayId": "9271572", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527627000, "message": "no message", "parents": [{ "id": "4b9d6fcfe8cbac8d3ad5334e13f115f60ab13b40", "displayId": "4b9d6fc" }] }, { "id": "4b9d6fcfe8cbac8d3ad5334e13f115f60ab13b40", "displayId": "4b9d6fc", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527578000, "message": "Merge branch 'release/r1' into develop", "parents": [{ "id": "55aa691047c7e235c7d27d2922fd78b6d384ea25", "displayId": "55aa691" }, { "id": "39d50e3d5293fcecb3f83043af1372f2d9861f6d", "displayId": "39d50e3" }] }, { "id": "39d50e3d5293fcecb3f83043af1372f2d9861f6d", "displayId": "39d50e3", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527561000, "message": "fix", "parents": [{ "id": "55aa691047c7e235c7d27d2922fd78b6d384ea25", "displayId": "55aa691" }] }, { "id": "55aa691047c7e235c7d27d2922fd78b6d384ea25", "displayId": "55aa691", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527507000, "message": "Merge branch 'feature/F2' into develop", "parents": [{ "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d" }, { "id": "e0eeec7e3c999ad09a6a86ed292b89327791755e", "displayId": "e0eeec7" }] }, { "id": "e0eeec7e3c999ad09a6a86ed292b89327791755e", "displayId": "e0eeec7", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527483000, "message": "extra empty commit", "parents": [{ "id": "c9548d2e3d8a061187aed23023d0419f52d87c83", "displayId": "c9548d2" }] }, { "id": "c9548d2e3d8a061187aed23023d0419f52d87c83", "displayId": "c9548d2", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527413000, "message": "f3", "parents": [{ "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d" }] }, { "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527316000, "message": "no message", "parents": [{ "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27" }] }, { "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527279000, "message": "2", "parents": [{ "id": "0a971a835aa695970494c16aa9a96bcdf45f0e3c", "displayId": "0a971a8" }] }, { "id": "0a971a835aa695970494c16aa9a96bcdf45f0e3c", "displayId": "0a971a8", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527258000, "message": "initial commit", "parents": [] }], "size": 11, "isLastPage": true, "start": 0, "limit": 100, "nextPageStart": null }
    , { "values": [{ "id": "ea08c2c5f4fa9778baec512b28603ff763ef9022", "displayId": "ea08c2c", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527358000, "message": "3", "parents": [{ "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d" }] }, { "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527316000, "message": "no message", "parents": [{ "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27" }] }, { "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527279000, "message": "2", "parents": [{ "id": "0a971a835aa695970494c16aa9a96bcdf45f0e3c", "displayId": "0a971a8" }] }, { "id": "0a971a835aa695970494c16aa9a96bcdf45f0e3c", "displayId": "0a971a8", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527258000, "message": "initial commit", "parents": [] }], "size": 4, "isLastPage": true, "start": 0, "limit": 100, "nextPageStart": null }
    , { "values": [{ "id": "0aabee3cc5a668e1dffd3c464b18890caf98e6e9", "displayId": "0aabee3", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405528185000, "message": "r2", "parents": [{ "id": "035b319c4dfa9f6baa8580edcaf9f40557bbfd80", "displayId": "035b319" }] }, { "id": "035b319c4dfa9f6baa8580edcaf9f40557bbfd80", "displayId": "035b319", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527668000, "message": "commit directly on develop", "parents": [{ "id": "4b9d6fcfe8cbac8d3ad5334e13f115f60ab13b40", "displayId": "4b9d6fc" }] }, { "id": "4b9d6fcfe8cbac8d3ad5334e13f115f60ab13b40", "displayId": "4b9d6fc", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527578000, "message": "Merge branch 'release/r1' into develop", "parents": [{ "id": "55aa691047c7e235c7d27d2922fd78b6d384ea25", "displayId": "55aa691" }, { "id": "39d50e3d5293fcecb3f83043af1372f2d9861f6d", "displayId": "39d50e3" }] }, { "id": "39d50e3d5293fcecb3f83043af1372f2d9861f6d", "displayId": "39d50e3", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527561000, "message": "fix", "parents": [{ "id": "55aa691047c7e235c7d27d2922fd78b6d384ea25", "displayId": "55aa691" }] }, { "id": "55aa691047c7e235c7d27d2922fd78b6d384ea25", "displayId": "55aa691", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527507000, "message": "Merge branch 'feature/F2' into develop", "parents": [{ "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d" }, { "id": "e0eeec7e3c999ad09a6a86ed292b89327791755e", "displayId": "e0eeec7" }] }, { "id": "e0eeec7e3c999ad09a6a86ed292b89327791755e", "displayId": "e0eeec7", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527483000, "message": "extra empty commit", "parents": [{ "id": "c9548d2e3d8a061187aed23023d0419f52d87c83", "displayId": "c9548d2" }] }, { "id": "c9548d2e3d8a061187aed23023d0419f52d87c83", "displayId": "c9548d2", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527413000, "message": "f3", "parents": [{ "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d" }] }, { "id": "24b067d7222531023d0cb50d73a1855198c92e67", "displayId": "24b067d", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527316000, "message": "no message", "parents": [{ "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27" }] }, { "id": "f615f275f2d9082bbc718d01cbbb1f68c2c5a180", "displayId": "f615f27", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527279000, "message": "2", "parents": [{ "id": "0a971a835aa695970494c16aa9a96bcdf45f0e3c", "displayId": "0a971a8" }] }, { "id": "0a971a835aa695970494c16aa9a96bcdf45f0e3c", "displayId": "0a971a8", "author": { "name": "teun", "emailAddress": "teun@funda.nl", "id": 301, "displayName": "Teun Duynstee", "active": true, "slug": "teun", "type": "NORMAL", "link": { "url": "/users/teun", "rel": "self" }, "links": { "self": [{ "href": "https://git.funda.nl/users/teun" }] } }, "authorTimestamp": 1405527258000, "message": "initial commit", "parents": [] }], "size": 10, "isLastPage": true, "start": 0, "limit": 100, "nextPageStart": null }
	]
}
    ]
};
