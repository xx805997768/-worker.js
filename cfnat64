// GPT藏头诗·节点云
// 古来节点若浮云，平生只在 Workers 君。
// Tunnel 一径通明月，信息悄然出 app 间。

import { connect } from 'cloudflare:sockets'

// 天涯咫尺·隧道密钥与转发主机
let tunnelKey = '6f55f6c1-3575-45fa-9bdf-2b5654185f4a';         // <--- 建议用环境变量
let relayHost = 'proxyip.cmliussss.net';                        // <--- 可以用环境变量

// 雨后清风·判断口令正则
function 雨后清风(tk) {
  const reg = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return reg.test(tk);
}
if (!雨后清风(tunnelKey)) throw new Error('tunnelKey非法');

// 风起云涌·总控
export default {
  async fetch(晨霜初照, 芸窗琴书, 波光万顷) {
    tunnelKey = 芸窗琴书.TUNNEL_KEY || tunnelKey;
    relayHost = 芸窗琴书.RELAY_HOST || relayHost;
    const 风入松 = 晨霜初照.headers.get('Upgrade');
    if (!风入松 || 风入松 !== 'websocket') {
      const 竹影疏斜 = new URL(晨霜初照.url);
      switch (竹影疏斜.pathname) {
        case '/':
          return new Response('风起云涌 只在此 Worker 云中。', { status:200 });
        case '/app': {
          const host = 晨霜初照.headers.get('Host');
          return new Response(泉石清音(tunnelKey, host), {
              status: 200,
              headers: { "Content-Type": "text/plain;charset=utf-8" }
          });
        }
        default:
          return new Response('诗尽云归', { status: 404 });
      }
    } else {
      return await 月映寒江(晨霜初照);
    }
  },
}

// /app输出节点信息（只有常规节点，不包含NAT64专用）
function 泉石清音(key, host) {
  const isWorkers = /\.workers\.dev$/.test(host);
  const port = isWorkers ? 80 : 443;
  const tls = isWorkers ? 'false' : 'true';
  const proto = 'vless';
  const security = isWorkers ? '' : '&security=tls';
  const wsPath = '/?ed=2048';
  return `节点链接:
${proto}://${key}@${host}:${port}?encryption=none&type=ws&host=${host}&path=${wsPath}${security}
节点口令: ${key}
TLS: ${tls}
WebSocket路径: ${wsPath}

通往世界之门 https://js.do/xx5201314/vessl
`
}


// 云游江湖·WebSocket主控诗流
async function 月映寒江(晴川历历) {
  const pair = new WebSocketPair();
  const [粼粼水面, 潇潇雨歇] = Object.values(pair);
  潇潇雨歇.accept();
  let 江南烟水 = '';
  let 芦苇随风 = '';
  const log = (诗句, 竹林) => console.log(`[${江南烟水}:${芦苇随风}] ${诗句}`, 竹林 || '');
  const 云起时 = 晴川历历.headers.get('sec-websocket-protocol') || '';
  const 诗流 = 水墨流觞(潇潇雨歇, 云起时, log);
  let 临水高楼 = { value: null };
  let udpStreamWrite = null;
  let isDns = false;
  诗流.pipeTo(new WritableStream({
    async write(霓裳羽衣, controller) {
      if (isDns && udpStreamWrite) return udpStreamWrite(霓裳羽衣)
      if (临水高楼.value) {
        const writer = 临水高楼.value.writable.getWriter();
        await writer.write(霓裳羽衣);
        writer.releaseLock();
        return
      }
      const { hasError, message, portRemote=443, addressRemote='', rawDataIndex, tunnelVersion=new Uint8Array([0,0]), isUDP } = 花间一壶酒(霓裳羽衣, tunnelKey)
      江南烟水 = addressRemote; 芦苇随风 = `${portRemote}--${Math.random()} ${isUDP?'udp ':'tcp '}`
      if (hasError) throw new Error(message)
      if (isUDP) {
        if (portRemote === 53) isDns = true
        else throw new Error('UDP仅支持DNS')
      }
      const tunnelResponseHeader = new Uint8Array([tunnelVersion[0],0]);
      const rawClientData = 霓裳羽衣.slice(rawDataIndex);
      if (isDns) {
        const { write } = await 山川久远(潇潇雨歇, tunnelResponseHeader, log);
        udpStreamWrite = write
        udpStreamWrite(rawClientData)
        return
      }
      江湖夜雨(临水高楼, addressRemote, portRemote, rawClientData, 潇潇雨歇, tunnelResponseHeader, log)
    },
    close() { log('诗流终闭') },
    abort(reason) { log('诗流终止', JSON.stringify(reason)) },
  })).catch(err => {
    log('诗流pipeTo出错', err)
  })
  return new Response(null, { status:101, webSocket:粼粼水面 })
}

