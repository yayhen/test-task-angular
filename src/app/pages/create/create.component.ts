import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  createNewUserForm!: FormGroup;
  

  constructor(private fb: FormBuilder, private dataService: DataService) {
   }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createNewUserForm = this.fb.group({
      firstName: ['John', [Validators.required, Validators.minLength(2)]],
      lastName: ['Jones', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: [''],
      education: this.fb.array([
        this.fb.group({
          univercityName: [''],
           dateOfStart: [''],
           dateOfFinish: ['']
        })
      ])
    })
  }

  getEducations(): FormArray {
    return this.createNewUserForm.controls['education'] as FormArray;
  }

  addUnivercity() {
    (<FormArray>this.createNewUserForm.controls['education']).push(this.fb.group({univercityName: ['']}))
  }

  addNewUser() {
    //this.dataService.addNewUser(this.createNewUserForm.value)
    console.log(this.createNewUserForm.value);
  }

}
