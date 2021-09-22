if (document.querySelector("a[href='https://support.google.com/chrome/answer/95414']")) navigator.serviceWorker.getRegistration().then(function (r) { r.unregister(); document.location.reload() });
