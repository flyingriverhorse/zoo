const loader = document.querySelector('.loader');

const id = [2436088, 1526909,3191352,854843, 2342260 ,856986, 1151329, 854066, 2555422, 854315, 855278];
const apiKey = '563492ad6f9170000100000105522448c64d46efa766410227d9a9cd';
const apiUrl = `https://api.pexels.com/videos/videos/`;


const randomItem = id[Math.floor(Math.random()*id.length)];



async function getVideo(id){
    //show loader
    
    try {
        // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const response = await fetch(apiUrl+id, {
            "method": "GET",
            "headers": {
                Accept: 'application/json',
                Authorization: `${apiKey}`
            }
        });
        const data = await response.json();
        document.getElementById('video').src = data.video_files[3].link;
        console.log(data.video_files);
    } catch(err) {
        //catch error here
        console.log(err);
    }
}


getVideo(randomItem);