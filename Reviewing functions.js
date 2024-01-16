
const calcAverage = function (a, b, c) {
    return ((a + b + c) / 3);
}

const scoreDolphins = function (score1, score2, score3) {
    const score = calcAverage(a, b, c);
    console.log(score);
    return score;
}

const scoreKoalas = function (score4, score5, score6) {
    const score = calcAverage(a, b, c);
    console.log(score);
    return score;
}

console.log(scoreDopphins(44, 23, 71));

console.log(scoreKoalas(65, 54, 49));

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;

    }


    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/