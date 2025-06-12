import { Location } from 'react-router-dom';

export interface GlobalState {
    isPageLoaded: boolean;
    isCurtainVisible: boolean;
    isExitCompleted: boolean;
    displayedLocation: Location;
}
