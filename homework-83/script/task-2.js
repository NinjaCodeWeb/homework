const myObject = {
	sayHello(name) {
		return `Hello ${name}`
	}
}

const greeting = myObject.sayHello('Виктор');
console.log(greeting)