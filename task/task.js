export function createUser(name = null, surname = null, role = null) {
	return {
		name,
		surname,
		role,
		sayHi() {
			console.log(
				`Hi, my name is ${this.name} ${this.surname}. I am ${this.role}`,
			);
		},
	};
}

const john = createUser('John', 'Doe', 'admin');
john.sayHi();
console.log(john);
