
    const isWebView = () => {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/windows phone/i.test(userAgent)) {
            return false;
        }

        if (/android/i.test(userAgent)) {
            return false;
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return false;
        }

        return true;
    }

    const isAppView = () => {
        const isAndroid = typeof Android !== 'undefined' && Android && typeof Android.closeWindow === 'function';

        const isIOS =
        typeof window !== 'undefined' &&
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.closeAction &&
        typeof window.webkit.messageHandlers.closeAction.postMessage === 'function';

        const isApp =  isAndroid || isIOS

        return isApp;
    }

    const downloadButton = document.getElementById("download")
    const backButton = document.getElementById("back-btn-id")

    if(isWebView()) {
        // app view
        // remove back icon and add download icon

        downloadButton.classList.remove("display-none")
        backButton.classList.add("display-none")

    } else {
        // web view
        // remove download icon and add back icon

        downloadButton.classList.add("display-none");
        backButton.classList.remove("display-none");
    }
