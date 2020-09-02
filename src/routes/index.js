const { Router } = require("express");
const router = Router();

router.get("/", (req, res) =>
  res.json({
    messagge: "Hello World. API Rest funcionando!",
  })
);

router.put("/api/sps/helloworld/v1/:name", (req, res) =>
  res.json({
    messagge: `hello ${req.params.name}. Bienvenido a mi API`,
  })
);

router.get("/api/sps/helloworld/v1", (req, res) => res.json());

module.exports = router;
