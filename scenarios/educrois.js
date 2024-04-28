class EduCrois extends Economy {

    constructor() {
        super();
        this.description = "Objectif : conserver le plus longtemps possible une croissance économique supérieure à 1% avec une dépense d'éducation inférieure à 10% du PIB.";
        this.help = " - Investir dans l'éducation permet de former une main d'oeuvre qualifiée.<br/>\
                      - Une main d'oeuvre qualifiée permet de produire plus et donc de faire croître le PIB.<br/>\
                      - Avoir de la croissance permet d'augmenter l'investissement dans l'éducation.<br/>\
                      - Mais augmenter la dépense éducative augmente la durée des études.<br/>\
                      - Et augementer la durée des études diminue la main d'oeuvre disponible pour produire.<br/>";
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