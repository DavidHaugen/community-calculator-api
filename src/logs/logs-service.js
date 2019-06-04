const xss = require('xss');

const LogsService = {
  getLogs(db) {
    return db
      .from('log')
      .select('*')
      .limit(10)
      .orderBy('id', 'desc');
  },
  insertLog(db, result){
    return db
      .insert({result})
      .into('log')
      .returning('*')
      .then((result) => result);  
  },
  serializeLogs(logs) {
    return logs.map((log) => this.serializeLog(log));
  },
  serializeLog(log) {
    return {
      id: log.id,
      result: xss(log.result),
    };
  }
};

module.exports = LogsService;