import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { dateOfBirthValidator, datesOfStudingValidator } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  id: string;
  info!: {firstName: string,
    lastName: string,
    dateOfBirth: string,
    education: any[],
    photo: string
  };
  editUserForm!: FormGroup;
  educationYears: number[] = [];
  defaultYearStartEducation = 2010;
  defaulsYearFinishEducation = 2015;
  isModalDialogVisible: boolean = false;
  isDeletingUserId: number = NaN;

  constructor(private activateRoute: ActivatedRoute, private dataService: DataService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.id = activateRoute.snapshot.params['id'];
    const currentYear = new Date().getFullYear();
    for(let i=1900; i<=currentYear+10; i++) {
      this.educationYears.push(i);
    }
  }

  async ngOnInit(): Promise<void> {
    this.info = await this.getUserInfo();
    this.initForm();
  }

  initForm() {
    this.editUserForm = this.fb.group({
      firstName: [this.info.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [this.info.lastName, [Validators.required, Validators.minLength(3)]],
      dateOfBirth: [this.info.dateOfBirth, dateOfBirthValidator()],
      photo: [this.info.photo],
      education: this.fb.array([
      ])
    });
    this.info.education.forEach((item) => {
      (<FormArray>this.editUserForm.controls['education']).push(this.fb.group({
        univercityName: [item.univercityName],
        dateOfStart: [item.dateOfStart],
        dateOfFinish: [item.dateOfFinish]
      }, {validator: datesOfStudingValidator()}));
    });
  }

  getUserInfo() {
    return this.dataService.getUser(this.id);
  }

  changePhotoPickerHandler(event: any) {
    let reader = new FileReader();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.editUserForm.patchValue({
          photo: reader.result
        });
      };
    }
  }

  getEducations(): FormArray {
    return this.editUserForm.controls['education'] as FormArray;
  }

  addUnivercity() {
    (<FormArray>this.editUserForm.controls['education']).push(this.fb.group({
      univercityName: [''],
      dateOfStart: [this.defaultYearStartEducation],
      dateOfFinish: [this.defaulsYearFinishEducation]
    }, {validator: datesOfStudingValidator()}));
  }

  deleteUniversity(index: number = 0) {
    (<FormArray>this.editUserForm.controls['education']).removeAt(index);
  }

  editUser() {
    this.dataService.updateUser(this.editUserForm.value, this.id);
    this.toastr.success('User has been updated');
    this.router.navigate(['users']);
  }

  deleteUser(id: number) {
    this.dataService.deleteUser(id);
    this.toastr.success('User has been deleted');
    this.router.navigate(['users']);
  }

  deleteUserButtonHandler(userId: string) {
    this.isModalDialogVisible = true;
    this.isDeletingUserId = parseInt(userId);
  }

  modalIsConfirmed(modalEvent: boolean) {
    if(modalEvent==true) {
      this.deleteUser(this.isDeletingUserId);
    }else {
      
    }
    this.isModalDialogVisible = false;
  }

}
