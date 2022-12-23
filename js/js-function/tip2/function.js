let input = [3000, 27500, 100000];

function sumWithExtra(price) {
  let extra;
  if (price >= 5000 && price <= 30000) {
    extra = price * 0.15;
  } else {
    extra = price * 0.2;
  }
  return price + extra;
}

function extra(price) {
  let extra;
  if (price >= 5000 && price <= 30000) {
    extra = price * 0.15;
  } else {
    extra = price * 0.2;
  }
  return extra;
}

function avg(price) {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += sumWithExtra(price[i]);
  }
  return (sum / price.length).toFixed(1);
}

console.log(avg(input));
