import * as dotenv from 'dotenv';
dotenv.config();
import * as path from 'path';

import * as express from 'express';
import router = require('./routes/index');

const app: express.Application = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
