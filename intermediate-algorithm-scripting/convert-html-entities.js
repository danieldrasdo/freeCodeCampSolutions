function convert(str) {
  return str.replace(/&|<|>|"|'/g, function charReplace(x){
    if (x === '&') {
      return '&amp;';
    } else if (x === '<') {
      return '&lt;';
    } else if (x === '>') {
      return '&gt;';
    } else if (x === '"') {
      return '&quot;';
    } else {return '&apos;';}
  });
}

convert('Dolce & Gabbana');
