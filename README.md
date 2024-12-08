# -worker.js
可维护worker.js
所有人都可共同维护worker.js为worker.js添砖加瓦
最新更新修复cloudflare vless免费节点1101错误解决方法vless代码混淆教学 解决1101报错
以 vless代码为例，演示js代码混淆，解决1101错误
如果想使用，我混淆好的vless代码，可以从此获取：[https://github.com/shiteThings/edgetunnel/blob/main/cmjs-obfs.js](https://github.com/xx805997768/-worker.js/blob/main/output.js)

确保你的系统已经安装了 Node.js。然后使用 npm 安装 JavaScript Obfuscator，安装时，最好开tun模式。

npm install -g javascript-obfuscator
安装完成后，可以通过命令行工具 javascript-obfuscator 使用它。

可以使用以下命令，进行js代码混淆和加密。注意，如果你的js文件名称不叫做input.js，需要将下面命令的input.js改成你的js文件名称。

javascript-obfuscator input.js --output output.js --compact true  --string-array true --string-array-encoding base64
最新版代码已经修复了1101错误代码
