import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'doc-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {

  showArrow = false;
  @HostListener('window:scroll', ['$event'])
  onWinScroll(e) {
    const winHeight = window.innerHeight;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    this.showArrow = scrolled > (winHeight / 2);
  }

  scrollToTop(): any {
    window.scrollTo(0, 0);
  }

}
