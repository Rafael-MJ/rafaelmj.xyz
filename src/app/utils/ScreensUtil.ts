import { updateEnabledArrows } from "../components/general/gen-arrows/gen-arrows.component";

export enum Screens {
    None,
    Main,
    Knowledge,
    Skills,
    Info,
    NotFound,
    // Msg
}

let currentScreen: Screens = Screens.None;

export class ScreenSupport {
    public static setCurrentScreen(screen : Screens) {
        currentScreen = screen;
        updateEnabledArrows();
    }

    public static getCurrentScreen() {
        return currentScreen;
    }
}