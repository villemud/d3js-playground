// Generated by CoffeeScript 2.0.1
(function() {
  var FlowBuilder, artefacts, builder, ci, teams;

  teams = function() {
    return {
      sinistre: {
        size: 10
      },
      contrat: {
        size: 22
      },
      finance: {
        size: 15
      },
      flux: {
        size: 8
      },
      transverse: {
        size: 10
      }
    };
  };

  ci = function() {
    return {
      bamboo: {
        adoption: 10
      },
      jenkins: {
        adoption: 4
      },
      gitlab: {
        adoption: 2
      },
      talend: {
        adoption: 5
      },
      erp: {
        adoption: 1
      }
    };
  };

  artefacts = function() {
    return {
      ear: {
        id: 30
      },
      springboot: {
        id: 31
      },
      batchcore: {
        id: 32
      },
      playapp: {
        id: 33
      }
    };
  };

  FlowBuilder = class FlowBuilder {
    constructor(allTeams, allCi, allArtefacts) {
      this.allTeams = allTeams;
      this.allCi = allCi;
      this.allArtefacts = allArtefacts;
    }

    teams(name) {
      return this.allTeams[name];
    }

  };

  builder = new FlowBuilder(teams(ci(artefacts)));

  console.log(builder.teams('sinistre'));

  console.log(builder.teams('contrat'));

}).call(this);
