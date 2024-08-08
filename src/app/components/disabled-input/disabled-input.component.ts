import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-disabled-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './disabled-input.component.html',
  styleUrl: './disabled-input.component.css'
})
export class DisabledInputComponent {

  @Input()control!:FormControl
  @Input() lable: string = '';
  @Input() type: string = '';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() value: any = ''

}
