function _0x434f(_0x5d869c,_0x2a6147){const _0x43fcce=_0x43fc();return _0x434f=function(_0x434f7d,_0x5934d1){_0x434f7d=_0x434f7d-0x17a;let _0x296ddb=_0x43fcce[_0x434f7d];return _0x296ddb;},_0x434f(_0x5d869c,_0x2a6147);}const _0x214f32=_0x434f;(function(_0x1d5eee,_0x7d0c0){const _0x598a6f=_0x434f,_0x1f1698=_0x1d5eee();while(!![]){try{const _0x3ef05d=-parseInt(_0x598a6f(0x189))/0x1+-parseInt(_0x598a6f(0x17c))/0x2+-parseInt(_0x598a6f(0x190))/0x3*(-parseInt(_0x598a6f(0x185))/0x4)+-parseInt(_0x598a6f(0x17d))/0x5*(parseInt(_0x598a6f(0x18a))/0x6)+parseInt(_0x598a6f(0x18e))/0x7+-parseInt(_0x598a6f(0x17e))/0x8*(parseInt(_0x598a6f(0x18f))/0x9)+parseInt(_0x598a6f(0x18d))/0xa;if(_0x3ef05d===_0x7d0c0)break;else _0x1f1698['push'](_0x1f1698['shift']());}catch(_0x8e3f24){_0x1f1698['push'](_0x1f1698['shift']());}}}(_0x43fc,0x21636));function _0x43fc(){const _0x59e944=['command','\x0a🎆️\x20*Episodes:*\x20','\x0a💚️\x20*Synopsis:*\x20','10048CYEmZw','936372NkhEdA','results','json','2474950eTxbMm','1716764kiWqsk','9LpWthq','3bVZsNd','node-fetch','/v3/search/anime','https://api.jikan.moe','\x0a❤️\x20*Score:*\x20','405142WCHaap','5aNRxed','1499312kVsxLo','tags','chat','\x0a💌️\x20*Rating:*\x20','sendFile','text','✨️\x20*Title:*\x20','800424nCBRPV'];_0x43fc=function(){return _0x59e944;};return _0x43fc();}let fetch=require(_0x214f32(0x191)),handler=async(_0x4ea289,{conn:_0x378324,text:_0x507a56})=>{const _0x32e2a9=_0x214f32;if(!_0x507a56)throw'Enter\x20a\x20query!';let _0x2c7306=await fetch(global['API'](_0x32e2a9(0x17a),_0x32e2a9(0x192),{'q':_0x507a56}));if(!_0x2c7306['ok'])throw await _0x2c7306[_0x32e2a9(0x183)]();let _0x2a5183=await _0x2c7306[_0x32e2a9(0x18c)](),{title:_0x148dc1,synopsis:_0x1b1d5b,episodes:_0x2c0c3e,url:_0x161928,rated:_0x92b891,score:_0x3819b8,image_url:_0x223252}=_0x2a5183[_0x32e2a9(0x18b)][0x0],_0x4727e2=_0x32e2a9(0x184)+_0x148dc1+_0x32e2a9(0x187)+_0x2c0c3e+_0x32e2a9(0x181)+_0x92b891+_0x32e2a9(0x17b)+_0x3819b8+_0x32e2a9(0x188)+_0x1b1d5b+'\x0a🌐️\x20*URL*:\x20'+_0x161928;_0x378324[_0x32e2a9(0x182)](_0x4ea289[_0x32e2a9(0x180)],_0x223252,'',_0x4727e2,_0x4ea289);};handler['help']=['anime\x20<title>'],handler[_0x214f32(0x17f)]=['anime'],handler[_0x214f32(0x186)]=/^(anime|animeinfo)$/i,module['exports']=handler;