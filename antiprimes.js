function go() {
  var number = document.getElementById("n").value;
  document.body.removeChild(document.getElementById("result-list"));
  document.body.appendChild(showList(generateAntiprimes(number)));
}

function showList(array) {
  var list = document.createElement("ul");
  list.id = "result-list";
  for (var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement("li");

    // Set its contents:
    item.appendChild(document.createTextNode(array[i]));

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

function factors(n) {
  var factors = [];
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }
  return factors;
}
function generateAntiprimes(n) {
  var antiprimes = [];
  var maxFactors = 0;
  for (var i = 1; antiprimes.length < n; i++) {
    var ifactors = factors(i);
    if (ifactors.length > maxFactors) {
      antiprimes.push(i);
      maxFactors = ifactors.length;
    }
  }
  return antiprimes;
}
function isAntiprime(n) {}
