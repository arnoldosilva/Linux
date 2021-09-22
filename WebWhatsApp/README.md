# How install Web WhatsApp on linux
## Install Nativefier
$ yarn global add nativefier
## Download Injection
[inj.js](inj.js)
## Run this command at same folder of [inj.js](inj.js)
$ nativefier \
-n "WhatsApp" \
--counter \
--darwin-dark-mode-support \
--enable-es3-apis \
--inject inj.js \
--single-instance \
--fast-quit \
--user-agent "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36" \
https://web.whatsapp.com
