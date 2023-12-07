const adminDatabase = db.getSiblingDB("admin");

adminDatabase.createUser({
  user: "sshapi_user",

  pwd: "sshapi_password",

  roles: [
    {
      role: "readWrite",

      db: "sshapi_database",
    },
  ],
});

const tsmdb = db.getSiblingDB("sshapi_database");

tsmdb.createCollection("delete_this");
