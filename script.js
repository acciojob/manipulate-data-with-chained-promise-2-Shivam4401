// initial promise
let initialPromise = new Promise((resolve,reject) => {
	  setTimeout(() => {
		  resolve([1,2,3,4]);
	  },3000);
});

initialPromise.then((number) => {
	let evenNumber = number.filter((num) => num%2 == 0);
	document.querySelector("#output").textContent = evenNumber;
	return new Promise((resolve,reject) => {
       setTimeout(() => {
		   resolve(evenNumber);
	   },1000);
	});
})
.then((evenNumber) => {
	let multiplyBy = evenNumber.map((num) => num*2);
	document.querySelector("#output").textContent = multiplyBy;
	return new Promise ((resolve,reject) => {
		setTimeout(() => {
			resolve(multiplyBy);
		},2000);
	});

	
})