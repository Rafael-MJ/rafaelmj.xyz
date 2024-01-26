import { updateEnabledArrows } from "../components/general/gen-arrows/gen-arrows.component";

export enum ScreensSide {
    Left,
    Right
}

export enum Screens {
    NotFound = 'notfound',
    Main = 'main',
    Knowledge = 'knowledge',
    Skills = 'skills',
    Info = 'infos',
    // Msg = 'msg'
}

const screenOrder = Object.values(Screens); // 'enum Screens' array (same declarated order).

let currentScreen: Screens = Screens.NotFound;

export class ScreenSupport {
    public static setCurrentScreen(screen : Screens) {
        currentScreen = screen;
        updateEnabledArrows();
    }

    public static getCurrentScreen() {
        return currentScreen;
    }

    public static getScreen(screen: Screens, side: ScreensSide) {
        let pScreenIndex = screenOrder.indexOf(screen);

        switch(side) {
            case ScreensSide.Left:
                pScreenIndex = pScreenIndex - 1;
                break;
            case ScreensSide.Right:
                pScreenIndex = pScreenIndex + 1;
                break;
        }
        return screenOrder[pScreenIndex] as string;
    }
}