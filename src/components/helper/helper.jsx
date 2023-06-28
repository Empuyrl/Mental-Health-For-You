
function addScore(array) {
    console.log(array);
    let sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    console.log('sum', sum);
    return sum
}

const allFunctions = {addScore};

export default allFunctions;

