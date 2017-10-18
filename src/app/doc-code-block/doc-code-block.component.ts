import { Component, OnInit, Input } from '@angular/core';
import codes from '../code';

@Component({
  selector: 'doc-code-block',
  templateUrl: './doc-code-block.component.html',
  styleUrls: ['./doc-code-block.component.scss']
})
export class DocCodeBlockComponent {

  @Input('heading') heading = '';
  @Input('code') set code(c) { this.snippet = codes[c]; }
  @Input('lang') lang = 'scss';
  snippet = '';

}
