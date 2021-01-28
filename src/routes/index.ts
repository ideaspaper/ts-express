import * as express from 'express';
const router: express.Router = express.Router();

// Include and use another router
// import routerVariable = require('<router-file-path>');
// router.use('<end-point>', routerVariable);

router.get('/', (req, res) => {
  res.render('home');
});

export = router;
