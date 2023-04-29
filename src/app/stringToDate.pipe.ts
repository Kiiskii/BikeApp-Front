import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToDate',
})
export class StringToDatePipe implements PipeTransform {
  transform(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
