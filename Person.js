class Person {
  constructor(first, last, email, company, physical, month, day, year) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.company = company;
    this.physical = physical;
    this.dob = `${month}/${day}/${year}`;
  }

  getFullName() {
    return `${this.first} ${this.last}`;
  }
}

function getValue() {
  return {
    first: document.getElementById('First').value,
    last: document.getElementById('Last').value,
    email: document.getElementById('Email').value,
    company: document.getElementById('Company').value,
    physical: document.getElementById('Physical').value,
    month: document.getElementById('Month').value,
    day: document.getElementById('Day').value,
    year: document.getElementById('Year').value
  };
}

let btnSubmit = document.getElementById('submit');
let table = document.getElementById('Table_Value');

btnSubmit.addEventListener('click', function (event) {
  event.preventDefault(); 

  let rawData = getValue();
  let person = new Person(
    rawData.first,
    rawData.last,
    rawData.email,
    rawData.company,
    rawData.physical,
    rawData.month,
    rawData.day,
    rawData.year
  );

  document.querySelector('.position-absolute').classList.remove('d-none');


  document.getElementById('user').style.display = 'none';

  let txt = `
    <tr>
      <td>${person.getFullName()}</td>
      <td>${person.email}</td>
      <td>${person.company}</td>
      <td>${person.physical}</td>
      <td>${person.dob}</td>
    </tr>
  `;
  table.insertAdjacentHTML("beforeend", txt);
});


// class Person {
//     constructor(first,last,email,company,physical,month,day,year){
//         this.first=first;
//         this.last=last;
//         this.email=email;
//         this.company=company;
//         this.physical=physical;
//         this.dob = `${month}/${day}/${year}`;

//     }
// };
 
// class Person {
//     constructor () {
//         this.id=1;
//         this.name='hour';
//         this.sex='Male';
//         this.age=19;
//     }
//     // constructor(id,name,sex,age){
//     //     this.id=id;
//     //     this.name=name;
//     //     this.sex=sex;
//     //     this.age=age;
//     // }
//     // constructor () {
        
//     // }
//     output(){
//         console.log('ID :',this.id);
//         console.log('NAME :',this.name);
//         console.log('SEX :',this.sex);
//         console.log('AGE :',this.age);
//     }
// }; 
// var person =new Person ();
// person.output();