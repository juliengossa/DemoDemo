class EduCrois extends Economy {

    constructor() {
        super();
        this.description = "Minijeu éducation et croissance";
        this.infos.score = {label:"🏆", value:0, description:"condition de victoire", labelfun: (v) => v};
    }

    
    updateInfos(budget) {
        super.updateInfos(budget);

        if (this.infos.growth.value > 0.02) this.infos.growth.style = "labelok" 
        else if (this.infos.growth.value >= 0.01) this.infos.growth.style = "labelwarning"
        else this.infos.growth.style = "labelko";

        if (this.infos.die.value < 0.09) this.infos.die.style = "labelok"
        else if (this.infos.die.value <= 0.1) this.infos.die.style = "labelwarning"
        else this.infos.die.style = "labelko";
    
        if(this.infos.growth.value >= 0.01 && this.infos.die.value <= 0.1) {
            this.infos.score.value += 1;
            this.infos.score.style = "labelok";
        } else {
            this.infos.score.style = "labelko";
        }
    }

}