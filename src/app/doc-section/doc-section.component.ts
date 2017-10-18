import { Component, OnInit, Input, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'doc-section',
  templateUrl: './doc-section.component.html',
  styleUrls: ['./doc-section.component.scss']
})
export class DocSectionComponent  {
  @Input('heading') heading = '';

}
