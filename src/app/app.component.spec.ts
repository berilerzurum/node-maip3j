import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    dialog = jest.fn<MatDialog>(() => ({
      open: jest.fn().mockReturnValue({
        afterClosed: () => of({ clicked: 'submit' }),
      }),
    }));

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: MatDialog, useValue: dialog },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open a dialog box when the addnew method is called', () => {
    component.addnew();
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should update the dataSource when the delete method is called', () => {
    component.dataSource.data = [{ id: 1, name: 'Hydrogen', surname: 'aa', phone: 123 }];
    component.delete(0);
    expect(component.dataSource.data).toEqual([]);
  });

  it('should open a dialog box when the showPrompt method is called', () => {
    component.showPrompt({ id: 1, name: 'Hydrogen', surname: 'aa', phone: 123 }, 0);
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should set dataFromDialog to the form data when the submit method is called', () => {
    component.form = { value: { id: 1, name: 'Hydrogen', surname: 'aa', phone: 123 } } as any;
    component.submit();
    expect(component.dataFromDialog).toEqual({ id: 1, name: 'Hydrogen', surname: 'aa', phone: 123 });
  });
});