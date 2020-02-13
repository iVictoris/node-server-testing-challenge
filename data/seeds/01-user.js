exports.seed = async function(knex) {
  await knex("users").insert([
    {
      id: 1,
      first: "blah",
      last: "bloh",
      email: "blah@outlook.com",
      username: "iblahis",
      password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
    },
    {
      id: 2,
      first: "blah",
      last: "bloh",
      email: "blah.social@outlook.com",
      username: "iblah",
      password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
    },
    {
      id: 3,
      first: "blah",
      last: "bloh",
      email: "blah.game@outlook.com",
      username: "iviktor",
      password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
    },
    {
      id: 4,
      first: "blah",
      last: "bloh",
      email: "blah.subscription@outlook.com",
      username: "iviktoris",
      password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
    }
  ]);
};
