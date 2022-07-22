import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-simple-crud';

  // DEFAULT DATA.
  employeeArray : Employee[] = [
    {id:1, name: "Roy León", country: "México"},
    {id:2, name: "Name test 2", country: "Country test 2"},
    {id:3, name: "Name test 3", country: "Country test 3"},
  ]

  // NEW EMPLOYEE.
  selectedEmployee : Employee = new Employee();

  // FUNCTION.
  addOrEdit(){

    // ADD.
    if (this.selectedEmployee.id === 0) {
      
      if (this.selectedEmployee.name == undefined || this.selectedEmployee.country == undefined) {
        alert('Name and Country required');
      }else{
        // ATRIBUTE ID.
        this.selectedEmployee.id = this.employeeArray.length + 1;
        
        // ADD TO ARRAY.
        this.employeeArray.push(this.selectedEmployee);
      }

    }


    // CLEAN INPUTS.
    // this.selectedEmployee = new Employee();
    this.clean();

  }

  // FUNCTION GET employee OF TYPE Employee.
  openForEdit(employee: Employee){

    // FILL ARRAY.
    this.selectedEmployee = employee;
  }

  // FUNCTION.
  delete(){
    if (confirm('Are you sure you want to delete it?')) {
      // REMOVE ITEM OF ARRAY. (FIND AND DELETE IN THE ARRAY)
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      
      // CLEAN INPUTS.
      // this.selectedEmployee = new Employee();
      this.clean();
    }
  }
  
  // FUNCTION.
  clean(){
    // CLEAN INPUTS.
    this.selectedEmployee = new Employee();
  }
}
