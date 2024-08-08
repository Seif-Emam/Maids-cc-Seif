import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, NgClass, CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {

  @Input() control!: FormControl
  @Input() lable: string = '';
  @Input() type: string = '';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  

}
