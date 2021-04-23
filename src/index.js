import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_en from "./translation/en/common.json";
import common_in from "./translation/in/common.json";
import common_pk from "./translation/pk/common.json";
import common_bd from "./translation/bd/common.json";


i18next.init({
    whitelist: ['en', 'in', 'pk', 'bd'],
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        bd: {
            common: common_bd
        },
        in: {
            common: common_in
        },
        pk: {
            common: common_pk
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>,
    document.getElementById('root')
);
