export class PopulationSlice{

    public child: number = 0;
    public primaryStudent: number = 0;
    public secondaryStudent: number = 0;
    public highSchoolStudent: number = 0;
    public workStudyStudent: number = 0;
    public unqualifiedWorker: number = 0;
    public lowQualifiedWorker: number = 0;
    public qualifiedWorker: number = 0;
    public highQualifiedWorker: number = 0;
    public retired: number = 0;


    public constructor(slice: number = -1){
        if(slice == -1){
            this.resetPopulation();
            return;
        }
        this.child = slice <= 10 ? 29_000_000 / 100 : 0;
        this.primaryStudent = 0;
        this.secondaryStudent = 0;
        this.highSchoolStudent = 0;
        this.workStudyStudent = 0;
        this.unqualifiedWorker = slice >= 10 && slice <= 63 ? 29_000_000 / 100 : 0;
        this.lowQualifiedWorker = 0;
        this.qualifiedWorker = 0;
        this.highQualifiedWorker = 0;
        this.retired = slice >= 64 ? 29_000_000 / 100 : 0;
    }

    public getPopulation(): number{
        return this.child +
            this.primaryStudent +
            this.secondaryStudent +
            this.highSchoolStudent +
            this.workStudyStudent +
            this.unqualifiedWorker +
            this.lowQualifiedWorker +
            this.qualifiedWorker +
            this.highQualifiedWorker +
            this.retired;
    }

    public primaryInsertion(): void{
        this.unqualifiedWorker = this.child;
        this.lowQualifiedWorker = this.primaryStudent;
        this.child = 0;
        this.primaryStudent = 0;
    }

    public secondaryInsertion(): void{
        this.qualifiedWorker = this.secondaryStudent;
        this.secondaryStudent = 0;
    }

    public highSchoolInsertion(): void{
        this.highQualifiedWorker = this.highSchoolStudent;
        this.highSchoolStudent = 0;
    }

    public retirePopulation(): void{
        const popCount = this.getPopulation();
        this.resetPopulation();
        this.retired = popCount;
    }

    public resetPopulation(): void{
        this.child = 0;
        this.primaryStudent = 0;
        this.secondaryStudent = 0;
        this.highSchoolStudent = 0;
        this.workStudyStudent = 0;
        this.unqualifiedWorker = 0;
        this.lowQualifiedWorker = 0;
        this.qualifiedWorker = 0;
        this.highQualifiedWorker = 0;
        this.retired = 0;
    }

    public roundPopulation(): void{
        this.child = Math.floor(this.child);
        this.primaryStudent = Math.floor(this.primaryStudent);
        this.secondaryStudent = Math.floor(this.secondaryStudent);
        this.highSchoolStudent = Math.floor(this.highSchoolStudent);
        this.workStudyStudent = Math.floor(this.workStudyStudent);
        this.unqualifiedWorker = Math.floor(this.unqualifiedWorker);
        this.lowQualifiedWorker = Math.floor(this.lowQualifiedWorker);
        this.qualifiedWorker = Math.floor(this.qualifiedWorker);
        this.highQualifiedWorker = Math.floor(this.highQualifiedWorker);
        this.retired = Math.floor(this.retired);
    }

    /**
     * Apply the death count to the population slice
     * @param deathCount The number of deaths to apply
     * @return The number of deaths that could not be applied
     */
    public applyDeath(deathCount: number): number{
        let currentDeathCount = deathCount;
        if(this.retired != 0) {
            if(currentDeathCount > this.retired){
                currentDeathCount = this.retired;
                this.retired = 0;
            }else{
                this.retired -= currentDeathCount;
            }
        }else if(this.unqualifiedWorker != 0) {
            if(currentDeathCount > this.unqualifiedWorker){
                currentDeathCount = this.unqualifiedWorker;
                this.unqualifiedWorker = 0;
            }else{
                this.unqualifiedWorker -= currentDeathCount;
            }
        }else if(this.lowQualifiedWorker != 0) {
            if(currentDeathCount > this.lowQualifiedWorker){
                currentDeathCount = this.lowQualifiedWorker;
                this.lowQualifiedWorker = 0;
            }else{
                this.lowQualifiedWorker -= currentDeathCount;
            }
        }else if(this.qualifiedWorker != 0) {
            if(currentDeathCount > this.qualifiedWorker){
                currentDeathCount = this.qualifiedWorker;
                this.qualifiedWorker = 0;
            }else{
                this.qualifiedWorker -= currentDeathCount;
            }
        }else if(this.highQualifiedWorker != 0) {
            if(currentDeathCount > this.highQualifiedWorker){
                currentDeathCount = this.highQualifiedWorker;
                this.highQualifiedWorker = 0;
            }else{
                this.highQualifiedWorker -= currentDeathCount;
            }
        }else if(this.workStudyStudent != 0) {
            if(currentDeathCount > this.workStudyStudent){
                currentDeathCount = this.workStudyStudent;
                this.workStudyStudent = 0;
            }else{
                this.workStudyStudent -= currentDeathCount;
            }
        }else if(this.highSchoolStudent != 0) {
            if(currentDeathCount > this.highSchoolStudent){
                currentDeathCount = this.highSchoolStudent;
                this.highSchoolStudent = 0;
            }else{
                this.highSchoolStudent -= currentDeathCount;
            }
        }else if(this.secondaryStudent != 0) {
            if(currentDeathCount > this.secondaryStudent){
                currentDeathCount = this.secondaryStudent;
                this.secondaryStudent = 0;
            }else{
                this.secondaryStudent -= currentDeathCount;
            }
        }else if(this.primaryStudent != 0) {
            if(currentDeathCount > this.primaryStudent){
                currentDeathCount = this.primaryStudent;
                this.primaryStudent = 0;
            }else{
                this.primaryStudent -= currentDeathCount;
            }
        }else if(this.child != 0) {
            if(currentDeathCount > this.child){
                currentDeathCount = this.child;
                this.child = 0;
            }else{
                this.child -= currentDeathCount;
            }
        }
        deathCount -= currentDeathCount;
        return deathCount;
    }

}
