migrate((db) => {
  const collection = new Collection({
    "id": "uvq4jh6kromnp6u",
    "created": "2022-12-10 10:54:13.492Z",
    "updated": "2022-12-10 10:54:13.492Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mwgrbddu",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uvq4jh6kromnp6u");

  return dao.deleteCollection(collection);
})
