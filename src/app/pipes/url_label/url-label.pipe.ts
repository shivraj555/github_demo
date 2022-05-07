import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlLabel',
})
export class UrlLabelPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    return this.ucwords(value.replaceAll('_', ' '));
  }

  ucwords(str: any) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }
}
