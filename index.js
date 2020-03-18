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
loadLib("libs/laya-a57c5d9b49.ani.js")
loadLib("libs/laya-2c4559e411.ui.js")
loadLib("libs/protobuf-1c1d3db4e4.js")
loadLib("libs/protobuf-library-77f796b346.js")
loadLib("libs/protobuf-bundles-abd552a82a.js")
loadLib("libs/protobuf-bundles-net-557bddcdeb.js")
loadLib("libs/laya-2feced7143.wxmini.js")
//-----libs-end-------
loadLib("js/bundle-c8d6e68793.js");
