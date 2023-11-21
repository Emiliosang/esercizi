function printAsyncName(callback, name) {
    setTimeout(() => {
        callback();

        setTimeout(() => {
            callback(name);
        }, 2000);
    }, 1000);
}

function printMessage(message) {
    if (message) {
      console.log(`Hello ${message}`);
    } else {
      console.log("Hello");
    }
}

printAsyncName(printMessage, "Emilio")