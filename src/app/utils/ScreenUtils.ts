export enum ScreensSide {
    Left,
    Right
}

export enum Screens {
    Main = 'main',
    About = 'about',
    Knowledge = 'knowledge',
    Skills = 'skills',
    Info = 'infos',
    Curriculum = 'curriculum'
}

const screenOrder = Object.values(Screens); // 'enum Screens' array (same declarated order).

let currentScreen: Screens | null;

export class ScreenSupport {
    public static setCurrentScreen(screen : Screens | null) {
        currentScreen = screen;
    }

    public static getCurrentScreen() {
        return currentScreen;
    }

    public static getScreen(screen: Screens | null, side: ScreensSide) {
        let pScreenIndex: number;

        if (screen) {
            pScreenIndex = screenOrder.indexOf(screen);

            switch(side) {
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