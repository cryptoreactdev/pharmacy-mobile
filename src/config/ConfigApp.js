//////////////////// CONFIG APP

import Constants from 'expo-constants';

const isStandAloneApp = Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url (with slash at end)
    // URL: "https://wicombit.com/demo/fitpro/",
    URL: "https://rdevsolutions.com/applications/pharmacy/",

    DEFAULTLANG: "en",

    THEMEMODE: "light", // light or dark

    // testdevice id, DON'T CHANGE IT
    TESTDEVICE_ID : isStandAloneApp ? "EMULATOR" : "EMULATOR"

};

export default ConfigApp;