exports.seed = async function(knex) {
  await knex("users").insert([
    {
      id: 1,
      first: "Victor",
      last: "Tran",
      email: "victor.n.tran@outlook.com",
      username: "ivictoris",
      password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
    },
    {
      id: 2,
      first: "Victor",
      last: "Tran",
      email: "victor.n.tran.social@outlook.com",
      username: "ivictor",
      password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
    },
    {
      id: 3,
      first: "Victor",
      last: "Tran",
      email: "victor.n.tran.game@outlook.com",
      username: "iviktor",
      password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
    },
    {
      id: 4,
      first: "Victor",
      last: "Tran",
      email: "victor.n.tran.subscription@outlook.com",
      username: "iviktoris",
      password: "$2a$13$zsZrin2LIC0UdAuK.gIG4e2B/jkyl9nFC8./d.YO5OAMleUtSgY3y"
    }
  ]);
};
