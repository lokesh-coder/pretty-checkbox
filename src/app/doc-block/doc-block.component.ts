import { Component, OnInit, ViewChild, ElementRef, Input, TemplateRef } from '@angular/core';

import codes from '../code';

@Component({
  selector: 'doc-block',
  templateUrl: './doc-block.component.html',
  styleUrls: ['./doc-block.component.scss']
})
export class DocBlockComponent implements OnInit {
  @Input('code') set code(c) { this.snippet = codes[c]; }
  @Input('heading') heading: string;
  @Input('action') action: TemplateRef<any>;
  @Input('info') info: TemplateRef<any>;
  @Input('lang') lang = 'markup';
  @Input('link') link;
  @Input('hideCodeLink') hideCodeLink = false;
  @ViewChild('codePlaceholder') codePlaceholder: ElementRef;
  openExample = false;
  snippet: string;

  ngOnInit() {
    this.codePlaceholder.nativeElement.innerHTML = this.snippet;
  }
  toggleDemoCode(): any {
    this.openExample = !this.openExample;
  }

}
