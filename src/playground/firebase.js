// import * as firebase from 'firebase';

import firebase from 'firebase/app'; 
import 'firebase/database';
import 'firebase/storage';

const config = {
  //add api stuff here 
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot)=> {
    console.log(snapshot.key, snapshot.val());
});
database.ref('expenses').on('child_changed', (snapshot)=> {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot)=> {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//        const expenses = [];
//        snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//        });
//        console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//     expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//     });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'rent',
//     amount: '35500',
//     note: 'omg',
//     createdAt:13208112312
// });

database.ref('expenses').push({
    description: 'coffee',
    amount: '355',
    note: 'good',
    createdAt:1231412331
});


// database.ref('expenses').push({
//     description: 'food',
//     amount: '3500',
//     note: 'omg',
//     createdAt:12940921849
// });



// database.ref('notes/-LMsSlld7Om1RWM4Weti').update({
//     body: 'did it change?'
// })

// database.ref('notes/-LMsSlld7Om1RWM4Weti').remove();

// database.ref('notes').push({
//     title: 'second note',
//     body: 'this is my note'
// })


// const firebaseNotes = {
//     notes: {
//         dasnd: {
//             title: 'first note',
//             body: 'this is my note'
//         },
//         asdjp: {
//             title: 'second note',
//             body: 'this is my note'
//         }
//     }
// }

// const notes = [{
//     id:'12',
//     title: 'first note',
//     body: 'this is my note'
// }, {
//     id:'123122',
//     title: 'second note',
//     body: 'this is my note'
// }];

// database.ref('notes').set(notes);


// database.ref().on('value', (snapshot) => {
//      const val = snapshot.val();
//      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error', e);
// });

// setTimeout(()=> {
//     database.ref('age').set(28);
// }, 3500 );

// setTimeout(()=> {
//     database.ref().off('value',onValueChange);
// }, 7000 );

// setTimeout(()=> {
//     database.ref('age').set(40);
// }, 8000 );

// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=> {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log('error:',err);
//     });

// database.ref().set({
//     name: 'Joao Viana',
//     age: 23,
//     stressLevel: 11,
//     job: {
//         title: 'front-end dev',
//         company: 'elewa'
//     },
//     location: {
//         city: 'London',
//         country: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((err)=>{
//     console.log('error:',err);
// })

// // database.ref('isSingle').set(null);

// database.ref().update({
//     'job/company': 'amazon',
//     stressLevel: 15,
//     'location/city': 'Sussex' 
// });

// database.ref(isSingle)
// .remove()
// .then(()=> {
//     console.log('data was removed');
// }).catch((e)=>{
//     console.log('error',e);
// });