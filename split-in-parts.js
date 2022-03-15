var splitInParts = function(s, partLength) {
    return s.match(new RegExp('.{1,' + partLength + '}', 'g')).join(' ');
  }