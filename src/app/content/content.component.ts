import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Todo} from '../model/Todo';
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() kim;

  userFromServer: object;

  todos: Array<Todo>;

  constructor(private userService: UserService,
              private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodos()
      .subscribe((res)=>{
        this.todos = res;
    })
  }
  btnclicked(){
    //this.userService.getAllUser();
    // this.userService.getUserDetail()
    //   .subscribe((res)=>{
    //     this.userFromServer = res;
    //   });
  }
}
