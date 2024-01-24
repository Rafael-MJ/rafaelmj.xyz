import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { currentComponent } from 'src/app/app.component';

let lockLeftArrow = false;
let lockRightArrow = false;

export const setArrowState = (index: number, enabled: boolean) => {
  switch (index) {
    case 0: lockLeftArrow = enabled; break;
    case 1: lockRightArrow = enabled; break;
  }
}

@Component({
  selector: 'app-gen-arrows',
  templateUrl: './gen-arrows.component.html',
  styleUrl: './gen-arrows.component.css'
})

export class GenArrowsComponent {

  constructor(private router: Router) { }

  ngAfterContentChecked() {
    if(lockLeftArrow && lockRightArrow) {
      document.getElementById('left-arrow')?.setAttribute("disabled", "true");
      document.getElementById('right-arrow')?.setAttribute("disabled", "true");
    } else if (lockLeftArrow) {
      document.getElementById('left-arrow')?.setAttribute("disabled", "true");
    } else if (lockRightArrow) {
      document.getElementById('right-arrow')?.setAttribute("disabled", "true");
    } else {
      document.getElementById('left-arrow')?.removeAttribute("disabled");
      document.getElementById('right-arrow')?.removeAttribute("disabled");
    }
  }

  newRoute(route: string) {
    this.router.navigate(['/'+route]);
  }

  onClickArrow(index: number) {
    if (index == 0) {
      switch (currentComponent) {
        case '_ScrKnowledgeComponent': this.newRoute('main'); break;
        case '_ScrSkillsComponent': this.newRoute('knowledge'); break;
        case '_ScrInfoComponent': this.newRoute('skills'); break;
      }
    } else if(index == 1) {
      switch (currentComponent) {
        case '_ScrMainComponent': this.newRoute('knowledge'); break;
        case '_ScrKnowledgeComponent': this.newRoute('skills'); break;
        case '_ScrSkillsComponent': this.newRoute('infos'); break;
      }
    }
  }
}
