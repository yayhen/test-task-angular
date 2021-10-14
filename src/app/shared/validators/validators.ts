import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function dateOfBirthValidator():ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    const minAge = 16;
    const maxAge = 120;
    if (!value) {
        return null;
    }
    const year = value.split('-')[0];
    let yearCorrect = true;
    if(year>new Date().getFullYear() - minAge || year < new Date().getFullYear() - maxAge) {
      yearCorrect = false;
    }

    const dateOfBirthCorrect = yearCorrect;
    return !dateOfBirthCorrect ? {dateOfBirthCorrect: true} : null;
  }
}

export function datesOfStudingValidator():ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const dateOfStart = parseInt(control.get('dateOfStart')?.value);
    const dateOfFinish = parseInt(control.get('dateOfFinish')?.value);
    let datesIsCorrect = true;
    if(!dateOfStart && !dateOfFinish) {
        return null;
    }
    if(dateOfStart && dateOfFinish) {
      if(dateOfStart>dateOfFinish) {
        datesIsCorrect = false;
      }
    }
    return !datesIsCorrect ? {datesIsCorrect: true} : null;
  }
}