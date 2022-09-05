const greeter = (name = 'user', age) => {
    console.log("Hello " + name);
}

greeter("K")

// user as default will be used instead of 'undefined'
greeter() 