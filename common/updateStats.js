function updateStats() {
    var stats = {
      child : 0,
      student : 0,
      worker_unqualified : 0,
      worker_primary : 0,
      retired : 0
    }
    for (var i = 0; i < population.length; i++) {
      stats.child += population[i].child;
      stats.student += population[i].student;
      stats.worker_unqualified += population[i].worker_unqualified;
      stats.worker_primary += population[i].worker_primary;
      stats.retired += population[i].retired;
    }
    return stats;
  }