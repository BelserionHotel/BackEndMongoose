const router = require("express").Router();

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addOne);
router.get("/:id", require("./controller").getById);
router.get("/u/:id", require("./controller").ugetById);

router.delete("/:id", require("./controller").deleteOne);
router.delete("/", require("./controller").deleteAllReservationRooms);
router.patch("/:id", require("./controller").updateOne);
router.put("/checkout/:id", require("./controller").checkout);

module.exports = router;
