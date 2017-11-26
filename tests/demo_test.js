import assert from 'assert';
import firebase from './../app/FirebaseUtils/FirebaseInitializer.jsx';

describe('add', function() {
  it('adds', function() {
    assert.equal(1 + 1, 2);
  });
});

describe('Firebase Utils', function() {
  it('import firebase utils', function() {
    let itemsRef = firebase.database().ref('items');
  });
  it('insert data', function() {
    let currentdate = new Date();
    let itemsRef = firebase.database().ref('tests');
    const item = {
      date: currentdate.getFullYear()
    }
    itemsRef.push(item);
  });
});
