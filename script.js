function fibonacci(num) {
// your code here
	if (num=1){
		return 0;
	}
	if(num=2){
		return 1;
	}
	else{
		return (fibonacci(num-2)+ fibonacci(num-1));
	}
}
console.log(fibonacci(5));
module.exports = fibonacci;
