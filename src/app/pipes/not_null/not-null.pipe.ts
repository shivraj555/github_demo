import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notNull',
})
export class NotNullPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? value : '--';
  }
}
