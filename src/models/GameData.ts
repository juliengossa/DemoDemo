import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

import {birthRate, deathRate, UnqualifiedNeed, LowlifiedNeed, QualifiedNeed, HighQualifiedNeed} from "./Data.ts";
import {PopulationSlice} from "./PopulationSlice.ts";
import { Children, useState } from "react";

export class GameData {
    constructor(){
        for (let i = 0; i < this.population.length; i++) {
            this.population[i] = new PopulationSlice(i);
        }

        const colors = {
            need: "rgb(255,0,0)",
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
                        data: this.population.map(function (d) {return d.child;}),
                        label: "Children",
                        borderColor: "rgb(100,200,100)",
                        backgroundColor: "rgb(100,200,100,0.1)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.primaryStudent;}),
                        label: "Primary students",
                        borderColor: "rgb(100,100,200)",
                        backgroundColor: "rgb(100,100,200,0.2)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.secondaryStudent;}),
                        label: "Secondary students",
                        borderColor: "rgb(100,100,200)",
                        backgroundColor: "rgb(100,100,200,0.2)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.highSchoolStudent;}),
                        label: "High school students",
                        borderColor: "rgb(100,100,200)",
                        backgroundColor: "rgb(100,100,200,0.2)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.workStudyStudent;}),
                        label: "Work study students",
                        borderColor: "rgb(100,100,200)",
                        backgroundColor: "rgb(100,100,200,0.2)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.unqualifiedWorker;}),
                        label: "Unqualified worker",
                        borderColor: "rgb(200,100,100)",
                        backgroundColor: "rgb(200,100,100,0.1)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.lowQualifiedWorker;}),
                        label: "Low qualified worker",
                        borderColor: "rgb(200,100,200)",
                        backgroundColor: "rgb(200,100,200,0.2)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.qualifiedWorker;}),
                        label: "Qualified worker",
                        borderColor: "rgb(200,100,200)",
                        backgroundColor: "rgb(200,100,200,0.2)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.highQualifiedWorker;}),
                        label: "High qualified worker",
                        borderColor: "rgb(200,100,200)",
                        backgroundColor: "rgb(200,100,200,0.2)",
                        borderWidth:2
                    },
                    {
                        data: this.population.map(function (d) {return d.retired;}),
                        label: "Retired",
                        borderColor: "rgb(100,100,100)",
                        backgroundColor: "rgb(100,100,100,0.1)",
                        borderWidth:2
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true
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
                datasets: [
                    {
                        data: [0],
                        label: "Children",
                        borderColor: colors.child,
                        backgroundColor: "rgb(100,200,100,0.2)",
                        borderWidth:4
                    },
                    {
                        data: [0],
                        label: "Primary student",
                        borderColor: colors.primaryStudent,
                        backgroundColor: "rgb(0, 180, 216,0.2)",
                        borderWidth:4
                    },
                    {
                        data: [0],
                        label: "Secondary student",
                        borderColor: colors.secondaryStudent,
                        backgroundColor: "rgb(0, 119, 182,0.2)",
                        borderWidth:4
                    },
                    {
                        data: [0],
                        label: "High school student",
                        borderColor: colors.highSchoolStudent,
                        backgroundColor: "rgb(3, 4, 94,0.2)",
                        borderWidth:4
                    },
                    {
                        data: [0],
                        label: "Work school student",
                        borderColor: colors.workStudyStudent,
                        backgroundColor: "rgb(100,100,200,0.2)",
                        borderWidth:4
                    },
                    {
                        data: [0],
                        label: "Unqualified worker",
                        borderColor: colors.unqualifiedWorker,
                        backgroundColor: "rgb(255, 136, 0,0.2)",
                        borderWidth:3
                    },
                    {
                        data: [0],
                        label: "Unqualified worker Need",
                        borderColor: colors.need,
                        backgroundColor: "rgb(255,0,0,0.1)",
                        borderWidth:5
                    },
                    {
                        data:[0], 
                        label: "Low qualified worker",
                        borderColor: colors.lowQualifiedWorker,
                        backgroundColor: "rgb(255, 162, 0,0.2)",
                        borderWidth:3,
                    },
                    {
                        data:[0], 
                        label: "Low qualified worker Need",
                        borderColor: colors.need,
                        backgroundColor: "rgb(255,0,0,0.1)",
                        borderWidth:5
                    },
                    {
                        data: [0],
                        label: "Qualified worker",
                        borderColor: colors.qualifiedWorker,
                        backgroundColor: "rgb(255, 183, 0,0.2)",
                        borderWidth:3
                    },
                    {
                        data: [0],
                        label: "Qualified worker Need",
                        borderColor: colors.need,
                        backgroundColor: "rgb(255,0,0,0.1)",
                        borderWidth:5
                    },
                    {
                        data: [0],
                        label: "High qualified worker",
                        borderColor: colors.highQualifiedWorker,
                        backgroundColor: "rgb(255, 208, 0,0.2)",
                        borderWidth:3
                    },
                    {
                        data: [0],
                        label: "High qualified worker Need",
                        borderColor: colors.need,
                        backgroundColor: "rgb(255,0,0,0.1)",
                        borderWidth:5
                    },
                    {
                        data: [0],
                        label: "Retired",
                        borderColor: colors.retired,
                        backgroundColor: "rgb(100,100,100,0.2)",
                        borderWidth:4
                    }
                    
                ]
            },
            options: {
                scales: {
                    x: {
                        stacked: true
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

        this.step();
    }

    public year = 1800;
    public pidPart = 100;
    public pidReduce = 0;
    private debt = 0;
    private population: PopulationSlice[] = new Array(100);
    public nationBudget: any;
    public educationBudget: any;

    // create a new chart object
    private readonly popChart;

    private readonly statsChart;

    private getTotalPopulation(): number{
        return this.population.reduce((a, b) => a + b.getPopulation(), 0);
    }

    private getTotalWorkerPopulation() : number {
        return this.population.reduce((a,b) => a +b.getWorkerPopulation(), 0)
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

        let deathCount = this.getTotalPopulation() * deathRate[this.year] / 100;
        for(let i = 99; i >= 0; i--) {
            let currentDeathCount = deathCount * 0.1;
            deathCount -= currentDeathCount - this.population[i].applyDeath(currentDeathCount);
        }

        // Deaths
        for (let i = this.population.length-1; i > 0 ; i--) {
            this.population[i] = this.population[i-1];
        }

        // Births
        const pop0 = this.getTotalPopulation() * birthRate[this.year] / 100;
        this.population[0] = new PopulationSlice();
        this.population[0].child = pop0;

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
            unqualifiedWorkerNeed : 0,
            workStudyStudent : 0,
            lowQualifiedWorker : 0,
            lowQualifiedWorkerNeed : 0,
            qualifiedWorker : 0,
            qualifiedWorkerNeed : 0,
            highQualifiedWorker : 0,
            highQualifiedWorkerNeed : 0,
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

        const totPop = this.getTotalWorkerPopulation()

        stats.unqualifiedWorkerNeed = (totPop * UnqualifiedNeed[this.year])/100
        stats.lowQualifiedWorkerNeed = (totPop * LowlifiedNeed[this.year])/100
        stats.qualifiedWorkerNeed = (totPop * QualifiedNeed[this.year])/100
        stats.highQualifiedWorkerNeed = (totPop * HighQualifiedNeed[this.year])/100

        return stats;
    }

    private updatePibPart() {
        const stats = this.getCurrentPopulationStats()
        this.pidPart = 100
        
     

        if(stats.unqualifiedWorker < stats.unqualifiedWorkerNeed) {
            this.pidPart -= (((stats.unqualifiedWorkerNeed-stats.unqualifiedWorker)/stats.unqualifiedWorkerNeed)*100)/2
        }
        if(stats.lowQualifiedWorker < stats.lowQualifiedWorkerNeed) {
            this.pidPart -= (((stats.lowQualifiedWorkerNeed-stats.lowQualifiedWorker)/stats.lowQualifiedWorkerNeed)*100)/2
        }
        if(stats.qualifiedWorker < stats.qualifiedWorkerNeed) {
            this.pidPart -= (((stats.qualifiedWorkerNeed-stats.qualifiedWorker)/stats.qualifiedWorkerNeed)*100)/2
        }
        if(stats.highQualifiedWorker < stats.highQualifiedWorkerNeed) {
            this.pidPart -= (((stats.highQualifiedWorkerNeed-stats.highQualifiedWorker)/stats.highQualifiedWorkerNeed)*100)/2
        }

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
            b.net =  b.total_production - b.total_consumption
        })

        budget[budget.length] = {
            'name' : 'Total',
            'pop' : budget.reduce((a: any, b: any) => a + b.pop, 0),
            'consumption' : "",
            'production' : "",
            'total_consumption' : budget.reduce((a: any, b: any) => a + b.consumption * b.pop, 0),
            'total_production' : budget.reduce((a: any, b: any) => a + b.production * b.pop, 0),
            'net' : ((budget.reduce((a: any, b: any) => a + b.net, 0))* parseInt((this.pidPart-this.pidReduce).toFixed(2)))/100
        }

        return budget;
    }

    /**
     * Generate the new education budget from current population stats and nation budget
     * @param stats The current population stats
     * @param nationBudget The current nation budget
     */
    private generateEducationBudget(stats: any, nationBudget: any) {
        const budget: any = [{
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

            }]

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
        this.updatePibPart()
        const stats = this.getCurrentPopulationStats();
        this.nationBudget = this.generateNationBudget(stats);
        this.educationBudget = this.generateEducationBudget(stats, this.nationBudget);

        this.popChart.data.datasets[0].data = this.population.map(function (d) {return d.child;});
        this.popChart.data.datasets[1].data = this.population.map(function (d) {return d.primaryStudent;});
        this.popChart.data.datasets[2].data = this.population.map(function (d) {return d.secondaryStudent;});
        this.popChart.data.datasets[3].data = this.population.map(function (d) {return d.highSchoolStudent;});
        this.popChart.data.datasets[4].data = this.population.map(function (d) {return d.workStudyStudent;});
        this.popChart.data.datasets[5].data = this.population.map(function (d) {return d.unqualifiedWorker;});
        this.popChart.data.datasets[6].data = this.population.map(function (d) {return d.lowQualifiedWorker;});
        this.popChart.data.datasets[7].data = this.population.map(function (d) {return d.qualifiedWorker;});
        this.popChart.data.datasets[8].data = this.population.map(function (d) {return d.highQualifiedWorker;});
        this.popChart.data.datasets[9].data = this.population.map(function (d) {return d.retired;});

        this.statsChart.data.datasets[0].data = [stats.child,0,0,0,0,0,0,0,0,0]
        this.statsChart.data.datasets[1].data = [0,stats.primaryStudent,0,0,0,0,0,0,0,0]
        this.statsChart.data.datasets[2].data = [0,0,stats.secondaryStudent,0,0,0,0,0,0,0]
        this.statsChart.data.datasets[3].data = [0,0,0,stats.highSchoolStudent,0,0,0,0,0,0]
        this.statsChart.data.datasets[4].data = [0,0,0,0,stats.workStudyStudent,0,0,0,0,0]
        this.statsChart.data.datasets[5].data = [0,0,0,0,0,stats.unqualifiedWorker,0,0,0,0]
        this.statsChart.data.datasets[6].data = [0,0,0,0,0,stats.unqualifiedWorkerNeed,0,0,0,0]
        this.statsChart.data.datasets[7].data = [0,0,0,0,0,0,stats.lowQualifiedWorker,0,0,0]
        this.statsChart.data.datasets[8].data = [0,0,0,0,0,0,stats.lowQualifiedWorkerNeed,0,0,0]
        this.statsChart.data.datasets[9].data = [0,0,0,0,0,0,0,stats.qualifiedWorker,0,0]
        this.statsChart.data.datasets[10].data = [0,0,0,0,0,0,0,stats.qualifiedWorkerNeed,0,0]
        this.statsChart.data.datasets[11].data = [0,0,0,0,0,0,0,0,stats.highQualifiedWorker,0]
        this.statsChart.data.datasets[12].data = [0,0,0,0,0,0,0,0,stats.highQualifiedWorkerNeed,0]
        this.statsChart.data.datasets[13].data = [0,0,0,0,0,0,0,0,0,stats.retired]

        if(this.year < birthRate.length - 1)
            this.year++;
    }

    public getPopulationChart() {
        return this.popChart;
    }

    getStatsChart() {
        return this.statsChart;
    }
}
function hexToRGBA(child: string, arg1: number) {
    throw new Error("Function not implemented.");
}

