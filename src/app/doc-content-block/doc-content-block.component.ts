import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'doc-content-block',
  templateUrl: './doc-content-block.component.html',
  styleUrls: ['./doc-content-block.component.scss']
})
export class DocContentBlockComponent {

  @Input('heading') heading= '';
  @Input('tpl') tpl: TemplateRef<any>;

}
