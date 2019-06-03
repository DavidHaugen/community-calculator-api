const xss = require('xss');

const LogsService = {
  getLogs(db) {
    return db
      .from('logs')
      .select('*');
    // .limit(10);
  },
  postLog(db, result){
    return db
      .insert({result})
      .into('logs')
      .returning('*');
  },
  serializeLogs(logs) {
    return logs.map((log) => this.serializeLog(log));
  },
  serializelog(log) {
    return {
      id: log.id,
      result: xss(log.name),
    };
  }
};

module.exports = LogsService;