//Problem 1:
function multiples(x) {
	var sum = 0;
	for(var i = 1; i < x; i ++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	console.log(sum);
}

multiples(1000);

//Problem 2:
function fib(x) {
	var sum = 0;
	for(var i = 2; i < x; i ++) {
		if(i % 2 == 0) {
			sum += i;
		}
	}
	console.log(sum);
}

fib(4000000);

//Problem 3:
function primefactor(x) {
	var max = 0;
	for(var i = 1; i < x; i ++) {
		if(x % i == 0) {
			max = i;
		}
	}
	console.log(max);
}

primefactor(6008);

//Problem 5:
function smallmultiple() {
	var min = 0;
	for(var i = 300000000; i > 1; i --) {
		if(i % 1 == 0 && i % 2 == 0 && i % 3 == 0 && i % 4 == 0 && i % 5 == 0 && i % 6 == 0 && i % 7 == 0 && i % 8 == 0 && i % 9 == 0 && i % 10 == 0 && i % 11 == 0 && i % 12 == 0 && i % 13 == 0 && i % 14 == 0 && i % 15 == 0 && i % 16 == 0 && i % 17 == 0 && i % 18 == 0 && i % 19 == 0 && i % 20 == 0) {
			min = i;
		}

	}
  console.log(min);
}

smallmultiple();

//Problem 6:
function squares(x) {
	firstsum = 0;
	secondsum = 0;
	squaresum = 0;
	total = 0;
	for(var i = 1; i <= x; i ++) {
		firstsum += i;
		squaresum += Math.pow(i, 2);

	}
	secondsum += Math.pow(firstsum, 2);
	total = secondsum - squaresum;
	console.log(total);
}

squares(100);

//Problem 7:
function prime() {
	var arr = [];
	for (var counter = 2; counter <= 50; counter++) {
		var notPrime = false;
	  for (var i = 2; i <= counter; i++) {
			if (counter % i === 0 && i !== counter) {
				notPrime = true;
	     }
		 }
	  if (notPrime === false) {
			arr.push(counter);

	  }
	}
	console.log(arr[5]);
}

prime();

//Problem 9:
function triplet(x) {
	var c = 0;
	for(var a = 1; a <= x; a++) {
		for(var b = a+1; b <= x; b++) {
			c = x - a - b;
			if(Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
				console.log(a);
				console.log(b);
				console.log(c);
				console.log(Math.pow(a, 2) + Math.pow(b, 2)+ " = " +Math.pow(c, 2));
				console.log(a + b + c);
			}
		}
	}
}

triplet(1000);

//Problem 10:
function sumprime() {
	var sum = 0;
	for (var i = 2; i <= 2000; i++) {
		var notPrime = false;
	  for (var j = 2; j <= i; j++) {
			if (i % j === 0 && j !== i) {
				notPrime = true;
	     }
		 }
	  if (notPrime === false) {
			sum += i;

	  }
	}
	console.log(sum);
}

sumprime();

//Problem 12:
function trifactor() {
	var one = 1;
	var triangle = 0;
	var count = 0;
	var arr = [];
	var countarr = [];
	var counter = [];
	for(var i = 0; i < 1000; i++) {
		triangle = one + triangle;
		one++;
		arr.push(triangle);
		count = 0;
		for(var j = 1; j <= triangle; j++) {
			if(triangle % j == 0) {
				count++;
				if(count > 50 ) {
					countarr.push(triangle)
					counter.push(count);
				}
			}

		}
	}
	console.log("The first triangle number greater than 50 is "+countarr[0]);
	console.log("It is at count "+ counter[0]);
}

trifactor();

//Problem 16:
function digitsum(x) {
	var value = 0;
	var digits = 0;
	while(x > 0) {
		value = x % 10;
		x -= value;
		x = x / 10;
		digits += value
	}
	console.log(digits);
}

digitsum(Math.pow(2, 1000));

//Problem 17:
function numtoletters(x) {
	console.log(x);
	var one = "one";
	var two = "two";
	var three = "three";
	var four = "four";
	var five = "five";
	var six = "six";
	var seven = "seven";
	var eight = "eight";
	var nine = "nine";
	var ten = "ten";
	var eleven = "eleven";
	var twelve = "twelve";
	var thirteen = "thirteen";
	var fourteen = "fourteen";
	var fifteen = "fifteen";
	var sixteen = "sixteen";
	var seventeen = "seventeen";
	var eighteen = "eighteen";
	var ninteen = "ninteen";
	var twenty = "twenty";
	var thirty = "thirty";
	var fourty = "fourty";
	var fifty = "fifty";
	var sixty = "sixty";
	var seventy = "seventy";
	var eighty = "eighty";
	var nintey = "nintey";
	var hundred = "hundred";
	var thousand = "thousand";
	var newstring = "";
	var number = "";
	var word = "";
	if(x == 1 || x % 10 == 1 && x != 11 || x / 100 == 1 || x / 1000 == 1) {
		number = newstring.concat(one);
	} else if (x == 2 || x % 10 == 2 && x != 12 || x / 100 == 2 || x / 1000 == 2) {
		number = newstring.concat(two);
	} else if (x == 3 || x % 10 == 3 && x != 13 || x / 100 == 3 || x / 1000 == 3) {
		number = newstring.concat(three);
	} else if (x == 4 || x % 10 == 4 && x != 14 || x / 100 == 4 || x / 1000 == 4) {
		number = newstring.concat(four);
	} else if (x == 5 || x % 10 == 5 && x != 15 || x / 100 == 5 || x / 1000 == 5) {
		number = newstring.concat(five);
	} else if (x == 6 || x % 10 == 6 && x != 16 || x / 100 == 6 || x / 1000 == 6) {
		number = newstring.concat(six);
	} else if (x == 7 || x % 10 == 7 && x != 17 || x / 100 == 7 || x / 1000 == 7) {
		number = newstring.concat(seven);
	} else if (x == 8 || x % 10 == 8 && x != 18 || x / 100 == 8 || x / 1000 == 8) {
		number = newstring.concat(eight);
	} else if (x == 9 || x % 10 == 9 && x != 19 || x / 100 == 9 || x / 1000 == 9) {
		number = newstring.concat(nine);
	} else if (x == 10) {
		number = newstring.concat(ten);
	} else if (x == 11) {
		number = newstring.concat(eleven);
	} else if (x == 12) {
		number = newstring.concat(twelve);
	} else if (x == 13) {
		number = newstring.concat(thirteen);
	} else if (x == 14) {
		number = newstring.concat(fourteen);
	} else if (x == 15) {
		number = newstring.concat(fifteen);
	} else if (x == 16) {
		number = newstring.concat(sixteen);
	} else if (x == 17) {
		number = newstring.concat(seventeen);
	} else if (x == 18) {
		number = newstring.concat(eighteen);
	} else if (x == 19) {
		number = newstring.concat(nineteen);
	} else if (x == 20) {
		number = newstring.concat(twenty);
	} else if (x == 30) {
		number = newstring.concat(thiry);
	} else if (x == 40) {
		number = newstring.concat(fourty);
	} else if (x == 50) {
		number = newstring.concat(fifty);
	} else if (x == 60) {
		number = newstring.concat(sixty);
	} else if (x == 70) {
		number = newstring.concat(seventy);
	} else if (x == 80) {
		number = newstring.concat(eighty);
	} else if (x == 90) {
		number = newstring.concat(ninety);
	}
	if (x % 100 == 0 && x % 1000 != 0) {
		word = number.concat(hundred);
	} else if (x % 1000 == 0) {
		word = number.concat(thousand);
	}
	if(word.length > 1) {
		console.log(word);
		console.log("The sum of the letters is "+word.length);
	} else {
		console.log(number);
		console.log("The sum of the letters is "+number.length);
	}
}

numtoletters(1000);

//Problem 19:
function leapyear(year) {
	var isleap = false;
	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		isleap = true;
	}
	if (isleap == true) {
		console.log(year +" is a leap year");
	} else {
		console.log(year +" is NOT a leap year");
	}
}

leapyear(2020);

//Problem 20:
function digits(x) {
	var sum = 1;
  for (var i = 2; i < x; i++) {
		sum *= i;
  }
  var total = sum * x;
  var value = 0;
  var digits = 0;
  while(total > 0) {
		value = total % 10;
		total -= value;
		total = total / 10;
		digits +=  value;
  }
  console.log(digits);
}

digits(100);
