const mongoose = require("mongoose");
/**
 * Set to Node.js native promises
 * Per https://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require("./env/environment");
const password = encodeURIComponent(env.key);
// eslint-disable-next-line max-len
const mongoUri = `mongodb://${env.accountName}:${password}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;

function connect() {
  mongoose.set("debug", true);
  return mongoose.connect(mongoUri);
}

module.exports = {
  connect,
  mongoose,
};
