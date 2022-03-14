var number = function(busStops) {
  let people = 0;
  busStops.map(array => {
    people += array[0];
    people -= array[1];
  })
  return people;
}