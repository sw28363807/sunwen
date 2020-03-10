var CRC32;
(function (factory) {
	if(typeof DO_NOT_EXPORT_CRC === 'undefined') {
		if('object' === typeof exports) {
			factory(exports);
		} else if ('function' === typeof define && define.amd) {
			define(function () {
				var module = {};
				factory(module);
				return module;
			});
		} else {
			factory(CRC32 = {});
		}
	} else {
		factory(CRC32 = {});
	}
}(function(CRC32) {
CRC32 = {};
CRC32.version = '1.2.0';
function signed_crc_table() {
	var c = 0, table = new Array(256);

    var temp = 3988292384;
	for(var n =0; n != 256; ++n){
		c = n;
		c = ((c&1) ? (temp ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (temp ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (temp ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (temp ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (temp ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (temp ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (temp ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (temp ^ (c >>> 1)) : (c >>> 1));
		table[n] = c;
	}

	return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
}

var T = signed_crc_table();

function crc32_buf(data, seed) {
    var crc = -1;

    for(var i=0, l=data.length; i<l; i++)
    {
        crc = crc >>> 8 ^ T[ crc & 255 ^ data[i] ];
    }

    return (crc ^ -1) >>> 0;
}

CRC32.table = T;
CRC32.buf = crc32_buf;
window.CRC32 = CRC32;
}));

