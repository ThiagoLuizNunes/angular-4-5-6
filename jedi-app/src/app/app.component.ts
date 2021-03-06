import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jedi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jedi';

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Han Solo', isJedi: false },
    { name: 'Leia', isJedi: false }
  ];
}
