const promise = new Promise((resolve,reject) => {
    setTimeout(()=> {

        // resolve('this is my resolved data');
        reject('something went wrong');
    
    }, 2500);
    
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((err)=> {
    console.log('error: ', err);
});

console.log('after');
