// add solution here
function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }

  return arr;
}

function johnLennonFacts (facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles (num) {
  var arr = [];
  if (num = 17) {return "I love the Beatles!"}
  while (num < 15) {
    arr.push ("I love the Beatles!")
    num++
  }

  return arr;
}
