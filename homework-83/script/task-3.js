const users2 = [
	{
		name: 'viktor',
		age: 23,
		upsurge: 172,
		weight: 68,
		isAdmin: true
	},

	{
		name: 'ivan',
		age: 23,
		upsurge: 172,
		weight: 68,
		isAdmin: false
	},

	{
		name: 'dmitry:',
		age: 23,
		upsurge: 172,
		weight: 68,
		isAdmin: false
	},

	{
		name: 'angelina',
		age: 23,
		upsurge: 172,
		weight: 68,
		isAdmin: true
	}
]

let regularUsers = 0

for (let index = 0; index < users2.length; index++) {
	const user = users2[index]

	if (user.isAdmin === false) {
		regularUsers += 1
	}
}

console.log(regularUsers)