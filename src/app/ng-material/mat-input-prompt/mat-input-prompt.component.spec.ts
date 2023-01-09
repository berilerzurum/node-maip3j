import { TestBed } from '@angular/core/testing';
import { MatInputPromptComponent } from './mat-input-prompt.component';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MatInputPromptComponent', () => {
  let component: MatInputPromptComponent;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MatInputPromptComponent,
        FormBuilder,
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });

    component = TestBed.inject(MatInputPromptComponent);
    fb = TestBed.inject(FormBuilder);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form in ADD mode', () => {
    component.mode = 'ADD';
    component.initForm();
    expect(component.form).toBeDefined();
    expect(component.form.controls['name']).toBeDefined();
    expect(component.form.controls['surname']).toBeDefined();
    expect(component.form.controls['phone']).toBeDefined();
  });

  it('should initialize the form in EDIT mode with the correct data', () => {
    component.mode = 'EDIT';
    component.localData = { name: 'abc', surname: 'Def', phone: '1234567890' };
    component.initForm();
    expect(component.form).toBeDefined();
    expect(component.form.controls['name'].value).toEqual('abc');
    expect(component.form.controls['surname'].value).toEqual('Def');
    expect(component.form.controls['phone'].value).toEqual('1234567890');
  });

  it('should close the dialog when the close() method is called', () => {
    const spy = jest.spyOn(component.dialogRef, 'close');
    component.close(fb.group({}));
    expect(spy).toHaveBeenCalledWith({
      clicked: 'close',
      form: fb.group({})
    });
  });

  it('should submit the form and close the dialog when the submit() method is called', () => {
    const spy = jest.spyOn(component.dialogRef, 'close');
    component.submit(fb.group({}));
    expect(spy).toHaveBeenCalledWith({
      clicked: 'submit',
      form: fb.group({})
    });
  });
});
