import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {

  scrollThreshold = 200;

  ngOnInit() {
    const scrollTop = document.getElementById('scroll-to-top');
    if (scrollTop !== null) {
      scrollTop.classList.add('hidden');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollTop = document.getElementById('scroll-to-top');
    if (scrollTop !== null) {
      if (scrollY > this.scrollThreshold) {
        scrollTop.classList.remove('hidden');
        scrollTop.classList.add('show');
      } else {
        scrollTop.classList.remove('show');
        scrollTop.classList.add('hidden');
      }
    }
  }
}






