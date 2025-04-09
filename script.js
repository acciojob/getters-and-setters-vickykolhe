//complete this code
class Person {
	constructor(myname,myage){
		this._name=myname;
		this._age=myage;
	}

	  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
	constructor(myname,myage){
		super(myname,myage);
	}

	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(myname,myage){
		super(myname,myage);
	}

	teach(){
		console.log(`${this.name} is teaching`);
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
