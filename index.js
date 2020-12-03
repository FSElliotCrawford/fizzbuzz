function run(value) {
    if((value % 3 === 0) && (value % 5 === 0)) {
        return "fizzbuzz";
    }

    if(value % 3 === 0) {
        return "fizz";
    }

    if(value % 5 === 0) {
        return "buzz";
    }
    return value;
}


function init() {
    for (let index = 1; index <= 100; index++) {
        console.log(run(index));
    }
}

init();
