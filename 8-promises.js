const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 7, 11])
        // second call won't work!
        reject('Things went wrong!')
    }, 2000)
})

doWorkPromise.then(result => {
    console.log('Success!', result)
}).catch(error => {
    console.log('Error!', error)
})

//                         Fulfilled
//                       /
//  Promise - Pending -> 
//                       \
//                         Rejected
