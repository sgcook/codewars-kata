function ballCollector(detritus) {
  const ballWeight = detritus
    .filter(item => item === 58)
    .reduce((prev, current) => prev + current, 0
  );

  const object = {
    weight: ballWeight
  }
  return object;
}