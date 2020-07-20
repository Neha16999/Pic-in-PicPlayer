const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream()
{
    try
    {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch(error)
    {
        console.log("Whoops error here", error);
    }
}

button.addEventListener('click',async() => {
    button.disabled = true;     //diables button
    //To start picture in Picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;


})

//onload 
selectMediaStream();