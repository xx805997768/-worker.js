const a0_0x57f0c7=a0_0x1903;(function(_0x55ccb4,_0x4c7fec){const _0x4f5be6=a0_0x1903,_0x538ce1=_0x55ccb4();while(!![]){try{const _0xdbc7b1=parseInt(_0x4f5be6(0xbf))/0x1+-parseInt(_0x4f5be6(0xb5))/0x2+-parseInt(_0x4f5be6(0xc2))/0x3*(parseInt(_0x4f5be6(0xac))/0x4)+parseInt(_0x4f5be6(0x8f))/0x5+-parseInt(_0x4f5be6(0xd2))/0x6+parseInt(_0x4f5be6(0xa6))/0x7*(-parseInt(_0x4f5be6(0xc3))/0x8)+-parseInt(_0x4f5be6(0x80))/0x9*(-parseInt(_0x4f5be6(0xb6))/0xa);if(_0xdbc7b1===_0x4c7fec)break;else _0x538ce1['push'](_0x538ce1['shift']());}catch(_0x347464){_0x538ce1['push'](_0x538ce1['shift']());}}}(a0_0x5d4a,0x2a45b));import{connect}from'cloudflare:sockets';let a0_0x5c34f6=a0_0x57f0c7(0x93),a0_0x3f39df=a0_0x57f0c7(0xa1);if(!a0_0x14d73e(a0_0x5c34f6))throw new Error('uuid\x20is\x20not\x20valid');export default{async 'fetch'(_0x2b9709,_0x50ef14,_0x3c2927){const _0x340fde=a0_0x57f0c7;try{a0_0x5c34f6=_0x50ef14[_0x340fde(0x89)]||a0_0x5c34f6,a0_0x3f39df=_0x50ef14[_0x340fde(0xba)]||a0_0x3f39df;const _0x58685f=_0x2b9709[_0x340fde(0xc9)]['get'](_0x340fde(0x91));if(!_0x58685f||_0x58685f!=='websocket'){const _0x45b729=new URL(_0x2b9709['url']);switch(_0x45b729[_0x340fde(0xce)]){case'/':return new Response(JSON[_0x340fde(0x92)](_0x2b9709['cf']),{'status':0xc8});case'/'+a0_0x5c34f6:{const _0x2f2b3c=a0_0x47a46b(a0_0x5c34f6,_0x2b9709[_0x340fde(0xc9)][_0x340fde(0x9a)](_0x340fde(0x95)));return new Response(''+_0x2f2b3c,{'status':0xc8,'headers':{'Content-Type':_0x340fde(0xc1)}});}default:return new Response(_0x340fde(0xb2),{'status':0x194});}}else return await a0_0x87b0cb(_0x2b9709);}catch(_0x443dab){let _0x58ac27=_0x443dab;return new Response(_0x58ac27[_0x340fde(0xaf)]());}}};async function a0_0x87b0cb(_0x2ec714){const _0x422c09=a0_0x57f0c7,_0x146b8b=new WebSocketPair(),[_0x5e84a6,_0x21cc90]=Object[_0x422c09(0xc8)](_0x146b8b);_0x21cc90[_0x422c09(0x9e)]();let _0xc035de='',_0x2b567d='';const _0x414d40=(_0x34d2c7,_0x165d1c)=>{const _0x19d6b9=_0x422c09;console[_0x19d6b9(0x85)]('['+_0xc035de+':'+_0x2b567d+']\x20'+_0x34d2c7,_0x165d1c||'');},_0x17442c=_0x2ec714['headers'][_0x422c09(0x9a)]('sec-websocket-protocol')||'',_0x504e41=a0_0x263c02(_0x21cc90,_0x17442c,_0x414d40);let _0x30f59c={'value':null},_0x627906=null,_0x324588=![];return _0x504e41['pipeTo'](new WritableStream({async 'write'(_0x392e03,_0x4597af){const _0x3f1329=_0x422c09;if(_0x324588&&_0x627906)return _0x627906(_0x392e03);if(_0x30f59c[_0x3f1329(0xcd)]){const _0x169a18=_0x30f59c[_0x3f1329(0xcd)][_0x3f1329(0xcb)][_0x3f1329(0xc5)]();await _0x169a18[_0x3f1329(0xab)](_0x392e03),_0x169a18[_0x3f1329(0x8e)]();return;}const {hasError:_0x5348dd,message:_0x5d0e40,portRemote:portRemote=0x1bb,addressRemote:addressRemote='',rawDataIndex:_0x2c2d5d,vlessVersion:vlessVersion=new Uint8Array([0x0,0x0]),isUDP:_0x1b4711}=a0_0x2c6ed1(_0x392e03,a0_0x5c34f6);_0xc035de=addressRemote,_0x2b567d=portRemote+'--'+Math['random']()+'\x20'+(_0x1b4711?_0x3f1329(0xc0):'tcp\x20')+'\x20';if(_0x5348dd){throw new Error(_0x5d0e40);return;}if(_0x1b4711){if(portRemote===0x35)_0x324588=!![];else{throw new Error(_0x3f1329(0xa7));return;}}const _0x4314cb=new Uint8Array([vlessVersion[0x0],0x0]),_0x125866=_0x392e03[_0x3f1329(0xb7)](_0x2c2d5d);if(_0x324588){const {write:_0xeff136}=await a0_0x3c618f(_0x21cc90,_0x4314cb,_0x414d40);_0x627906=_0xeff136,_0x627906(_0x125866);return;}a0_0x46d999(_0x30f59c,addressRemote,portRemote,_0x125866,_0x21cc90,_0x4314cb,_0x414d40);},'close'(){const _0x165077=_0x422c09;_0x414d40(_0x165077(0xbd));},'abort'(_0x2223a5){const _0x1ebffd=_0x422c09;_0x414d40(_0x1ebffd(0x84),JSON[_0x1ebffd(0x92)](_0x2223a5));}}))[_0x422c09(0xa0)](_0x1caf8f=>{const _0x1dd1c2=_0x422c09;_0x414d40(_0x1dd1c2(0x83),_0x1caf8f);}),new Response(null,{'status':0x65,'webSocket':_0x5e84a6});}function a0_0x5d4a(){const _0x2b3c8d=['Dgv4Dc9WBgfPBJTJAgfYC2v0pxv0zI04','mta3ndaWsxbuENDu','ody5mZzSqxLpDMC','y2XVC2u','z2v0v3jPDgvY','zxjYB3i','jMzWpxjHBMrVBwL6zwqMDhLWzt13CYzOB3n0pq','DMfSDwvZ','AgvHzgvYCW','cIaGBMv0D29YAZOGD3mkicb0Bhm6ihrYDwukicb1zha6igzHBhnLcIaGC25PoIa','D3jPDgfIBgu','uMvHzgfIBgvtDhjLyw0GD2fZignHBMnLBgvKlcbKDwuGDg8G','DMfSDwu','Cgf0Ag5HBwu','z2v0vwLUDde2','CgLWzvrV','ChvZAa','mZC2mZe0AhDSqNHA','CMvHzhLtDgf0zq','C2vHCMnO','mJi5mtiYzefHBun2','Aw52ywXPzcb1C2vY','CMv0CNKGDgnWu29JA2v0ignSB3nLzcbLCNjVCG','CMvHzgfIBgvxzwjtB2nRzxrtDhjLyw0GCgLWzvrVigvYCM9Y','CMvHzgfIBgvxzwjtB2nRzxrtDhjLyw0GAxmGywjVCNq','Bg9N','yNL0zuXLBMD0Aa','ywrKrxzLBNrmAxn0zw5LCG','yxbWBgLJyxrPB24Vzg5Zlw1LC3nHz2u','vvvjra','yNvMzMvY','y29TBwfUzca','zg9Oihn1y2nLC3mGyw5KigrUCYbTzxnZywDLigXLBMD0AcbPCYa','cIaGC2vYDMvYoIa','CMvSzwfZzuXVy2S','mJGYnJKWqunkqK5m','yxjYyxLcDwzMzxi','vxbNCMfKzq','C3rYAw5NAwz5','zJC4mdrIyMiTmdeZmY00yMvMltK5ztiTzMeZmZLInZq4nZy1','zg5ZihvKCcbOyxmGzxjYB3i','sg9ZDa','y2HHCKnVzgvbDa','D2vIu29JA2v0u2vYDMvYigHHCYbLCNjVCG','C3rHy2S','u3rYAw5NAwzPzwqGvvvjrcbPCYbPBNzHBgLK','z2v0','DMXLC3m6lY8','jNbHDgG9jtjgjtngzwqLm0qYmdq4iW','yxbWBhK','ywnJzxb0','y29UBMvJDgvKihrVia','y2f0y2G','zguUCMfKAwnHBgX5lNbYBW','kcGOlISPkYKRksSK','AM9PBG','oJq0mZ9LBMnYExb0Aw9Upw5VBMuMC2vJDxjPDhK9DgXZjNnUAt0','cIaGy2XPzw50lwzPBMDLCNbYAw50oIbJAhjVBwukicb3CY1VChrZoGOGicaGCgf0AdOGiI8/zwq9mJa0ocikicaGigHLywrLCNm6cIaGicaGigHVC3q6ia','mtC1yLjfyKX1','vurqihbYB3H5ig9UBhKGzw5HyMXLigzVCIbetLmGD2HPy2GGAxmGCg9YDca1mW','cIaGCg9YDdOGndqZcIaGDxvPzdOG','Dg9mB3DLCKnHC2u','igLZig5VDcbZDxbWB3j0lcbJB21Tyw5KidaXlxrJCcWWmI11zhaSmdmTBxv4','D3jPDgu','mtz2uMfou2q','cI0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0TlqOJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJcMnSyxnOlw1LDgekls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0TcI0GDhLWztOGDMXLC3mkicbUyw1LoIa','C2fMzunSB3nLv2vIu29JA2v0igvYCM9Y','Dg9tDhjPBMC','zw5XDwv1zq','CMvWBgfJzq','tM90igzVDw5K','zMLUywXSEq','ue9tva','mtiYmJC4AgTsthHI','mtqWDLvxBgTr','C2XPy2u','ywrKCMvZC1zHBhvLigLZigvTChr5lcbHzgrYzxnZvhLWzsbPCYa','Aw52ywXPzcbKyxrH','ufjpwfLjua','cI0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0TlqOJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJcG','Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq','CMvHzgfIBgvxzwjtB2nRzxrtDhjLyw0GAxmGy2XVC2u','C2vUza','mJK4otmWt0PuveDl','DwrWia'];a0_0x5d4a=function(){return _0x2b3c8d;};return a0_0x5d4a();}async function a0_0x46d999(_0x47aac1,_0x2b97b3,_0x559e02,_0x2c82af,_0x187c4f,_0x7c88e5,_0x11b2ec){async function _0x4079c0(_0x57c04d,_0x335bbe){const _0x2e13a6=a0_0x1903,_0x35871b=connect({'hostname':_0x57c04d,'port':_0x335bbe});_0x47aac1['value']=_0x35871b,_0x11b2ec(_0x2e13a6(0x9f)+_0x57c04d+':'+_0x335bbe);const _0x196bf7=_0x35871b[_0x2e13a6(0xcb)][_0x2e13a6(0xc5)]();return await _0x196bf7[_0x2e13a6(0xab)](_0x2c82af),_0x196bf7[_0x2e13a6(0x8e)](),_0x35871b;}async function _0x23f297(){const _0x32bc03=a0_0x1903,_0x1a2327=await _0x4079c0(a0_0x3f39df||_0x2b97b3,_0x559e02);_0x1a2327['closed'][_0x32bc03(0xa0)](_0x440a4a=>{const _0x2edd85=_0x32bc03;console['log'](_0x2edd85(0x82),_0x440a4a);})[_0x32bc03(0xb3)](()=>{a0_0x12b82b(_0x187c4f);}),a0_0x43cb65(_0x1a2327,_0x187c4f,_0x7c88e5,null,_0x11b2ec);}const _0x203096=await _0x4079c0(_0x2b97b3,_0x559e02);a0_0x43cb65(_0x203096,_0x187c4f,_0x7c88e5,_0x23f297,_0x11b2ec);}function a0_0x1903(_0x583f57,_0x422f2d){const _0x23ce22=a0_0x5d4a();return a0_0x1903=function(_0x5acf3d,_0x316f64){_0x5acf3d=_0x5acf3d-0x7f;let _0x5d4afd=_0x23ce22[_0x5acf3d];if(a0_0x1903['lcZMxr']===undefined){var _0x19034c=function(_0x5de8cc){const _0xd8e3bf='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x336198='',_0x5c34f6='',_0x3f39df=_0x336198+_0x19034c;for(let _0x87b0cb=0x0,_0x46d999,_0x263c02,_0x2c6ed1=0x0;_0x263c02=_0x5de8cc['charAt'](_0x2c6ed1++);~_0x263c02&&(_0x46d999=_0x87b0cb%0x4?_0x46d999*0x40+_0x263c02:_0x263c02,_0x87b0cb++%0x4)?_0x336198+=_0x3f39df['charCodeAt'](_0x2c6ed1+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x46d999>>(-0x2*_0x87b0cb&0x6)):_0x87b0cb:0x0){_0x263c02=_0xd8e3bf['indexOf'](_0x263c02);}for(let _0x43cb65=0x0,_0x49957c=_0x336198['length'];_0x43cb65<_0x49957c;_0x43cb65++){_0x5c34f6+='%'+('00'+_0x336198['charCodeAt'](_0x43cb65)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5c34f6);};a0_0x1903['WFfekk']=_0x19034c,_0x583f57=arguments,a0_0x1903['lcZMxr']=!![];}const _0x4c6f0c=_0x23ce22[0x0],_0x3a8bfe=_0x5acf3d+_0x4c6f0c,_0x215cab=_0x583f57[_0x3a8bfe];if(!_0x215cab){const _0x14d73e=function(_0x1615a8){this['NiuxTB']=_0x1615a8,this['JJcLgz']=[0x1,0x0,0x0],this['VVexgS']=function(){return'newState';},this['ikvXKg']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['KvZqHh']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x14d73e['prototype']['CouKnq']=function(){const _0x207c6b=new RegExp(this['ikvXKg']+this['KvZqHh']),_0x12b82b=_0x207c6b['test'](this['VVexgS']['toString']())?--this['JJcLgz'][0x1]:--this['JJcLgz'][0x0];return this['bznFsx'](_0x12b82b);},_0x14d73e['prototype']['bznFsx']=function(_0x5c49ea){if(!Boolean(~_0x5c49ea))return _0x5c49ea;return this['muzUPg'](this['NiuxTB']);},_0x14d73e['prototype']['muzUPg']=function(_0x490970){for(let _0x3c5c21=0x0,_0x3c618f=this['JJcLgz']['length'];_0x3c5c21<_0x3c618f;_0x3c5c21++){this['JJcLgz']['push'](Math['round'](Math['random']())),_0x3c618f=this['JJcLgz']['length'];}return _0x490970(this['JJcLgz'][0x0]);},new _0x14d73e(a0_0x1903)['CouKnq'](),_0x5d4afd=a0_0x1903['WFfekk'](_0x5d4afd),_0x583f57[_0x3a8bfe]=_0x5d4afd;}else _0x5d4afd=_0x215cab;return _0x5d4afd;},a0_0x1903(_0x583f57,_0x422f2d);}function a0_0x263c02(_0x4ada45,_0x1a4b52,_0x4066fa){let _0xa740d2=![];const _0x52bfaa=new ReadableStream({'start'(_0x2f2e6f){const _0x499e5d=a0_0x1903;_0x4ada45[_0x499e5d(0x87)]('message',_0x358632=>{const _0x2bebf0=_0x499e5d;if(_0xa740d2)return;const _0x356e36=_0x358632['data'];_0x2f2e6f[_0x2bebf0(0xb0)](_0x356e36);}),_0x4ada45[_0x499e5d(0x87)](_0x499e5d(0xc4),()=>{const _0x59b8a7=_0x499e5d;a0_0x12b82b(_0x4ada45);if(_0xa740d2)return;_0x2f2e6f[_0x59b8a7(0xc4)]();}),_0x4ada45[_0x499e5d(0x87)](_0x499e5d(0xc6),_0x3bc85a=>{const _0x5c3fc4=_0x499e5d;_0x4066fa(_0x5c3fc4(0x97)),_0x2f2e6f[_0x5c3fc4(0xc6)](_0x3bc85a);});const {earlyData:_0x10ff48,error:_0x13baa2}=a0_0x49957c(_0x1a4b52);if(_0x13baa2)_0x2f2e6f['error'](_0x13baa2);else _0x10ff48&&_0x2f2e6f[_0x499e5d(0xb0)](_0x10ff48);},'pull'(_0x1cc15d){},'cancel'(_0x34e1bd){const _0x3c6222=a0_0x1903;if(_0xa740d2)return;_0x4066fa(_0x3c6222(0xcc)+_0x34e1bd),_0xa740d2=!![],a0_0x12b82b(_0x4ada45);}});return _0x52bfaa;}function a0_0x2c6ed1(_0x328cfc,_0x4414be){const _0x5b999a=a0_0x57f0c7;if(_0x328cfc[_0x5b999a(0x86)]<0x18)return{'hasError':!![],'message':_0x5b999a(0xb9)};const _0x12ff3f=new Uint8Array(_0x328cfc[_0x5b999a(0xb7)](0x0,0x1));let _0x1c3757=![],_0x19bd91=![];a0_0x3c5c21(new Uint8Array(_0x328cfc[_0x5b999a(0xb7)](0x1,0x11)))===_0x4414be&&(_0x1c3757=!![]);if(!_0x1c3757)return{'hasError':!![],'message':_0x5b999a(0x81)};const _0xbb5a4d=new Uint8Array(_0x328cfc[_0x5b999a(0xb7)](0x11,0x12))[0x0],_0x3b39ec=new Uint8Array(_0x328cfc['slice'](0x12+_0xbb5a4d,0x12+_0xbb5a4d+0x1))[0x0];if(_0x3b39ec===0x1){}else{if(_0x3b39ec===0x2)_0x19bd91=!![];else return{'hasError':!![],'message':_0x5b999a(0x8b)+_0x3b39ec+_0x5b999a(0xaa)};}const _0x161f7f=0x12+_0xbb5a4d+0x1,_0x4e0931=_0x328cfc[_0x5b999a(0xb7)](_0x161f7f,_0x161f7f+0x2),_0x55ef41=new DataView(_0x4e0931)[_0x5b999a(0xcf)](0x0);let _0x1b818d=_0x161f7f+0x2;const _0x3a85d8=new Uint8Array(_0x328cfc[_0x5b999a(0xb7)](_0x1b818d,_0x1b818d+0x1)),_0x2c1b27=_0x3a85d8[0x0];let _0x9b8b9=0x0,_0x1b53e3=_0x1b818d+0x1,_0x3f5bfc='';switch(_0x2c1b27){case 0x1:_0x9b8b9=0x4,_0x3f5bfc=new Uint8Array(_0x328cfc[_0x5b999a(0xb7)](_0x1b53e3,_0x1b53e3+_0x9b8b9))[_0x5b999a(0xa3)]('.');break;case 0x2:_0x9b8b9=new Uint8Array(_0x328cfc[_0x5b999a(0xb7)](_0x1b53e3,_0x1b53e3+0x1))[0x0],_0x1b53e3+=0x1,_0x3f5bfc=new TextDecoder()['decode'](_0x328cfc[_0x5b999a(0xb7)](_0x1b53e3,_0x1b53e3+_0x9b8b9));break;case 0x3:_0x9b8b9=0x10;const _0x4e08f3=new DataView(_0x328cfc[_0x5b999a(0xb7)](_0x1b53e3,_0x1b53e3+_0x9b8b9)),_0x4f9ec0=[];for(let _0xa0bf0=0x0;_0xa0bf0<0x8;_0xa0bf0++){_0x4f9ec0[_0x5b999a(0xd1)](_0x4e08f3[_0x5b999a(0xcf)](_0xa0bf0*0x2)[_0x5b999a(0xaf)](0x10));}_0x3f5bfc=_0x4f9ec0[_0x5b999a(0xa3)](':');break;default:return{'hasError':!![],'message':'invild\x20\x20addressType\x20is\x20'+_0x2c1b27};}if(!_0x3f5bfc)return{'hasError':!![],'message':_0x5b999a(0xb8)+_0x2c1b27};return{'hasError':![],'addressRemote':_0x3f5bfc,'addressType':_0x2c1b27,'portRemote':_0x55ef41,'rawDataIndex':_0x1b53e3+_0x9b8b9,'vlessVersion':_0x12ff3f,'isUDP':_0x19bd91};}async function a0_0x43cb65(_0x2f850a,_0x568527,_0x144bd9,_0x52f64a,_0x41907e){const _0x36a877=a0_0x57f0c7;let _0x2f0278=0x0,_0x75e7d3=[],_0x1a33b6=_0x144bd9,_0x5a02ef=![];await _0x2f850a['readable'][_0x36a877(0xd0)](new WritableStream({'start'(){},async 'write'(_0x54064b,_0x487b73){const _0x3e9391=_0x36a877;_0x5a02ef=!![],_0x568527[_0x3e9391(0xd3)]!==a0_0x1615a8&&_0x487b73[_0x3e9391(0xc6)]('webSocket.readyState\x20is\x20not\x20open,\x20maybe\x20close'),_0x1a33b6?(_0x568527[_0x3e9391(0xbe)](await new Blob([_0x1a33b6,_0x54064b])['arrayBuffer']()),_0x1a33b6=null):_0x568527[_0x3e9391(0xbe)](_0x54064b);},'close'(){_0x41907e('remoteConnection!.readable\x20is\x20close\x20with\x20hasIncomingData\x20is\x20'+_0x5a02ef);},'abort'(_0x488f34){const _0x4a42b0=_0x36a877;console[_0x4a42b0(0xc6)]('remoteConnection!.readable\x20abort',_0x488f34);}}))[_0x36a877(0xa0)](_0x19b044=>{const _0x1bbf1a=_0x36a877;console[_0x1bbf1a(0xc6)]('remoteSocketToWS\x20has\x20exception\x20',_0x19b044[_0x1bbf1a(0x98)]||_0x19b044),a0_0x12b82b(_0x568527);}),_0x5a02ef===![]&&_0x52f64a&&(_0x41907e('retry'),_0x52f64a());}function a0_0x49957c(_0x37a9f5){const _0x28a8b1=a0_0x57f0c7;if(!_0x37a9f5)return{'error':null};try{_0x37a9f5=_0x37a9f5[_0x28a8b1(0xb1)](/-/g,'+')['replace'](/_/g,'/');const _0x1113f0=atob(_0x37a9f5),_0x4f7891=Uint8Array['from'](_0x1113f0,_0x4e2550=>_0x4e2550[_0x28a8b1(0x96)](0x0));return{'earlyData':_0x4f7891[_0x28a8b1(0x8a)],'error':null};}catch(_0x5b1622){return{'error':_0x5b1622};}}function a0_0x14d73e(_0x243487){const _0x5d3102=(function(){let _0xce0b2e=!![];return function(_0x56bb11,_0xace83){const _0x1b06d9=_0xce0b2e?function(){const _0x278763=a0_0x1903;if(_0xace83){const _0x1e0028=_0xace83[_0x278763(0x9d)](_0x56bb11,arguments);return _0xace83=null,_0x1e0028;}}:function(){};return _0xce0b2e=![],_0x1b06d9;};}()),_0x3de38e=_0x5d3102(this,function(){const _0x4de2ca=a0_0x1903;return _0x3de38e[_0x4de2ca(0xaf)]()[_0x4de2ca(0x7f)](_0x4de2ca(0xa2))[_0x4de2ca(0xaf)]()['constructor'](_0x3de38e)['search'](_0x4de2ca(0xa2));});_0x3de38e();const _0x50603b=/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;return _0x50603b['test'](_0x243487);}const a0_0x1615a8=0x1,a0_0x207c6b=0x2;function a0_0x12b82b(_0x4809eb){const _0x295174=a0_0x57f0c7;try{(_0x4809eb['readyState']===a0_0x1615a8||_0x4809eb[_0x295174(0xd3)]===a0_0x207c6b)&&_0x4809eb[_0x295174(0xc4)]();}catch(_0x40d92a){console[_0x295174(0xc6)](_0x295174(0xae),_0x40d92a);}}const a0_0x5c49ea=[];for(let a0_0x3e2795=0x0;a0_0x3e2795<0x100;++a0_0x3e2795){a0_0x5c49ea[a0_0x57f0c7(0xd1)]((a0_0x3e2795+0x100)['toString'](0x10)[a0_0x57f0c7(0xb7)](0x1));}function a0_0x490970(_0x359303,_0x46e928=0x0){const _0x5dd6e8=a0_0x57f0c7;return(a0_0x5c49ea[_0x359303[_0x46e928+0x0]]+a0_0x5c49ea[_0x359303[_0x46e928+0x1]]+a0_0x5c49ea[_0x359303[_0x46e928+0x2]]+a0_0x5c49ea[_0x359303[_0x46e928+0x3]]+'-'+a0_0x5c49ea[_0x359303[_0x46e928+0x4]]+a0_0x5c49ea[_0x359303[_0x46e928+0x5]]+'-'+a0_0x5c49ea[_0x359303[_0x46e928+0x6]]+a0_0x5c49ea[_0x359303[_0x46e928+0x7]]+'-'+a0_0x5c49ea[_0x359303[_0x46e928+0x8]]+a0_0x5c49ea[_0x359303[_0x46e928+0x9]]+'-'+a0_0x5c49ea[_0x359303[_0x46e928+0xa]]+a0_0x5c49ea[_0x359303[_0x46e928+0xb]]+a0_0x5c49ea[_0x359303[_0x46e928+0xc]]+a0_0x5c49ea[_0x359303[_0x46e928+0xd]]+a0_0x5c49ea[_0x359303[_0x46e928+0xe]]+a0_0x5c49ea[_0x359303[_0x46e928+0xf]])[_0x5dd6e8(0xa9)]();}function a0_0x3c5c21(_0x3c3461,_0x1afede=0x0){const _0x20899c=a0_0x57f0c7,_0x2bfca1=a0_0x490970(_0x3c3461,_0x1afede);if(!a0_0x14d73e(_0x2bfca1))throw TypeError(_0x20899c(0x99));return _0x2bfca1;}async function a0_0x3c618f(_0x241355,_0x178384,_0x2097a8){const _0x5817ae=a0_0x57f0c7;let _0x5c7d25=![];const _0x4938d6=new TransformStream({'start'(_0x59a0db){},'transform'(_0x1093fb,_0x190aa4){const _0x27a0f7=a0_0x1903;for(let _0x2ec6a1=0x0;_0x2ec6a1<_0x1093fb[_0x27a0f7(0x86)];){const _0x182889=_0x1093fb['slice'](_0x2ec6a1,_0x2ec6a1+0x2),_0x31f4c7=new DataView(_0x182889)[_0x27a0f7(0xcf)](0x0),_0x51f7ab=new Uint8Array(_0x1093fb['slice'](_0x2ec6a1+0x2,_0x2ec6a1+0x2+_0x31f4c7));_0x2ec6a1=_0x2ec6a1+0x2+_0x31f4c7,_0x190aa4['enqueue'](_0x51f7ab);}},'flush'(_0x2dee22){}});_0x4938d6['readable'][_0x5817ae(0xd0)](new WritableStream({async 'write'(_0x4b15ee){const _0x5c87d2=_0x5817ae,_0x2443e9=await fetch(_0x5c87d2(0xbc),{'method':_0x5c87d2(0xb4),'headers':{'content-type':_0x5c87d2(0x88)},'body':_0x4b15ee}),_0xcd654e=await _0x2443e9['arrayBuffer'](),_0x5b76ee=_0xcd654e[_0x5c87d2(0x86)],_0x235358=new Uint8Array([_0x5b76ee>>0x8&0xff,_0x5b76ee&0xff]);_0x241355[_0x5c87d2(0xd3)]===a0_0x1615a8&&(_0x2097a8(_0x5c87d2(0x8c)+_0x5b76ee),_0x5c7d25?_0x241355[_0x5c87d2(0xbe)](await new Blob([_0x235358,_0xcd654e])[_0x5c87d2(0x90)]()):(_0x241355[_0x5c87d2(0xbe)](await new Blob([_0x178384,_0x235358,_0xcd654e])[_0x5c87d2(0x90)]()),_0x5c7d25=!![]));}}))['catch'](_0x4c5d1a=>{const _0x2df5a6=_0x5817ae;_0x2097a8(_0x2df5a6(0x94)+_0x4c5d1a);});const _0x5a7790=_0x4938d6[_0x5817ae(0xcb)][_0x5817ae(0xc5)]();return{'write'(_0x593b22){const _0x9d7b2e=_0x5817ae;_0x5a7790[_0x9d7b2e(0xab)](_0x593b22);}};}function a0_0x47a46b(_0x3e1456,_0x56c55e){const _0xcfcd56=a0_0x57f0c7,_0xf2721f=_0xcfcd56(0x9b)+_0x3e1456+'@'+_0x56c55e+_0xcfcd56(0xa4)+_0x56c55e+_0xcfcd56(0xc7)+_0x56c55e+_0xcfcd56(0x9c)+_0x56c55e;return'\x0a################################################################\x0av2ray\x0a---------------------------------------------------------------\x0a'+_0xf2721f+_0xcfcd56(0xad)+_0x56c55e+_0xcfcd56(0x8d)+_0x56c55e+_0xcfcd56(0xa8)+_0x3e1456+_0xcfcd56(0xca)+_0x56c55e+_0xcfcd56(0xa5)+_0x56c55e+_0xcfcd56(0xbb);}
