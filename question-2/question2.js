const delayedSuccess = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({message: "delayed success!"});
        }, 500);
    });
}

const delayedException = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({error: "delayed exception!"});
        }, 500);
    });
}

delayedSuccess().then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

delayedException().then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});