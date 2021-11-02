import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  dataForm!: FormGroup;

  values: Array<String> = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group(
      {
        value: ["", Validators.required]
      }
    );
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      return;
    }
      this.values[this.values.length] = this.dataForm.value.value;
      this.onReset();
  }

  onReset() {
    this.dataForm.reset();
  }

}
