import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrismComponent } from './prism/prism.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { DocBlockComponent } from './doc-block/doc-block.component';
import { DocSectionComponent } from './doc-section/doc-section.component';
import { DocCodeComponent } from './doc-code/doc-code.component';
import { DocCollapseComponent } from './doc-collapse/doc-collapse.component';
import { DocContentBlockComponent } from './doc-content-block/doc-content-block.component';
import { DocCodeBlockComponent } from './doc-code-block/doc-code-block.component';
import { DocHeaderComponent } from './doc-header/doc-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PrismComponent,
    BackToTopComponent,
    DocBlockComponent,
    DocCodeComponent,
    DocSectionComponent,
    DocCollapseComponent,
    DocCodeBlockComponent,
    DocContentBlockComponent,
    DocHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
