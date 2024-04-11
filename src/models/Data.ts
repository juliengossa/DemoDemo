const rawBirthRateRate = [
    3.2,
    3.2,
    3.2,
    3.1,
    3.1,
    3.1,
    3.1,
    2.9,
    2.9,
    2.8,
    2.8,
    2.7,
    2.7,
    2.6,
    2.6,
    2.5,
    2.5,
    2.3,
    2.3,
    2.2,

    2.3,
    2.1,
    2.0,
    1.2,
    2.1,
    1.9,
    1.8,
    1.5,
    1.4,
    1.6,
    2.1,
    1.9,
    1.8,
    1.8,
    1.7,
    1.4,
    1.5,
    1.4,
    1.3,
    1.3,

    1.3,
    1.3,
    1.2,
    1.2,
    1.1,
    1.0
]

const rawDeathRate = [
    2.8,
    2.8,
    2.4,
    2.5,
    2.3,
    2.3,
    2.4,
    2.4,
    2.3,
    2.2,
    2.4,
    2.4,
    2.3,
    2.3,
    2.5,
    2.3,
    2.2,
    2.2,
    2.2,
    2.1,

    2.1,
    2.0,
    1.8,
    1.8,
    1.7,
    1.7,
    1.6,
    1.6,
    1.8,
    1.6,
    1.3,
    1.2,
    1.1,
    1.1,
    1.1,
    1.0,
    1.0,
    1.0,
    0.9,
    0.9,

    0.9,
    0.9,
    0.8,
    0.9,
    1.0,
    0.9
]

export const birthRate: number[] = [];
let year = 1800;
for(let i = 0; i < rawBirthRateRate.length; i++) {
    if(i + 1 >= rawBirthRateRate.length) {
        birthRate[year] = rawBirthRateRate[i];
        break;
    }
    for(let j = 0; j < 5; j++){
        birthRate[year] = rawBirthRateRate[i] + (rawBirthRateRate[i + 1] - rawBirthRateRate[i]) * j / 5;
        year++;
    }
}

export const deathRate: number[] = [];
year = 1800;
for(let i = 0; i < rawDeathRate.length; i++) {
    if(i + 1 >= rawDeathRate.length) {
        deathRate[year] = rawDeathRate[i];
        break;
    }
    for(let j = 0; j < 5; j++){
        deathRate[year] = rawDeathRate[i] + (rawDeathRate[i + 1] - rawDeathRate[i]) * j / 5;
        year++;
    }
}
