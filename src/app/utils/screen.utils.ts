import { CurriculumComponent } from '../components/screens/curriculum/curriculum.component';
import { MainComponent } from '../components/screens/main/main.component';

export enum ScreensSide {
  Left,
  Right,
}

export enum Screens {
  Main = 'main',
  Curriculum = 'curriculum',
}

let currentScreen: Screens | null;

let currentComponent: MainComponent | CurriculumComponent;

export class ScreenSupport {
  public static setCurrentComponent(component: MainComponent | CurriculumComponent) {
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
}
