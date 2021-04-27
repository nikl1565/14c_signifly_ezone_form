const database = {
  apiKey: "6087fc3928bf9b609975a78a",
  url: "https://ezoneprofile-6264.restdb.io/rest/userdata",
};

export const settings = {
  database: {
    apiKey: database.apiKey,
    url: database.url,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": database.apiKey,
      "cache-control": "no-cache",
    },
  },
};
