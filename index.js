//You have 9 pieces of candy.
//3 pieces of red, blue, green.
//You pull pieces of candy from the bag until you've pulled one of every color.
//What percentage chance do you have of completing the task in 3 pulls, 4 pulls, etc

//the logrithmic challange can be solved with tower of hanoi
//because you have to figure out the fewest number of moves and then their percentage

//tower of hanoi
function towerOfHanoi(discs) {
  const poles = { A: [], B: [], C: [] };
  let moves = 0;
  // put the discs on the first pole
  for (let i = discs; i > 0; i--) poles["A"].push(i);
  const hanoi = (discs, source, destination, temp) => {
    if (discs === 1) {
      print(source, destination);
    } else {
      // move all others discs to temp pole
      hanoi(discs - 1, source, temp, destination);
      // print that move
      print(source, destination);
      // move other discs from temp pole to original destination
      hanoi(discs - 1, temp, destination, source);
    }
  };
  const print = (source, destination) => {
    const disc = poles[source].pop();
    poles[destination].push(disc);
    moves++;
    console.log(`Moving "${disc}" from ${source} -> ${destination}`);
    console.log(poles, "\n");
  };
  // do it
  console.log(poles, "\n");
  hanoi(discs, "A", "C", "B");
  console.log(moves);
}
towerOfHanoi(5);

function piecesOfCandy(candy) {
  const colours = { R: [], B: [], G: [] };
  let pulls = 0;
  for (let i = colours; i > 0; i--) colours["A"].push(i);
}
