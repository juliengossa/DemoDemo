class EduCrois extends Economy {

    constructor() {
        super();
        this.description = "Objectif : conserver le plus longtemps possible une croissance économique supérieure à 1% avec une dépense d'éducation inférieure à 10% du PIB.";
        this.help = "L'éducation et la croissance sont liées. L'éducation permet de former une main d'oeuvre qualifiée et de favoriser l'innovation. La croissance permet de financer l'éducation et de créer des emplois.";
        this.infos.score = {label:"🏆", value:0, description:"Points de victoire", labelfun: (v) => v};
    }

    
    updateInfos(budget) {
        super.updateInfos(budget);

        if (this.infos.growth.value > 0.02) this.infos.growth.style = "labelok" 
        else if (this.infos.growth.value >= 0.01) this.infos.growth.style = "labelwarning"
        else this.infos.growth.style = "labelko";

        if (this.infos.diepib.value < 0.09) this.infos.diepib.style = "labelok"
        else if (this.infos.diepib.value <= 0.1) this.infos.diepib.style = "labelwarning"
        else this.infos.diepib.style = "labelko";
    
        if(this.infos.growth.value >= 0.01 && this.infos.diepib.value <= 0.1) {
            this.infos.score.value += 1;
            this.infos.score.style = "labelok";
        } else {
            this.infos.score.style = "labelko";
        }
    }

}