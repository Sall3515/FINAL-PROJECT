import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../types/card';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Card[], text: string): Card[] {
    return value.filter((product) =>
      product.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}