// 断雁西风·流包装
function 水墨流觞(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false
  const stream = new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener('message', (event) => {
        if (readableStreamCancel) return
        controller.enqueue(event.data)
      })
      webSocketServer.addEventListener('close', () => {
        safeCloseWebSocket(webSocketServer)
        if (readableStreamCancel) return
        controller.close()
      })
      webSocketServer.addEventListener('error', (err) => {
        log('webSocketServer has error'); controller.error(err)
      })
      const { earlyData, error } = 天光云影(earlyDataHeader)
      if (error) controller.error(error)
      else if (earlyData) controller.enqueue(earlyData)
    },
    cancel(reason) {
      if (readableStreamCancel) return
      log(`ReadableStream was canceled, due to ${reason}`)
      readableStreamCancel = true
      safeCloseWebSocket(webSocketServer)
    }
  })
  return stream
}

// 芳草天涯·VLESS头解析
function 花间一壶酒(buffer, tk) {
  if (buffer.byteLength < 24) return {hasError:true, message:'invalid data'}
  const version = new Uint8Array(buffer.slice(0, 1))
  let ok = false
  if (玄玉雕弓(new Uint8Array(buffer.slice(1, 17))) === tk) ok = true
  if (!ok) return {hasError:true, message:'非法口令'}
  const optLength = new Uint8Array(buffer.slice(17,18))[0]
  const command = new Uint8Array(buffer.slice(18+optLength, 18+optLength+1))[0]
  let isUDP = (command === 2)
  const portIndex = 18 + optLength + 1
  const portRemote = new DataView(buffer.slice(portIndex, portIndex+2)).getUint16(0)
  let addressIndex = portIndex+2
  const addressType = new Uint8Array(buffer.slice(addressIndex, addressIndex+1))[0]
  let addressValueIndex = addressIndex + 1
  let addressValue = ''
  switch (addressType) {
    case 1: addressValue = new Uint8Array(buffer.slice(addressValueIndex,addressValueIndex+4)).join('.'); break
    case 2:
      const n = new Uint8Array(buffer.slice(addressValueIndex, addressValueIndex+1))[0]
      addressValueIndex += 1
      addressValue = new TextDecoder().decode(buffer.slice(addressValueIndex, addressValueIndex+n))
      break
    case 3:
      const dv = new DataView(buffer.slice(addressValueIndex, addressValueIndex+16))
      const ipv6 = []
      for(let i=0; i<8; i++) ipv6.push(dv.getUint16(i*2).toString(16))
      addressValue = ipv6.join(':')
      break
    default: return {hasError:true, message:'未知地址类型'}
  }
  return {
    hasError:false, addressRemote:addressValue, addressType,
    portRemote, rawDataIndex: addressValueIndex + (
      addressType==2 ? (new Uint8Array(buffer.slice(addressValueIndex-1,addressValueIndex))[0])
      : (addressType==1?4:16)
    ),
    tunnelVersion: version, isUDP
  }
}

// TCP出口，若目标为NAT64入口则强制relayHost，其余逻辑不变
async function 江湖夜雨(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, tunnelResponseHeader, log) {
  async function connectAndWrite(address, port) {
    const tcpSocket = connect({hostname: address, port});
    remoteSocket.value = tcpSocket
    log(`connected to ${address}:${port}`)
    const writer = tcpSocket.writable.getWriter()
    await writer.write(rawClientData)
    writer.releaseLock()
    return tcpSocket
  }
  async function retry() {
    const tcpSocket = await connectAndWrite(relayHost || addressRemote, portRemote)
    tcpSocket.closed.catch(error => {console.log('retry tcpSocket closed error', error)})
      .finally(()=>{safeCloseWebSocket(webSocket)})
    千里江陵(tcpSocket, webSocket, tunnelResponseHeader, null, log)
  }

  if (addressRemote === "2602:fc59:b0:64::") {
    // 只要是NAT64入口，都强制 relayHost 出口
    const tcpSocket = await connectAndWrite(relayHost, portRemote)
    千里江陵(tcpSocket, webSocket, tunnelResponseHeader, null, log)
    return
  }

  // 其余目标标准优先直连再fallback
  const tcpSocket = await connectAndWrite(addressRemote, portRemote)
  千里江陵(tcpSocket, webSocket, tunnelResponseHeader, retry, log)
}

