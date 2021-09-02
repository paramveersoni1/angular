import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  formdata:FormGroup;
  constructor(private fb: FormBuilder) { }
  onClickSubmit(data) {
      if(this.formdata.invalid)
     {
      
    this.formdata.get('description').markAsTouched();
    
    }
  }
  ngOnInit(): void {
  this.formdata = this.fb.group({
            description: ['', [Validators.required,
              Validators.maxLength(400), Validators.minLength(5)]]
        });
  }

}
