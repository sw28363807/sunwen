/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//之后如果发现包体压力过大，可以将这几个文件进行压缩为 .min.js
loadLib("libs/crypto-js-0023890879.js");
loadLib("libs/jsencrypt-a1bbb46607.js");
loadLib("libs/crc32-9d926e26fd.js");
//-----libs-begin-----
loadLib("libs/laya-262735ebf4.core.js")
loadLib("libs/laya-c722e32317.ani.js")
loadLib("libs/laya-2c4559e411.ui.js")
loadLib("libs/protobuf-1c1d3db4e4.js")
loadLib("libs/protobuf-library-77f796b346.js")
loadLib("libs/protobuf-bundles-de201d8de5.js")
loadLib("libs/protobuf-bundles-net-a8bf81bdf6.js")
loadLib("libs/laya-2feced7143.wxmini.js")
//-----libs-end-------
loadLib("js/bundle-69daf72472.js");
