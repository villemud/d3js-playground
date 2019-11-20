teams = () -> {
  sinistre:
    size: 10,
  contrat:
    size: 22,
  finance:
    size: 15
  flux:
    size: 8,
  transverse:
    size: 10
}

ci = () -> {
  bamboo:
    adoption: 10,
  jenkins:
    adoption: 4,
  gitlab:
    adoption: 2,
  talend: 
    adoption: 5,
  erp:
    adoption: 1
}




artefacts =  () -> {
    ear:
      id: 30,
    springboot:
      id: 31,
    batchcore:
      id: 32,
    playapp:
      id: 33
}

aray2 = [
  { artefacts: "sinistre-ear" , pipelinetool: "plint" , deploby: "deploit" ,container: "springboot" },
  { artefacts: "sinientrperise-ear" , pipelinetool: "plint" , deploy: "deploy" , container: "websphere" }
  { artefacts: "batch-something" , pipelinetool: "plint" , deploy: "deploy" , container: "websphere" }
]


a =  team: "sinistre", d: array2