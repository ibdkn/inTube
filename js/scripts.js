// Data
data = [
    {
        id: 1,
        category: 'Education Videos',
        videos: [
            {
                videoId: 1,
                title: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
                fileUrl: 'https://www.youtube.com/embed/bmHZ-YQBWNA?si=WD2hFStYPG_b0MZH',
                videoChannel: 'It-Kamasutra',
                publicationDate: '1 week ago',
                live: true,
            },
            {
                videoId: 2,
                title: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
                fileUrl: 'https://www.youtube.com/embed/bmHZ-YQBWNA?si=WD2hFStYPG_b0MZH',
                videoChannel: 'It-Kamasutra',
                publicationDate: '1 week ago',
                live: false,
            },
            {
                videoId: 2,
                title: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
                fileUrl: 'https://www.youtube.com/embed/bmHZ-YQBWNA?si=WD2hFStYPG_b0MZH',
                videoChannel: 'It-Kamasutra',
                publicationDate: '1 week ago',
                live: false,
            }
        ]
    },
    {
        id: 2,
        category: 'Education Videos',
        videos: [
            {
                videoId: 1,
                title: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
                fileUrl: 'https://www.youtube.com/embed/bmHZ-YQBWNA?si=WD2hFStYPG_b0MZH',
                videoChannel: 'It-Kamasutra',
                publicationDate: '1 week ago',
                live: true,
            },
            {
                videoId: 2,
                title: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
                fileUrl: 'https://www.youtube.com/embed/bmHZ-YQBWNA?si=WD2hFStYPG_b0MZH',
                videoChannel: 'It-Kamasutra',
                publicationDate: '1 week ago',
                live: false,
            },
            {
                videoId: 2,
                title: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
                fileUrl: 'https://www.youtube.com/embed/bmHZ-YQBWNA?si=WD2hFStYPG_b0MZH',
                videoChannel: 'It-Kamasutra',
                publicationDate: '1 week ago',
                live: false,
            }
        ]
    },
]

// variables
let videosMainElement = document.getElementById('playlists');

// render
renderVideolist(data);

function renderVideolist(playlistForRendering) {

    playlistForRendering.forEach(video => {
        const { id, category, videos: [ ...videos ] } = video;

        let playlistElement = document.createElement('div');
        playlistElement.classList.add('playlist');

        let playlistTitleElement = document.createElement('h2');
        playlistTitleElement.classList.add('playlist__title');
        playlistTitleElement.innerText = category;

        playlistElement.append(playlistTitleElement);

        videosMainElement.append(playlistElement);

        renderVideo(videos, playlistElement);
    })

}

function renderVideo(videos, element) {
    let videosWrapperElement = document.createElement('ul');
    videosWrapperElement.classList.add('videos');

    if(videos.length > 0) {
        videos.forEach(video => {
            let videoWrapperElement = document.createElement('li');
            videoWrapperElement.classList.add('video');

            let videoElement = document.createElement('iframe');
            videoElement.classList.add('video__frame');
            videoElement.setAttribute('src', video.fileUrl);
            videoElement.setAttribute('title', 'YouTube video player');
            videoElement.setAttribute('frameborder', '0');
            videoElement.setAttribute('allow', 'accelerometer');
            videoElement.setAttribute('autoplay', '');
            videoElement.setAttribute('clipboard-write', '');
            videoElement.setAttribute('encrypted-media', '');
            videoElement.setAttribute('allowfullscreen', '');
            videoElement.setAttribute('gyroscope', '');
            videoElement.setAttribute('picture-in-picture', '');
            videoElement.setAttribute('web-share', '');

            let videoTitleElement = document.createElement('h2');
            videoTitleElement.classList.add('video__title');
            videoTitleElement.innerText = video.title;

            let videoChannelElement = document.createElement('p');
            videoChannelElement.classList.add('video__channel');
            videoChannelElement.innerText = video.videoChannel;


            let videoDateElement = document.createElement('p');
            videoDateElement.classList.add('video__date');
            videoDateElement.innerText = video.publicationDate;

            if(video.live) {
                let videoLiveElement = document.createElement('span');
                videoLiveElement.classList.add('live');
                videoLiveElement.innerText = 'Live Stream';
                videoDateElement.innerText = '';
                videoDateElement.append(videoLiveElement);
            }

            videoWrapperElement.append(videoElement);
            videoWrapperElement.append(videoTitleElement);
            videoWrapperElement.append(videoChannelElement);
            videoWrapperElement.append(videoDateElement);

            videosWrapperElement.append(videoWrapperElement);
            element.append(videosWrapperElement);
        });

    }
}
