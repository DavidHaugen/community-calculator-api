const express = require ('express');
const logsRouter = express.Router();
const jsonBodyParser = express.json();
const LogsService = require('./logs-service');

logsRouter
  .route('/')
  .get((req, res, next) => {
    return LogsService.getLogs(req.app.get('db'))
      .then(logs => {
        res.status(200);
        res.json(LogsService.serializeLogs(logs));
      })
      .catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { result } = req.body;
    return LogsService.insertLog(req.app.get('db'), result)
      .then(log => {
        res.status(201);
        res.json(LogsService.serializeLog(log));
      })
      .catch(next);
  });

module.exports = logsRouter;
