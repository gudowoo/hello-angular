import { Component } from '@angular/core';
import {User} from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '컴포넌트 분리';
  kim: User = {
    id: 1,
    name: 'kinam',
    age: 30,
    hobby : ['fishing', 'gamble', 'golf',undefined,'football'],
    address : '수원'
  };
}
