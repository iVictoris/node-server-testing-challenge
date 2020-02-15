const { Router } = require("express");
const router = Router();

const { find, add, update, findById, remove } = require("../data/models/user");

router
  .route("/")
  .get(async (req, res) => {
    /* GET  */
    const users = await find();
    res.status(200).json(users);
  })
  .post(async (req, res) => {
    /* POST  */
    const userFromBody = req.body;
    const user = await add(userFromBody);
    res.status(201).json(user);
  });

router
  .route("/:id")
  // .get(async ({ params: { id } }, res) => {
  //   /* GET  /id*/

  // })
  .delete(async ({ params: { id } }, res) => {
    /* DELETE  /id */
    await remove(id);
    res.status(200).json({ message: "deleted" });
  })
  .put(async ({ params: { id }, body }, res) => {
    /* UPDATE /id */
    const changes = body;
    await update(id, changes);
    const user = await findById(id);
    res.status(200).json(user);
  });

module.exports.router = router;
