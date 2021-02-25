function numDuplicates(names, prices, weights) {
    let productName = "";
    
    let prodMap = {};
    for (let i = 0; i < names.length; i++) {
      productName = names[i] + " " + prices[i] + " " + weights[i];
      if(!(productName in prodMap)) {
        prodMap[productName] = 1;
      }
    }
    
    return Object.keys(prodMap).length;
  }
  
  let names = ["banana", "apple", "potato", "potato", "apple", "pear"];
  let prices = [18, 17, 16, 16, 16, 12];
  let weights = [18, 17, 16, 16, 11, 11];
  console.log(numDuplicates(names, prices, weights));