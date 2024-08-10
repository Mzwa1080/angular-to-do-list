import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  tasks = [{
    taskName : 'Brush Teeth', isCompleted: false
  }]

  onSubmit(form: NgForm){
    console.log(form);

    this.tasks.push({
      taskName:form.controls['task'].value,
      isCompleted : false
    })

  }

  onDelete( i:number){
    console.log('Deleted'+ i);
    console.log(this.tasks.splice(i,1));
    
  }


}
