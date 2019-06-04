const logsService = require('./logs/logs-service');
let io;
let app;

const ioService = {
  setUpIo(ioInstance) {
    io = ioInstance;

    io.on('connection', function(socket) {
      const db = app.get('db');
      // socket.emit('logs', logsService.getLogs());
      socket.on('new_calculation', function(calculation) {
        logsService.insertLog(db, calculation);
        io.sockets.emit('new_calculation_blast', calculation);
      });
      socket.on('test', function(message) {
        // logsService.insertlog
        io.sockets.emit('test_reply', message);
      });
    });
  },

  setApp(appInstance) {
    app = appInstance;
  }
};

module.exports = ioService;
