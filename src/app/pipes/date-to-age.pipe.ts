import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToAge'
})
export class DateToAgePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const currentYear = new Date().getFullYear();
    const yearOfBirth = parseInt(value.split('-')[0]);
    return (currentYear-yearOfBirth).toString();
  }

}
