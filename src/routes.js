const Router = require("express").Router
const router = Router();
const itemController = require("./controller/itemController")

router.get("/item", itemController.readItem);
router.get("/item/:id", itemController.readItemById);
router.post("/item", itemController.createItem);
router.patch("/item/:id", itemController.updateItem);
router.delete("/item/:id", itemController.deleteItem);



router.get("/", (req, res) => {
    console.log("funciona");
    res.send("funcionaaaaa");
})

module.exports = router;