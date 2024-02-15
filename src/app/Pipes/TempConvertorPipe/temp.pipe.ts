import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number | null): string {
    if (value === null || isNaN(value)) {
      return '';
    }

    const celsiusValue = ((value - 32) * 5) / 9;

    const roundedCelsius = Math.round(celsiusValue * 100) / 100;

    return `${roundedCelsius} °C`;
  }
}
