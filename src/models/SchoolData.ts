/*See licence in LICENCE.md
Created by Tom CZEKAJ, Anatole VOLTZ and Gaël SEILER*/


export class SchoolData {
    primary: number = 0;
    primaryValid: number = 0;
    secondary: number = 0;
    secondaryValid: number = 0;
    hitgh: number = 0;
    highValid: number = 0;
    workStudy: number = 0;


    getPrimary() {
        return this.primary
    }

    setPraimary(x : number) {
        this.primary = x
    }

    getPraimaryValid() {
        return this.primaryValid
    }

    setPraimaryValid(x : number) {
        this.primaryValid = x
    }

    getSecondary() {
        return this.secondary
    }

    setSecondary(x : number) {
        this.secondary = x
    }

    getSecondaryValid() {
        return this.secondaryValid
    }

    setSecondaryValid(x : number) {
        this.secondaryValid = x
    }

    getHigth() {
        return this.hitgh
    }

    setHigth(x : number) {
        this.hitgh = x
    }

    getHigthValid() {
        return this.highValid
    }

    setHigthValid(x : number) {
        this.highValid = x
    }

    getWorkStudy() {
        return this.workStudy
    }

    setWorkStudy(x : number) {
        this.workStudy = x
    }
}