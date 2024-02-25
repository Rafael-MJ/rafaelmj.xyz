import { ScrCurriculumComponent } from '../components/screens/scr-curriculum/scr-curriculum.component';
import { ScrMainComponent } from '../components/screens/scr-main/scr-main.component';

export enum ScreensSide {
  Left,
  Right,
}

export enum Screens {
  Main = 'main',
  Curriculum = 'curriculum',
}

const screenOrder = Object.values(Screens); // 'enum Screens' array (same declarated order).

let currentScreen: Screens | null;
let currentComponent: ScrMainComponent | ScrCurriculumComponent;

export class ScreenSupport {
  public static setCurrentComponent(component: ScrMainComponent | ScrCurriculumComponent) {
    currentComponent = component;
  }

  public static getCurrentComponent() {
    return currentComponent;
  }

  public static setCurrentScreen(screen: Screens | null) {
    currentScreen = screen;
  }

  public static getCurrentScreen() {
    return currentScreen;
  }

  public static getScreen(screen: Screens | null, side: ScreensSide) {
    let pScreenIndex: number;

    if (screen) {
      pScreenIndex = screenOrder.indexOf(screen);

      switch (side) {
        case ScreensSide.Left:
          pScreenIndex = pScreenIndex - 1;
          break;
        case ScreensSide.Right:
          pScreenIndex = pScreenIndex + 1;
          break;
      }
      return screenOrder[pScreenIndex] as string;
    } else {
      return null;
    }
  }
}
