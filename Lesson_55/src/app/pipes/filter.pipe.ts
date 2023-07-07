import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(users: any[], sort: string): any[] {
    if (sort === 'asc') {
      return users.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'desc') {
      return users.slice().sort((a, b) => b.name.localeCompare(a.name));
    }
    return users;
  }
}