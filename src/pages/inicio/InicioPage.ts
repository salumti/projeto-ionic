import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
class InicioPage {
  @ViewChild(Slides)
  slides: Slides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
}
