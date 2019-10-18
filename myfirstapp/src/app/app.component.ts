import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myfirstapp';

  fruits=['apple','banana','orange']

  lists={ name : 'sai',
          number: 25366729,
          total: 567,
          grade: 'A'}
}
