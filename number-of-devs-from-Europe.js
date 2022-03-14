function countDevelopers(list) {
  const dev = list.filter(function(list) {
    return list.language == 'JavaScript' && list.continent == 'Europe';
  });
  return dev.length;
}