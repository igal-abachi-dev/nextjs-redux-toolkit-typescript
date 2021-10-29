import '../styles/globals.scss';

import type {AppProps} from 'next/app';

import {Provider} from 'react-redux';
import {AppContextProvider} from '../state/AppContextProvider';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <AppContextProvider>
            <Component {...pageProps} />
        </AppContextProvider>
    )
}

export default MyApp;
