import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insult'
})
export class InsultPipe implements PipeTransform {

  transform(value: string, insult: string): string {
    return `${value} is ${insult}`;
  }

}
