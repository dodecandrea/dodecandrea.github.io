let modulus = 0;
function setPoints(){
    document.querySelector("#link").innerText = ".".repeat((modulus % 5)+1);
    modulus ++;
}
let intervalId = setInterval(setPoints, 500)
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // Mobile device style: fill the whole browser client area with the game canvas:
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);

    var canvas = document.querySelector("#unity-canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.position = "fixed";

    document.body.style.textAlign = "left";
}

createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "Build/test.data",
    frameworkUrl: "Build/test.framework.js",
    codeUrl: "Build/test.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "dodecandrea.github.io",
    productName: "dodecandrea",
    productVersion: "0.1",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
}, function (progress) {
    //document.querySelector("#link").innerText = ".".repeat(Math.floor(progress * 10));
}).then(function (unityInstance) {
    setTimeout(() => {
    clearInterval(intervalId);
    document.querySelector("#unity-overlay").className = "show-overlay";
    document.querySelector("#link").className = "hidden";
    setTimeout(() => {
        document.querySelector("#link").innerHTML = "Listen to <img src='dodecandrea.ico' width=24 height=24/>";
        document.querySelector("#link").className = "show-overlay";
    }, 1000);
    }, 2000);
});