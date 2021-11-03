import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  /*Creo un FormGroup para almacenar los datos que envie el usuario*/
  dataForm!: FormGroup;
  values: Array<String> = [];
  clicked: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group(
      {
        value: ["", Validators.required]
      }
    );
  }

  onSubmit() {
    /*Agrego el dato que ingreso el usuario al array*/
    this.values[this.values.length] = this.dataForm.value.value;
    this.onReset();
  }

  onReset() {
    this.dataForm.reset();
  }

  click() {
    if (!this.clicked) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }

}
