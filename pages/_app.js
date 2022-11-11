import '../styles/globals.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";

function MyApp({Component, pageProps}) {
    return <DevSupport ComponentPreviews={ComponentPreviews}
                       useInitialHook={useInitial}
    >
        <Component {...pageProps} />
    </DevSupport>
}

export default MyApp
