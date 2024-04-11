import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

import {birthRate, deathRate, totalPopulation} from "./Data.ts";
import {PopulationSlice} from "./PopulationSlice.ts";

export class GameData {
    constructor(){
        this.generateBasePopulation();

        const colors = {
            primaryStudent: "rgb(0, 180, 216)",
            child: "rgb(100,200,100)",
            secondaryStudent: "rgb(0, 119, 182)",
            highSchoolStudent: "rgb(3, 4, 94)",
            workStudyStudent: "rgb(100,100,200)",
            unqualifiedWorker: "rgb(255, 136, 0)",
            lowQualifiedWorker: "rgb(255, 162, 0)",
            qualifiedWorker: "rgb(255, 183, 0)",
            highQualifiedWorker: "rgb(255, 208, 0)",
            retired: "rgb(100,100,100)"
        }

        this.popChart = {
            type: 'bar',
            data: {
                labels: this.population.map(function (_, i) {return i;}),
                datasets: [
                    {
                        data: this.population.map(function (d) {return d.primaryStudent;}),
                        label: "Primary students",
                        borderColor: colors.primaryStudent,
                        backgroundColor: colors.primaryStudent,
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.child;}),
                        label: "Children",
                        borderColor: colors.child,
                        backgroundColor: colors.child,
                        borderWidth: 2,
                    },
                    {
                        data: this.population.map(function (d) {return d.secondaryStudent;}),
                        label: "Secondary students",
                        borderColor: colors.secondaryStudent,
                        backgroundColor: colors.secondaryStudent,
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.highSchoolStudent;}),
                        label: "High school students",
                        borderColor: colors.highSchoolStudent,
                        backgroundColor: colors.highSchoolStudent,
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.workStudyStudent;}),
                        label: "Work study students",
                        borderColor: colors.workStudyStudent,
                        backgroundColor: colors.workStudyStudent,
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.unqualifiedWorker;}),
                        label: "Unqualified worker",
                        borderColor: colors.unqualifiedWorker,
                        backgroundColor: colors.unqualifiedWorker,
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.lowQualifiedWorker;}),
                        label: "Low qualified worker",
                        borderColor: colors.lowQualifiedWorker,
                        backgroundColor: colors.lowQualifiedWorker,
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.qualifiedWorker;}),
                        label: "Qualified worker",
                        borderColor: colors.qualifiedWorker,
                        backgroundColor: colors.qualifiedWorker,
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.highQualifiedWorker;}),
                        label: "High qualified worker",
                        borderColor: colors.highQualifiedWorker,
                        backgroundColor: colors.highQualifiedWorker,
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.retired;}),
                        label: "Retired",
                        borderColor: colors.retired,
                        backgroundColor: colors.retired,
                        borderWidth:2
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true,
                    },
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        fontColor: 'rgb(0, 0, 0)',
                        fontSize: 14
                    }
                },
                title: {
                    display: true,
                    text: 'Mass Game',
                    fontSize: 20,
                    fontColor: 'rgb(0, 0, 0)',
                    padding: 20
                }
            }
        };
        this.statsChart = {
            data: {
                labels: [
                    'Children',
                    'Primary student',
                    'Secondary student',
                    'High school student',
                    'Work school student',
                    'Unqualified worker',
                    'Low qualified worker',
                    'Qualified worker',
                    'High qualified worker',
                    'Retired'
                ],
                datasets: [{
                    data: [0,0,0,0,0],
                    label: "Citoyens",
                    borderColor: "rgb(100,100,100)",
                    backgroundColor: "rgb(100,100,100,0.1)",
                    borderWidth:2
                }]
            },
            options: {
                scales: {
                    x: {
                        stacked: false
                    },
                    y: {
                        beginAtZero: true,
                        stacked: false
                    },
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        fontColor: 'rgb(0, 0, 0)',
                        fontSize: 14
                    }
                },
                title: {
                    display: true,
                    text: 'Mass Game',
                    fontSize: 20,
                    fontColor: 'rgb(0, 0, 0)',
                    padding: 20
                }
            }
        };
        this.yearsReviewChart = {
            type: 'bar',
            data: {
                labels: Array.from({length: 2026 - 1800}, (_, i) => 1800 + i),
                datasets: [
                    {
                        data: [0],
                        label: "Primary students",
                        borderColor: colors.primaryStudent,
                        backgroundColor: colors.primaryStudent,
                        borderWidth:2
                    },
                    {
                        data: [0],
                        label: "Children",
                        borderColor: colors.child,
                        backgroundColor: colors.child,
                        borderWidth: 2,
                    },
                    {
                        data: [0],
                        label: "Secondary students",
                        borderColor: colors.secondaryStudent,
                        backgroundColor: colors.secondaryStudent,
                        borderWidth:2
                    },
                    {
                        data: [0],
                        label: "High school students",
                        borderColor: colors.highSchoolStudent,
                        backgroundColor: colors.highSchoolStudent,
                        borderWidth:2
                    },
                    {
                        data: [0],
                        label: "Work study students",
                        borderColor: colors.workStudyStudent,
                        backgroundColor: colors.workStudyStudent,
                        borderWidth:2
                    },
                    {
                        data: [0],
                        label: "Unqualified worker",
                        borderColor: colors.unqualifiedWorker,
                        backgroundColor: colors.unqualifiedWorker,
                        borderWidth:2
                    },
                    {
                        data: [0],
                        label: "Low qualified worker",
                        borderColor: colors.lowQualifiedWorker,
                        backgroundColor: colors.lowQualifiedWorker,
                        borderWidth:2
                    },
                    {
                        data: [0],
                        label: "Qualified worker",
                        borderColor: colors.qualifiedWorker,
                        backgroundColor: colors.qualifiedWorker,
                        borderWidth:2
                    },
                    {
                        data: [0],
                        label: "High qualified worker",
                        borderColor: colors.highQualifiedWorker,
                        backgroundColor: colors.highQualifiedWorker,
                        borderWidth:2
                    },
                    {
                        data: [0],
                        label: "Retired",
                        borderColor: colors.retired,
                        backgroundColor: colors.retired,
                        borderWidth:2
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true,
                    },
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        fontColor: 'rgb(0, 0, 0)',
                        fontSize: 14
                    }
                },
                title: {
                    display: true,
                    text: 'Years Review',
                    fontSize: 20,
                    fontColor: 'rgb(0, 0, 0)',
                    padding: 20
                }
            }
        };

        this.step();
    }

    public year = 1800;
    private debt = 0;
    private population: PopulationSlice[] = new Array(100);
    public nationBudget: any;
    public educationBudget: any;

    // create a new chart object
    private readonly popChart;

    private readonly statsChart;

    private readonly yearsReviewChart;
    private yearsPopulation: any = {};

    private generateBasePopulation(){
        const currentTotalPop = totalPopulation[this.year] * 1_000_000;
        const targetYear = 80;
        for (let i = 0; i < targetYear; i++){
            this.population[i] = new PopulationSlice(-1);
            this.population[i].child = Math.floor(170000 * (i / Math.sqrt(i)));
        }
        this.population.reverse();
        for (let i = 0; i < targetYear; i++)
            this.population[i] = this.population[i + (100 - targetYear)];
        for(let i = targetYear - 1; i < this.population.length; i++)
            this.population[i] = new PopulationSlice(-1);

        const remainingPop = currentTotalPop - this.population.reduce((a, b) => a + b.child, 0);
        const amountToDistribute = Math.floor(remainingPop / targetYear);
        for (let i = 0; i < targetYear; i++)
            this.population[i].child += amountToDistribute;

        // Change children to unqualified workers
        for(let i = 11; i < this.population.length; i++){
            this.population[i].unqualifiedWorker = this.population[i].child;
            this.population[i].child = 0;
        }
    }

    private updatePopulation(primaryPercentage: number, secondaryPercentage: number, highSchoolPercentage: number) {
        // primaire
        const newPrimaryStudents = Math.floor(Math.min(this.population[2].child, this.population[2].child * primaryPercentage / 100))
        this.population[2].child = this.population[2].child - newPrimaryStudents;
        this.population[2].primaryStudent = newPrimaryStudents;

        const newSecondaryStudents = Math.floor(Math.min(this.population[10].primaryStudent, this.population[10].primaryStudent * secondaryPercentage / 100))
        this.population[10].primaryStudent = this.population[10].primaryStudent - newSecondaryStudents;
        this.population[10].secondaryStudent = newSecondaryStudents;

        const newHighSchoolStudents = Math.floor(Math.min(this.population[18].secondaryStudent, this.population[18].secondaryStudent * highSchoolPercentage / 100))
        this.population[18].secondaryStudent = this.population[18].secondaryStudent - newHighSchoolStudents;
        this.population[18].highSchoolStudent = newHighSchoolStudents;


        // Primary insertion
        this.population[10].primaryInsertion();
        this.population[18].secondaryInsertion();
        this.population[27].highSchoolInsertion();

        // Retirement
        this.population[63].retirePopulation();

        let deathCount = totalPopulation[this.year] * 1_000_000 * deathRate[this.year] / 100;
        for(let i = 99; i >= 0; i--) {
            let currentDeathCount = deathCount * 0.3;
            deathCount -= currentDeathCount - this.population[i].applyDeath(currentDeathCount);
        }

        // Deaths
        for (let i = this.population.length-1; i > 0 ; i--) {
            this.population[i] = this.population[i-1];
        }

        // Births
        const pop0 = totalPopulation[this.year] * 1_000_000 * birthRate[this.year] / 100;
        this.population[0] = new PopulationSlice();
        this.population[0].child = pop0 * 0.88;

        // rounding
        for(let i = 0; i < this.population.length; i++)
            this.population[i].roundPopulation();
    }

    /**
     * Get the global population stats
     */
    private getCurrentPopulationStats() {
        const stats = {
            child : 0,
            primaryStudent : 0,
            secondaryStudent : 0,
            highSchoolStudent : 0,
            unqualifiedWorker : 0,
            workStudyStudent : 0,
            lowQualifiedWorker : 0,
            qualifiedWorker : 0,
            highQualifiedWorker : 0,
            retired : 0
        }
        for (let i = 0; i < this.population.length; i++) {
            stats.child += this.population[i].child;
            stats.primaryStudent += this.population[i].primaryStudent;
            stats.secondaryStudent += this.population[i].secondaryStudent;
            stats.highSchoolStudent += this.population[i].highSchoolStudent;
            stats.workStudyStudent += this.population[i].workStudyStudent;
            stats.unqualifiedWorker += this.population[i].unqualifiedWorker;
            stats.lowQualifiedWorker += this.population[i].lowQualifiedWorker;
            stats.qualifiedWorker += this.population[i].qualifiedWorker;
            stats.highQualifiedWorker += this.population[i].highQualifiedWorker;
            stats.retired += this.population[i].retired;
        }
        return stats;
    }

    /**
     * Generate the new nation budget from current population stats
     * @param stats The current population stats
     */
    private generateNationBudget(stats: any) {
        const budget: any = [
            {
                'name' : 'Children',
                'pop' : stats.child,
                'consumption' : 0.5,
                'production' : 0,
            },
            {
                'name' : 'Primary student',
                'pop' : stats.primaryStudent,
                'consumption' : 0.5,
                'production' : 0
            },
            {
                'name' : 'Secondary student',
                'pop' : stats.secondaryStudent,
                'consumption' : 0.5,
                'production' : 0
            },
            {
                'name' : 'High school student',
                'pop' : stats.highSchoolStudent,
                'consumption' : 0.5,
                'production' : 0
            },
            {
                'name' : 'Work study student',
                'pop' : stats.workStudyStudent,
                'consumption' : 0.5,
                'production' : 0
            },
            {
                'name' : 'Unqualified worker',
                'pop' : stats.unqualifiedWorker,
                'consumption' : 1,
                'production' : 2
            },
            {
                'name' : 'Low qualified worker',
                'pop' : stats.lowQualifiedWorker,
                'consumption' : 1,
                'production' : 3
            },
            {
                'name' : 'Qualified worker',
                'pop' : stats.qualifiedWorker,
                'consumption' : 1,
                'production' : 3
            },{
                'name' : 'High qualified worker',
                'pop' : stats.highQualifiedWorker,
                'consumption' : 1,
                'production' : 3
            },
            {
                'name' : 'Retired',
                'pop' : stats.retired,
                'consumption' : 0.5,
                'production' : 0
            }
        ]

        budget.forEach(function(b: any, _: any) {
            b.pop = Math.round(b.pop);
            b.total_consumption = b.consumption * b.pop;
            b.total_production = b.production * b.pop;
            b.net =  b.total_production - b.total_consumption;
        })

        budget[budget.length] = {
            'name' : 'Total',
            'pop' : budget.reduce((a: any, b: any) => a + b.pop, 0),
            'consumption' : "",
            'production' : "",
            'total_consumption' : budget.reduce((a: any, b: any) => a + b.consumption * b.pop, 0),
            'total_production' : budget.reduce((a: any, b: any) => a + b.production * b.pop, 0),
            'net' : budget.reduce((a: any, b: any) => a + b.net, 0)
        }

        return budget;
    }

    /**
     * Generate the new education budget from current population stats and nation budget
     * @param stats The current population stats
     * @param nationBudget The current nation budget
     */
    private generateEducationBudget(stats: any, nationBudget: any) {
        const budget: any = [
            {
                'name' : 'Dotation',
                'unit_cost' : "",
                'pop' : "",
                'budget' : Math.floor(nationBudget[nationBudget.length - 1].net * 2 / 100)

            },
            {
                'name' : 'Dette',
                'unit_cost' : "",
                'pop' : "",
                'budget' : this.debt
            },
            {
                'name' : 'Primaire',
                'unit_cost' : "3 pour 25", // 1 prof + 1 admin + 1 fonctionnement / 25 élèves
                'pop' : stats.primaryStudent,
                'budget' : -Math.ceil(stats.primaryStudent / 25) * 3

            }
        ]

        budget[budget.length] = {
            'name' : 'Bilan',
            'unit_cost' : "",
            'pop' : stats.primaryStudent,
            'budget' : budget[0].budget + budget[1].budget + budget[2].budget
        }

        this.debt = Math.min(0,budget[budget.length-1].budget)

        return budget;
    }

    public step(primaryPercentage: number = 0, secondaryPercentage: number = 0, highSchoolPercentage: number = 0) {
        this.updatePopulation(primaryPercentage, secondaryPercentage, highSchoolPercentage);
        const stats = this.getCurrentPopulationStats();
        this.nationBudget = this.generateNationBudget(stats);
        this.educationBudget = this.generateEducationBudget(stats, this.nationBudget);

        this.popChart.data.datasets[0].data = this.population.map(function (d) {return d.primaryStudent;});
        this.popChart.data.datasets[1].data = this.population.map(function (d) {return d.child;});
        this.popChart.data.datasets[2].data = this.population.map(function (d) {return d.secondaryStudent;});
        this.popChart.data.datasets[3].data = this.population.map(function (d) {return d.highSchoolStudent;});
        this.popChart.data.datasets[4].data = this.population.map(function (d) {return d.workStudyStudent;});
        this.popChart.data.datasets[5].data = this.population.map(function (d) {return d.unqualifiedWorker;});
        this.popChart.data.datasets[6].data = this.population.map(function (d) {return d.lowQualifiedWorker;});
        this.popChart.data.datasets[7].data = this.population.map(function (d) {return d.qualifiedWorker;});
        this.popChart.data.datasets[8].data = this.population.map(function (d) {return d.highQualifiedWorker;});
        this.popChart.data.datasets[9].data = this.population.map(function (d) {return d.retired;});

        this.statsChart.data.datasets[0].data = [
            stats.child,
            stats.primaryStudent,
            stats.secondaryStudent,
            stats.highSchoolStudent,
            stats.workStudyStudent,
            stats.unqualifiedWorker,
            stats.lowQualifiedWorker,
            stats.qualifiedWorker,
            stats.highQualifiedWorker,
            stats.retired
        ];

        this.yearsPopulation[this.year] = stats;
        Object.keys(this.yearsPopulation).forEach(year => {
            const index = Number(year) - 1800;
            if (index >= 0 && index < 2025 - 1800) {
                this.yearsReviewChart.data.datasets[0].data[index] = this.yearsPopulation[year].primaryStudent;
                this.yearsReviewChart.data.datasets[1].data[index] = this.yearsPopulation[year].child;
                this.yearsReviewChart.data.datasets[2].data[index] = this.yearsPopulation[year].secondaryStudent;
                this.yearsReviewChart.data.datasets[3].data[index] = this.yearsPopulation[year].highSchoolStudent;
                this.yearsReviewChart.data.datasets[4].data[index] = this.yearsPopulation[year].workStudyStudent;
                this.yearsReviewChart.data.datasets[5].data[index] = this.yearsPopulation[year].unqualifiedWorker;
                this.yearsReviewChart.data.datasets[6].data[index] = this.yearsPopulation[year].lowQualifiedWorker;
                this.yearsReviewChart.data.datasets[7].data[index] = this.yearsPopulation[year].qualifiedWorker;
                this.yearsReviewChart.data.datasets[8].data[index] = this.yearsPopulation[year].highQualifiedWorker;
                this.yearsReviewChart.data.datasets[9].data[index] = this.yearsPopulation[year].retired;
            }
        });

        if(this.year < birthRate.length - 1)
            this.year++;
    }

    public getPopulationChart() {
        return this.popChart;
    }

    public getStatsChart() {
        return this.statsChart;
    }

    public getYearsReviewChart() {
        return this.yearsReviewChart;
    }
}
