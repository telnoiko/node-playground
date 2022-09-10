const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 7, 11])
        // second call won't work!
        reject('Things went wrong!')
    }, 2000)
})

doWorkPromise
    .then(result => console.log('Success!', result))
    .catch(error => console.log('Error!', error))

//                         Fulfilled
//                       /
//  Promise - Pending -> 
//                       \
//                         Rejected

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then(sum => {
    console.log(sum)
    return add(sum, 5)
}).then(sum2 => {
    console.log(sum2)
}).catch(error => console.log(error))