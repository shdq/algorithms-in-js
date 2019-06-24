function sides(perimeter) {
  let solutions = 0;
  for (let a = 1; a < perimeter / 2; a++) {
    for (let b = 1; b <= a; b++) {
      if (Math.sqrt(a * a + b * b) === perimeter - a - b) solutions++;
    }
  }
  return solutions;
}

function maxPerimeter(p = 1000) {
  let max = 0;
  let result = 0;
  while (p > 2) {
    const numSolutions = sides(p);
    if (numSolutions > max) {
      max = numSolutions;
      result = p;
    }
    p--;
  }
  return result;
}

module.exports = { sides, maxPerimeter };
