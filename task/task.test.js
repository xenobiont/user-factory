import { createUser } from './task.js';

describe('createUser', () => {
	test('creates a user with the given name, surname, and role', () => {
		const user = createUser('John', 'Doe', 'admin');
		expect(user.name).toBe('John');
		expect(user.surname).toBe('Doe');
		expect(user.role).toBe('admin');
	});

	test('creates a user without a name, surname, or role', () => {
		const user = createUser();
		expect(user.name).toBeNull();
		expect(user.surname).toBeNull();
		expect(user.role).toBeNull();
	});

	test('returns an object with a sayHi method', () => {
		const user = createUser('John', 'Doe', 'admin');
		expect(typeof user.sayHi).toBe('function');
	});

	test('sayHi method logs a greeting to the console', () => {
		const spy = jest.spyOn(console, 'log');
		const user = createUser('John', 'Doe', 'admin');
		user.sayHi();
		expect(spy).toHaveBeenCalledWith('Hi, my name is John Doe. I am admin');
		spy.mockRestore();
	});
});
