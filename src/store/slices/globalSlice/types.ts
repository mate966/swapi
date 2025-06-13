import { Location } from 'react-router-dom';

export interface GlobalState {
    isPageLoaded: boolean;
    isIntroCompleted: boolean;
    isCurtainVisible: boolean;
    displayedLocation: Location;
}
