import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { dateOfBirthValidator, datesOfStudingValidator } from 'src/app/shared/validators/validators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private dataService: DataService, private toastr: ToastrService, private router: Router) {
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
      login: ['user', [Validators.required, Validators.minLength(3)]],
      userType: ['user'],
      firstName: ['John', [Validators.required, Validators.minLength(2)]],
      lastName: ['Jones', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['1980-01-01', dateOfBirthValidator()],
      photo: [null],
      education: this.fb.array([
        
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
    this.dataService.addNewUser(this.createNewUserForm.value);
    this.toastr.success('New user has been created');
    this.router.navigate(['users']);
  }

  changePhotoPickerHandler(event: any) {
    let reader = new FileReader();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.createNewUserForm.patchValue({
          photo: reader.result
        });
      };
    }
  }
}