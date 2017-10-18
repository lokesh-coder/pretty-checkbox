import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'doc-collapse',
  templateUrl: './doc-collapse.component.html',
  styleUrls: ['./doc-collapse.component.scss']
})
export class DocCollapseComponent {

  @Input('before') before= '';
  @Input('after') after= '';
  show = false;

  constructor() { }

  reveal() {
    this.show = true;
  }

  hide() {
    this.show = false;
  }

}
