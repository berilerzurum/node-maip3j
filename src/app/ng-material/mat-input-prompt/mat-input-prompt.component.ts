import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from '../../app.component';

@Component({
  selector: 'app-mat-input-prompt',
  templateUrl: './mat-input-prompt.component.html',
  styleUrls: ['./mat-input-prompt.component.scss'],
})
export class MatInputPromptComponent implements OnInit {
  form: FormGroup;
  localData: Person;
  public mode: string;

  constructor(
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Person,
    public dialogRef: MatDialogRef<MatInputPromptComponent>,
    @Inject(MAT_DIALOG_DATA) data2: { message: string },
  ) 
  {
  this.localData= {...data};
  }
  
  ngOnInit(): void{
console.log("ngonit içi" ,this.localData);
    this.initForm();
  }



  
  private initForm(){

    if(this.mode==="ADD"){
      this.form = this.fb.group({
        name: ['', Validators.required],
        surname: ['',Validators.required],
        phone: ['', Validators.required],
      });
    }
    
    else if(this.mode=== "EDIT")
    { this.form = this.fb.group({
      name: [this.localData.name, Validators.required],
      surname: [this.localData.surname,Validators.required],
      phone: [this.localData.phone, Validators.required],
    });
    }
    
  }



  submit(form: NgForm) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form,
    });
  }

  close(form: NgForm) {
    this.dialogRef.close({
      clicked: 'close',
      form:form,
    });
  }

}
