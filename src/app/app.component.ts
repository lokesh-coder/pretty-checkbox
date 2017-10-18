import { Component, OnInit } from '@angular/core';
import 'prismjs/prism';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import c from './code';

@Component({
  selector: 'doc-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  links = {} as any;
  fontIconLibraries = [];
  svgLibraries = [];

  ngOnInit(): any {
    this.fontIconLibraries = this.getFontIconLibraries();
    this.svgLibraries = this.getSvgLibraries();
  }
  getFontIconLibraries(): any {
    return [
      {
        name: 'Font awesome',
        code: 'checkbox_fonticon_fontawesome',
        link: 'http://fontawesome.io/icons/'
      },
      {
        name: 'Bootstrap Glyphicons',
        code: 'checkbox_fonticon_glyphicon',
        link: 'http://fontawesome.io/icons/'
      },
      {
        name: 'Material icon ( MDI )',
        code: 'checkbox_fonticon_mdi',
        link: 'https://materialdesignicons.com/'
      },
      {
        name: 'Material icon ( ZMDI )',
        code: 'checkbox_fonticon_zmdi',
        link: 'http://zavoloklom.github.io/material-design-iconic-font/icons.html'
      },
      {
        name: 'Typeicons',
        code: 'checkbox_fonticon_typcn',
        link: 'http://www.typicons.com/'
      },
      {
        name: 'Ion icons',
        code: 'checkbox_fonticon_ion',
        link: 'http://ionicons.com/'
      },
      {
        name: 'Material icon ( Google )',
        code: 'checkbox_fonticon_gmdi',
        link: 'https://material.io/icons'
      }
    ];
  }
  getSvgLibraries(): any {
    return [{
      name: 'UIKit',
      code: 'checkbox_svg_uikit',
      link: 'https://getuikit.com/docs/icon'
    }];
  }
  r(name): any {
    return c[name];
  }
  onRangeChange(e: any): void {
    const fs = e + 'em';
    document.getElementById('pretty-scale-test').style.fontSize = fs;
  }
}
