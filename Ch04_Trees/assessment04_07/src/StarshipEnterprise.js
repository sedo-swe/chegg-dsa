const Queue = require("./Queue");

class StarshipEnterprise {
  constructor(officerId = null, officerName = null, reportTo = null) {
    this.officerId = officerId;
    this.officerName = officerName;
    this.reportTo = reportTo; // the officer that the new officer reports to
    this.leftReport = null;
    this.rightReport = null;
  }

  assignOfficer(officerId, officerName) {
    // your solution here
    // if officerId of this is null, then assign to this
    if (this.officerId == null) {
      this.officerId = officerId;
      this.officerName = officerName;
    }
    // if officerId is less than this id & no left child, then assign it to left of this
    // if there is left child, then call assignOfficer with left child
    else if (officerId < this.officerId) {
      if (this.leftReport)
        this.leftReport.assignOfficer(officerId, officerName);
      else
        this.leftReport = new StarshipEnterprise(officerId, officerName, this);
    }
    // if officerId is greater than this id & no right child, then assign it to right of this
    // if there is right child, then call assignOfficer with right child
    else if (officerId > this.officerId) {
      if (this.rightReport)
        this.rightReport.assignOfficer(officerId, officerName);
      else
        this.rightReport = new StarshipEnterprise(officerId, officerName, this);
    }
  }

  findOfficersWithNoDirectReports(values = []) {
    // your solution here
    if (!this.leftReport && !this.rightReport)
      values.push(this.officerName);
    
    if (this.leftReport)
      this.leftReport.findOfficersWithNoDirectReports(values);
    if (this.rightReport)
      this.rightReport.findOfficersWithNoDirectReports(values);
    return values;
  }

  listOfficersByExperience(officerNames = []) {
    // your solution here
    if (this.rightReport)
      this.rightReport.listOfficersByExperience(officerNames);
    
    officerNames.push(this.officerName);

    if (this.leftReport)
      this.leftReport.listOfficersByExperience(officerNames);

    return officerNames;
  }

  listOfficersByRank(tree, rankedOfficers = {}) {
    // your solution here
    const q = new Queue();
    q.enqueue(this);
    const n = new Queue();
    let rank = 1;
    let ta = [];
    
    while (q.first !== null) {
      let temp = q.dequeue();
      ta.push(temp.officerName);
      
      if (temp.leftReport)
        n.enqueue(temp.leftReport);
      if (temp.rightReport)
        n.enqueue(temp.rightReport);
      
      if (q.first === null) {
        while (n.first !== null) {
          q.enqueue(n.dequeue());
        }
        rankedOfficers[rank] = ta;
        rank++;
        ta = [];
      }
    }
    return rankedOfficers;
  }
}

module.exports = StarshipEnterprise;
