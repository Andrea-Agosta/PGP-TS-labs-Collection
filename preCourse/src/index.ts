type Address = {
  street: string,
  streetNo: number,
  city: string,
};

type Person = {
  name: string,
  birthYear: number,
  address: Address
};

interface IPerson {
  name: string,
  birthYear: number,
}

const greet = (name: string, birthYear: number): string => {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
};

const isOld = (age: number): boolean => age > 34;

const countOdd = (arrNumber: number[]): number => arrNumber.filter(number => number % 2 !== 0).length;

const sumEven = (arrNumber: number[]): number => arrNumber.filter(number => number % 2 === 0).reduce((a, b) => a + b, 0);

const getPersonStreetNo = (obj: Person): number => obj.address.streetNo;
class PersonClass {
  private name: string = '';

  birthYear: number = 1970;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getName() {
    return this.name;
  }
}
class EmployeeClass extends PersonClass {
  employeeId: number = -1;
}

const e = new EmployeeClass('Marcus Employee', 1972);

const p = new PersonClass('Marcus', 1972);

const getPersonNameString = (obj: IPerson): string => `${obj.name}, ${obj.birthYear}`;

const printThis = (p: Person | undefined | null) => {
  if (!p) { return 'no person supplied'; }
  return p.name;
};

// const optionallyAdd = (num1: number, num2: number, num3?: number, num4?: number, num5?: number) => {
//   let sum = num1 + num2;

//   if (num3 !== undefined) {
//     sum += num3;
//   }

//   if (num4) {
//     sum += num4;
//   }

//   sum += num5 ? num5 : 0;

//   return sum;
// }

const optionallyAdd = (num1: number, num2: number, num3: number = 0, num4: number = 0, num5: number = 0) => num1 + num2 + num3 + num4 + num5;

const greetPeople = (greeting: string, ...names: string[]) => `${greeting} ${names.join(' and ')}`.trim();

const addToStart = <T>(list: T[], itemToAdd: T): T[] => {
  return [itemToAdd, ...list];
}

class Wrapper<T> {
  private list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  public getFirst(): T { return this.list[0]; }
  public getLast(): T { return this.list[this.list.length - 1]; }
}

export {
  greet, isOld, countOdd, sumEven, Address, Person, getPersonStreetNo, PersonClass, EmployeeClass, IPerson,
  getPersonNameString, printThis, optionallyAdd, greetPeople, addToStart, Wrapper
};
