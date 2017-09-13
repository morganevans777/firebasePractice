var firebase = require('firebase');

exports.init = function(){
    var config = {
        apiKey: 'AIzaSyDuuDAkh1JCQhOX7xcJxW2gdN9wnrIX5pE',
        authDomain: 'my-app-f1ddd.firebaseapp.com',
        databaseURL: 'https://my-app-f1ddd.firebaseio.com/',
        storageBucket: 'my-app-f1ddd.appspot.com',
    };
    firebase.initializeApp(config);
    console.log('firebase initialized')
}

exports.fetchData = function(callback) {
   return firebase.database().ref('/products').once('value').then(function(snapshot) {
        if(snapshot){
            callback(snapshot.val())
        } else {
            callback('error')
        }
      });
}