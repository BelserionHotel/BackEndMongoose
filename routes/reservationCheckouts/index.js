const router = require("express").Router();

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addOne);
router.get("/:id", require("./controller").getById);
router.delete("/:id", require("./controller").deleteOne);
router.delete("/", require("./controller").deleteAllCheckout);
router.patch("/:id", require("./controller").updateOne);

module.exports = router;
