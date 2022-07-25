import express from 'express';
import _ from 'lodash';
import cors from 'cors';
import { QueryPayload } from 'simple-shared-data';

const app = express();
app.use(cors());
const port = 3001;

app.get('/', (_req, res) => {
  const responseData: QueryPayload = {
    payload: _.snakeCase('Server data returned successfully'),
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
