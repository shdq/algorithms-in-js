function sides(perimeter) {
  let solutions = 0;
  for (let a = 1; a < perimeter / 2; a++) {
    for (let b = 1; b <= a; b++) {
      if (Math.sqrt(a * a + b * b) === perimeter - a - b) solutions++;
    }
  }
  return solutions;
}

module.exports = { sides };
