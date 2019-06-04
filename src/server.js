const knex = require('knex');
const {server, app} = require('./app');
const { PORT, DB_URL } = require ('./config');
const ioService = require('./ioService');

const db = knex({
  client: 'pg',
  connection: DB_URL
});

app.set('db', db);
ioService.setApp(app);

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});