function myPromise(inputVal){



    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            if(inputVal){
                //throw new Error();
                reject();
            }
            else {
                resolve(true);
            }
        }, 1000)
    })
}

myPromise(false).then(a => console.log(a));