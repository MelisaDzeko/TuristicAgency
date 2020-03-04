import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}

  addForm: FormGroup;

  ngOnInit(){
    this.addForm=this.formBuilder.group({
      id:[],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      age:['',Validators.required]

    });
  }

  onSubmit(){
    console.log(this.addForm.value);
  }
}