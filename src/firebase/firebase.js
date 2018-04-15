import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// database.ref().on('value',(snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref().update({
//     name: 'Andrew',
//     job: {
//         title: 'Software developer',
//         company: 'Amazon'
//     }
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title}`);
// })
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data',e);
//     });

// database.ref().set({
//     name: 'Andrew',
//     age: 26,
//     isSingle: true,
//     location: {
//       city: 'Kyiv',
//       country: 'Ukraine'  
//     }
// }).then(() => {
//  console.log('Data is saved');
// }).catch((e) => {
//     console.log('This is failed.', e);
// });

// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('Things didnt for the second error', e);
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch((e) => {
//         console.log('Did not remove data', e);
//     })