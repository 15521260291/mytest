import {Injectable, Renderer2} from '@angular/core';

@Injectable()
export class ControlFactory{
  constructor(private render: Renderer2) {
  }
  createElement(fieldType: string): any{
    let fieldControl = '';
    if (fieldType === 'input'){
      fieldControl = this.render.createElement('input');
    }else if (fieldType === 'select'){
      fieldControl = this.render.createElement('select');
    }else if (fieldType === 'checkBox'){
      fieldControl = this.render.createElement('input');
      this.render.setAttribute(fieldControl, 'type', fieldType);
    }else if (fieldType === 'radio'){
      fieldControl = this.render.createElement('input');
      this.render.setAttribute(fieldControl, 'type', fieldType);
    }else if (fieldType === 'textarea'){
      fieldControl = this.render.createElement('textarea');
    }
    return fieldControl;
  }
}
