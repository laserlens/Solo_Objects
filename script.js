var marriage = {
  teamMembers: "2",
  mNames: "Adrian Flak and Amber Michel",
  coupleN: "amdrian",
  teamP: "a Wife and a Husband",
  membersP: "Amber is the wife, Adrian is the husband",
  petsT: "cats",
  petsN: "Frank and Guillermo",
  tLegs: "12",
  tArms: "4",
  tAwsome: "alls",
};

function printObject(o) {
  var p = "My favorite team is my marriage. " +
  "It has " + o.teamMembers + " team members.\n" +
  "There are 2 positions in our marrage, " + o.teamP + ".\n" +
  "The members, in no paticular order, are " + o.mNames + ".\n" +
  o.membersP + ".\n" +
  "The teams couple name is " + o.coupleN + ".\n" +
  "The mascots on the team are " + o.petsT + ".\n" +
  "Their names, in order they joined, " + o.petsN + ".\n" +
  "Some fun facts: total number of legs " + o.tLegs + ", arms " + o.tArms + ",\n" +
  "and most importantly total number of awsomes " + o.tAwsome + "."
 ;
  return p;
;}

t = printObject(marriage);

console.log(t);
