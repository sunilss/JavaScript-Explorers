var products = [
	{id : 12, name : "Pen", units : 102, cost : 15, category : 1},
	{id : 14, name : "Hen", units : 109, cost : 21, category : 2},
	{id : 22, name : "Ken", units : 100, cost : 61, category : 1},
	{id : 11, name : "Den", units : 107, cost : 17, category : 1},
	{id : 10, name : "Ten", units : 101, cost : 19, category : 2}
];

function groupBy(list,keySelector){
  var result = [];
  function getGroupedItem(k){
    for(var i=0;i<result.length;i++){
      if (result[i].Key === k)
          return result[i];
    }
    var groupedItem = { Key : k, Value : [] };
    result.push(groupedItem);
    return groupedItem;
  }
  for(var i=0;i<list.length;i++){
     var groupKey = keySelector(list[i]);
     var groupedItem = getGroupedItem(groupKey);
     groupedItem.Value.push(list[i]);
  }
  return result;
}

function newGroupBy(list,keySelector){
  var result = {};
  for(var i=0;i<list.length;i++){
     var groupKey = keySelector(list[i]);
     if (!result[groupKey]) result[groupKey] = [];
     result[groupKey].push(list[i]);
  }
  return result;
}

function isPrime(n){
  if (typeof isPrime[n] !== "undefined") {
      console.log("returning from memory");
      return isPrime[n];
  }
  console.log("newly calculated result");
  for(var i=2;i<n/2;i++){
    if (n % i === 0){
      isPrime[n] = false;
      return isPrime[n];
    }
  }
  isPrime[n] = true;
  return isPrime[n];
}


