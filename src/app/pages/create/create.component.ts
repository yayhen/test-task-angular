import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { dateOfBirthValidator, datesOfStudingValidator } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  createNewUserForm!: FormGroup;
  educationYears: number[] = [];
  defaultYearStartEducation = 2010;
  defaulsYearFinishEducation = 2015;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    const currentYear = new Date().getFullYear();
    for(let i=1900; i<=currentYear+10; i++) {
      this.educationYears.push(i);
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createNewUserForm = this.fb.group({
      firstName: ['John', [Validators.required, Validators.minLength(2)]],
      lastName: ['Jones', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['1980-01-01', dateOfBirthValidator()],
      education: this.fb.array([
        this.fb.group({
          univercityName: [''],
          dateOfStart: [this.defaultYearStartEducation],
          dateOfFinish: [this.defaulsYearFinishEducation]
        }, {validator: datesOfStudingValidator()})
      ])
    })
  }

  getEducations(): FormArray {
    return this.createNewUserForm.controls['education'] as FormArray;
  }

  addUnivercity() {
    (<FormArray>this.createNewUserForm.controls['education']).push(this.fb.group({
      univercityName: [''],
      dateOfStart: [this.defaultYearStartEducation],
      dateOfFinish: [this.defaulsYearFinishEducation]
    }, {validator: datesOfStudingValidator()}));
  }

  deleteUniversity(index: number = 0) {
    (<FormArray>this.createNewUserForm.controls['education']).removeAt(index);
  }

  addNewUser() {
    //this.dataService.addNewUser(this.createNewUserForm.value)
    console.log(this.createNewUserForm.value);
  }

}
