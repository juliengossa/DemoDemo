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

const rawUnqualifiedNeed = [
    95,
    95,
    85,
    85,
    85,
    85,
    75,
    75,
    75,
    75,
    75,
    75,
    75,
    65,
    65,
    65,
    65,
    55,
    55,
    55,

    55,
    55,
    55,
    55,
    50,
    50,
    45,
    35,
    35,
    25,
    25,
    25,
    20,
    20,
    15,
    15,
    15,
    10,
    10,
    10,

    10,
    20,
    20,
    20,
    20,
    20
]

const rawLowlifiedNeed = [
    0,
    0,
    8,
    8,
    8,
    10,
    20,
    15,
    15,
    17,
    17,
    17,
    20,
    25,
    25,
    25,
    25,
    30,
    30,
    30,

    30,
    32,
    35,
    35,
    38,
    38,
    40,
    40,
    45,
    45,
    45,
    47,
    47,
    47,
    50,
    50,
    50,
    50,
    52,
    52,

    52,
    52,
    52,
    52,
    52,
    52
]

const rawQualifiedNeed = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    5,
    5,
    5,

    5,
    5,
    5,
    5,
    7,
    7,
    7,
    10,
    12,
    15,
    15,
    15,
    15,
    17,
    17,
    17,
    20,
    20,
    20,
    20,

    20,
    15,
    15,
    15,
    15,
    15
]

const rawHighQualifiedNeed = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,

    0,
    0,
    0,
    0,
    0,
    0,
    0,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    7,
    7,
    7,
    8,
    9,
    10,

    10,
    10,
    10,
    10,
    10,
    10
]

const rawPopulation = [
    29,
    29,
    30,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    36,
    36,
    37,
    37,
    37,
    38,
    39,
    39,
    40,
    40,

    40,
    41,
    41,
    40,
    38,
    40,
    41,
    41,
    40,
    38,
    41,
    43,
    45,
    48,
    50,
    52,
    53,
    55,
    56,
    57,

    58,
    60,
    62,
    64,
    65,
    65
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


export const UnqualifiedNeed: number[] = [];
year = 1800;
for(let i = 0; i < rawUnqualifiedNeed.length; i++) {
    if(i + 1 >= rawUnqualifiedNeed.length) {
        UnqualifiedNeed[year] = rawUnqualifiedNeed[i];
        break;
    }
    for(let j = 0; j < 5; j++){
        UnqualifiedNeed[year] = rawUnqualifiedNeed[i] + (rawUnqualifiedNeed[i + 1] - rawUnqualifiedNeed[i]) * j / 5;
        year++;
    }
}

export const LowlifiedNeed: number[] = [];
year = 1800;
for(let i = 0; i < rawLowlifiedNeed.length; i++) {
    if(i + 1 >= rawLowlifiedNeed.length) {
        LowlifiedNeed[year] = rawLowlifiedNeed[i];
        break;
    }
    for(let j = 0; j < 5; j++){
        LowlifiedNeed[year] = rawLowlifiedNeed[i] + (rawLowlifiedNeed[i + 1] - rawLowlifiedNeed[i]) * j / 5;
        year++;
    }
}

export const QualifiedNeed: number[] = [];
year = 1800;
for(let i = 0; i < rawQualifiedNeed.length; i++) {
    if(i + 1 >= rawQualifiedNeed.length) {
        QualifiedNeed[year] = rawQualifiedNeed[i];
        break;
    }
    for(let j = 0; j < 5; j++){
        QualifiedNeed[year] = rawQualifiedNeed[i] + (rawQualifiedNeed[i + 1] - rawQualifiedNeed[i]) * j / 5;
        year++;
    }
}

export const HighQualifiedNeed: number[] = [];
year = 1800;
for(let i = 0; i < rawHighQualifiedNeed.length; i++) {
    if(i + 1 >= rawHighQualifiedNeed.length) {
        HighQualifiedNeed[year] = rawHighQualifiedNeed[i];
        break;
    }
    for(let j = 0; j < 5; j++){
        HighQualifiedNeed[year] = rawHighQualifiedNeed[i] + (rawHighQualifiedNeed[i + 1] - rawHighQualifiedNeed[i]) * j / 5;
        year++;
    }
}

export const totalPopulation: number[] = [];
year = 1800;
for(let i = 0; i < rawPopulation.length; i++) {
    if(i + 1 >= rawPopulation.length) {
        totalPopulation[year] = rawPopulation[i];
        break;
    }
    for(let j = 0; j < 5; j++){
        totalPopulation[year] = rawPopulation[i] + (rawPopulation[i + 1] - rawPopulation[i]) * j / 5;
        year++;
    }
}

