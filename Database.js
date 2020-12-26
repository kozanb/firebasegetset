import firebase from 'firebase';

const DatabaseConfig = {
  databaseURL: 'https://FIREBASE-DATABASE-URL',
  projectId: 'FIREBASE-PROJECT-ID',
};

const Database = {
  initialize: function() {
    if (!firebase.apps.length) {
      firebase.initializeApp(DatabaseConfig);
    }
  },
  setData: function(tableName, data, id) {
    return firebase
      .database()
      .ref((tableName || 'DefaultTableName/') + id)
      .set(data)
      .then(() => {
        return true;
      })
      .catch(error => {
        console.log('error ', error);
        return false;
      });
  },
  getData: function(tableName, id) {
    let returnData = {};
    return firebase
      .database()
      .ref((tableName || 'DefaultTableName/') + id)
      .once('value', function(data) {
        returnData = data.val();
      })
      .then(() => {
        return returnData;
      });
  },
};

module.exports = Database;
