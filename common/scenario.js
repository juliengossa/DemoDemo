
class Scenario {

    status;
    infos;
    inputs;
    description;

    infosChartsTitles = [];

    getStatus() {
        return Object.entries(this.status);
    }

    getStatusLabels() {
        return Object.entries(this.status).map(([key, value]) => value.label)
    }

    getStatusColors() {
        return Object.entries(this.status).map(([key, value]) => value.color)
    }
}