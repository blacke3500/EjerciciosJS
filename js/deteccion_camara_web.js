const d = document,
    n = navigator;

export function testWebCam(video){
    let media = n.mediaDevices.getUserMedia({
        audio : false,
        video : {
            width : 500, height: 250
        }
    });
    const $video = d.getElementById(video);

    media.then(function(mediaStream){
        $video.srcObject = mediaStream; //debido a que estamos recibiendo un objeto, lo pasamos mediante srcObject
        $video.play();
        
    })
    .catch(function(err){
        $video.insertAdjacentHTML("beforebegin",`<p><mark>${err}</mark></p>`)
        console.log("Ha ocurrido el siguiente error:", err.message);
    });
}