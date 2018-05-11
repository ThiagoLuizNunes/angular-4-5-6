import { Component } from '@angular/core';

@Component({
  selector: 'jedi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jedi';

  luke = { name: 'Luke', isJedi: true, temple: 'Coruscant' };
  solo = { name: 'Han Solo', isJedi: false };
  leia = { name: 'Leia', isJedi: false };

}
