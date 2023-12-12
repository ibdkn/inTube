// Data
data = [
    {
        id: 1,
        category: 'Music videos',
        videos: [
            {
                videoId: 1,
                title: 'Музыка для расслабления во время кофе - Расслабляющий микс',
                fileUrl: 'https://www.youtube.com/embed/_Yha7XCvjVQ?si=Kj7V7mdIrP3oBSXT',
                videoChannel: 'Chill Music Lab',
                publicationDate: '',
                live: true,
            },
            {
                videoId: 2,
                title: 'Top 40 Songs of 2022 2023💥Maroon 5, The Weeknd, Charlie Puth, Maroon 5, Dua Lipa💥Mega Hit Mix',
                fileUrl: 'https://www.youtube.com/embed/ku5VKha1VB8?si=UBaV8LtlHQUf_082',
                videoChannel: 'Mega Hit Mix',
                publicationDate: '',
                live: true,
            },
            {
                videoId: 2,
                title: 'Metallica: Nothing Else Matters (Official Music Video)',
                fileUrl: 'https://www.youtube.com/embed/tAGnKpE4NCI?si=4ncX_w_HMykm2V35',
                videoChannel: 'Metallica',
                publicationDate: '14 years ago',
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
                title: 'JavaScript[5] - Путь самурая. Переменные, память, данные. НОВЫЙ БЕСПЛАТНЫЙ КУРС IT-KAMASUTRA',
                fileUrl: 'https://www.youtube.com/embed/bmHZ-YQBWNA?si=WD2hFStYPG_b0MZH',
                videoChannel: 'It-Kamasutra',
                publicationDate: '',
                live: true,
            },
            {
                videoId: 2,
                title: 'JavaScript[6] - Путь самурая. Сложная программа, if else, проценты, счётчик. JAVASCRIPT для новичков',
                fileUrl: 'https://www.youtube.com/embed/gA-jU9yoJ0Y?si=RKXDDavB0ZuJu4YJ',
                videoChannel: 'It-Kamasutra',
                publicationDate: '2 week ago',
                live: false,
            },
            {
                videoId: 3,
                title: 'Адаптивная верстка сайта с нуля с пояснениями. Макет Photography. Часть 1. Верстка',
                fileUrl: 'https://www.youtube.com/embed/vfE4qY5cRZg?si=PEGczUwLc7obuxeu',
                videoChannel: 'It-Kamasutra',
                publicationDate: '1 month ago',
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
            const { videoId, title, fileUrl, videoChannel, publicationDate, live } = video;

            let videoWrapperElement = document.createElement('li');
            videoWrapperElement.classList.add('video');

            let videoElement = document.createElement('iframe');
            videoElement.classList.add('video__frame');
            videoElement.setAttribute('src', fileUrl);
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
            videoTitleElement.innerText = title;

            let videoChannelElement = document.createElement('p');
            videoChannelElement.classList.add('video__channel');
            videoChannelElement.innerText = videoChannel;


            let videoDateElement = document.createElement('p');
            videoDateElement.classList.add('video__date');
            videoDateElement.innerText = publicationDate;

            if(live) {
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
