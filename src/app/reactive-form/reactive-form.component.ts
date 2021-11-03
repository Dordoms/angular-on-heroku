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
  clickedValues: Array<boolean> = [];

  finish: boolean = false;
  count: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group(
      {
        value: ["", Validators.required],
        clicked: [false]
      }
    );
  }

  onSubmit() {
    /*Agrego el dato que ingreso el usuario al array*/
    this.values[this.values.length] = this.dataForm.value.value;
    this.clickedValues[this.clickedValues.length] = this.dataForm.value.clicked;
    this.onReset();
  }

  onReset() {
    this.dataForm.reset();
  }

  click(value: String) {
    if (!this.clickedValues[this.values.indexOf(value)]) {
      this.clickedValues[this.values.indexOf(value)] = true;
    } else {
      this.clickedValues[this.values.indexOf(value)] = false;
    }
  }

}
