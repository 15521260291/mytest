import {
  AfterViewChecked,
  Component, ComponentFactoryResolver,
  DefaultIterableDiffer,
  DoCheck,
  Injectable,
  Injector,
  IterableDiffers,
  OnInit, Renderer2,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Exclude, Expose, plainToClass, plainToInstance, Transform, Type} from 'class-transformer';
import 'reflect-metadata';
import {ControlFactory} from './ControlFactory';
import {MyDDirective} from './my-d.directive';
import {InputComponent} from './input/input.component';

class Item{
  showName: string;
  fieldName: string;
  fieldType: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ControlFactory]
})
export class AppComponent implements OnInit, DoCheck, AfterViewChecked{
  private differ: DefaultIterableDiffer<any>;
  formObj: Array<Item> = [];
  item: Item = {
    showName: '',
    fieldName: '',
    fieldType: ''
  };

  @ViewChild('form', {static: true})
  form;

  @ViewChild(MyDDirective, {static: true}) adHost!: MyDDirective;

  formGroup = this.fb.group({
    name: []
  });

  constructor(
    private fb: FormBuilder,
    private differs: IterableDiffers,
    private render: Renderer2,
    private controlFactory: ControlFactory,
    private componentFactoryResolver: ComponentFactoryResolver,
  ){
  }
  ngOnInit(): void{
    this.differ = (this.differs.find(this.formObj).create() as DefaultIterableDiffer<any>);
  }

  confirm(): void{
    this.formObj.push(Object.assign({}, this.item));
    // console.log(this.formObj);
  }

  getFormValue(): void{
  console.log(this.formGroup.getRawValue());
}



  ngDoCheck(): void {
    const changes = this.differ.diff(this.formObj);

    if (changes != null){
      changes.forEachAddedItem(({item}) => {
        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        const temp = this.componentFactoryResolver.resolveComponentFactory(InputComponent);

        const componentRef = viewContainerRef.createComponent<InputComponent>(temp);
        componentRef.instance.formControlName = item.fieldName;

        // 创建formGroup
        const formControl = new FormControl();
        this.formGroup.addControl(item.fieldName, formControl);
      });
    }
    console.log(this.formObj, changes);
  }

  ngAfterViewChecked(): void{
    // console.log('123');
  }

}

