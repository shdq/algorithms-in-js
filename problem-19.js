function countSundays(from, to) {
  let start = new Date(from);
  const end = new Date(to);

  let sundays = 0;
  while (start <= end) {
    if (start.getDay() === 0 && start.getDate() === 1) sundays++;
    start = new Date(start.getTime() + 1000 * 60 * 60 * 24);
  }
  return sundays;
}

module.exports = countSundays;