// 碧落黄泉·socket转WS
async function 千里江陵(remoteSocket, webSocket, tunnelResponseHeader, retry, log) {
  let vlessHeader=tunnelResponseHeader
  let hasIncomingData=false
  await remoteSocket.readable.pipeTo(new WritableStream({
    async write(chunk, controller) {
      hasIncomingData = true
      if(webSocket.readyState !== 1) controller.error('webSocket未开启,可能关闭')
      if(vlessHeader) {
        webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer())
        vlessHeader = null
      } else {
        webSocket.send(chunk)
      }
    },
    close() { log('socket.readable关闭', hasIncomingData) },
    abort(reason) { console.error('socket.readable异常', reason) }
  })).catch((error)=>{
    console.error("千里江陵异常", error.stack || error)
    safeCloseWebSocket(webSocket)
  })
  if(hasIncomingData===false && retry) {
    log('尝试重试')
    retry()
  }
}

// base64转arraybuffer
function 天光云影(base64Str) {
  if (!base64Str) return { error:null }
  try {
    base64Str = base64Str.replace(/-/g,'+').replace(/_/g,'/')
    const decode = atob(base64Str)
    const arryBuffer = Uint8Array.from(decode, c => c.charCodeAt(0))
    return {earlyData: arryBuffer.buffer, error:null}
  } catch(error) {
    return { error }
  }
}

// UDP-DNS转DOH
async function 山川久远(webSocket, tunnelResponseHeader, log) {
  let isTunnelHeaderSent=false
  const transformStream = new TransformStream({
    transform(chunk, controller){
      for(let i=0; i<chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(i,i+2)
        const udpLength = new DataView(lengthBuffer).getUint16(0)
        const udpData = new Uint8Array(chunk.slice(i+2, i+2+udpLength))
        controller.enqueue(udpData)
        i+=2+udpLength
      }
    }
  })
  transformStream.readable.pipeTo(new WritableStream({
    async write(chunk) {
      const resp = await fetch("https://1.1.1.1/dns-query", {
        method:'POST', headers:{'content-type':'application/dns-message'}, body:chunk
      })
      const dnsQuery = await resp.arrayBuffer()
      const udpSize = dnsQuery.byteLength
      const udpSizeBuffer = new Uint8Array([(udpSize>>8)&0xff, udpSize&0xff])
      if (webSocket.readyState===1) {
        log(`DOH成功,dns长度:${udpSize}`)
        if(isTunnelHeaderSent){
          webSocket.send(await new Blob([udpSizeBuffer, dnsQuery]).arrayBuffer())
        }else{
          webSocket.send(await new Blob([tunnelResponseHeader, udpSizeBuffer, dnsQuery]).arrayBuffer())
          isTunnelHeaderSent = true
        }
      }
    }
  })).catch(error=>log('dns udp异常'+error))
  const writer = transformStream.writable.getWriter()
  return { write(chunk) { writer.write(chunk) } }
}

// uuid转字符串
const byteToHex=[]
for(let i=0;i<256;++i) byteToHex.push((i+256).toString(16).slice(1))
function 玄玉雕弓(arr, offset=0){
  return (byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+ "-" +byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+ "-" +byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+ "-" +byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+ "-" +byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()
}
function stringify(arr, offset=0) {
  const uuid = 玄玉雕弓(arr, offset)
  if (!雨后清风(uuid)) throw TypeError("Stringified tunnelKey非法")
  return uuid
}
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === 1 || socket.readyState === 2) socket.close()
  } catch (error) { console.error('safeCloseWebSocket error', error) }
}
