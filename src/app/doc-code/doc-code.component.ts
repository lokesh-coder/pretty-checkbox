import { Component, OnInit, Input } from '@angular/core';
import codes from '../code';

@Component({
  selector: 'doc-code',
  templateUrl: './doc-code.component.html',
  styleUrls: ['./doc-code.component.scss']
})
export class DocCodeComponent {

  @Input('code') set code(c){this.snippet = codes[c]; }
  @Input('lang') lang = 'markup';
  snippet= '';
  constructor() { }

}
