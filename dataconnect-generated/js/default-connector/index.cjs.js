const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Assessment-Sports_Duniya',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

