let fs = require('fs');
const fake = require("../getFake.js");

function router(app, express) {
    app.set('json spaces', 2);

   

    app.use("/", express.static("./public", {
        fallthrough: true
    }));
    app.get("/", (req, res) => {
        fs.createReadStream("../public/index.html").pipe(res);
    });


    app.get("/user", (req, res) => {
        let ob = fake.create(1, "name", "email", "phone", "website");
        res.json(ob);
    });

    app.get("/user/:num", (req, res) => {
        let ob = fake.create(req.params.num, "name", "email", "phone", "website");
        res.json(ob);
    });

    app.get("/([a-z 0-9])+", (req, res) => {
fs.createReadStream(__dirname+"/404.html").pipe(res);
    });

}

module.exports = router;