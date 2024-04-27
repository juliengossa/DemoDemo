// define status
class Generation {
  static status;
  constructor(status, child=0) {
    Generation.status = status;
    for (const [key, value] of Object.entries(Generation.status))
      this[key] = 0;
    this.child = Math.floor(child);
  }

  get total() {
    return Object.values(this).reduce((sum, value) => sum + value, 0);
  }

  convert(from,to,amount=Infinity) {
    amount = Math.min(amount, this[from]);
    
    this[from] -= amount;
    this[to] += amount;
  }

  convertRatio(from,to,ratio=1) {
    this.convert(from, to, Math.floor(this[from] * ratio));
  }

  convertTotalRatio(from,to,ratio=1) {
    this.convert(from, to, Math.floor(this.total * ratio));
  }

  kill(death_ratio) {
    if (typeof death_ratio === 'number') this.killAll(death_ratio);
    else this.killStatus(death_ratio);
  }

  killAll(death_ratio) {
    for (const [key, value] of Object.entries(this)) {
      this[key] = Math.floor(this[key] * death_ratio);
    }
  }

  killStatus(death_ratios) {
    for (const [key, value] of Object.entries(this)) {
      this[key] = Math.floor(this[key] * death_ratios[key]);
    }
  }


}

