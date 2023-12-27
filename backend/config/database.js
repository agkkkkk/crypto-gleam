const mongoose = require("mongoose");

class Database {
  constructor(uri, options) {
    this.uri = uri;
    this.options = options;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log(`Connected to ${mongoose.connection.db.databaseName}`);
    } catch (error) {
      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(`Disconnected from ${mongoose.connection.db.databaseName}`);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Database;
