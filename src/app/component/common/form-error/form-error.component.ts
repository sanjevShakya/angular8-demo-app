import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-field',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css'],
})
export class FormErrorComponent {

  @Input() field: any;

  constructor() {

  }
}
