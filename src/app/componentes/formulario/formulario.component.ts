import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})



export class FormularioComponent implements OnInit {
  profileForm = this.fb.group({
    Name: ['', Validators.required],
    Email: ['',  [
          Validators.required,
          Validators.email,
        ]],
    Phone: ['',  [
      Validators.required,
      Validators.pattern(/^[0-9]\d*$/),
      ]],
    Message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  
  ngOnInit() {
  } 

  submit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value)
      alert("Thank you very much for contacting us, the information sent is: \n"+
      "The Name is:" + this.profileForm.value.Name +"\n" +
      "The Email  is:" + this.profileForm.value.Email +"\n" +
      "The Phone  is:" + this.profileForm.value.Phone +"\n" +
      "The Message  is:" + this.profileForm.value.Message +"\n" 
      )
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }
}


