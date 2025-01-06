import React from 'react';
import VideoCard from './VideoCard';

function VideoGrid() {
  const videos = [
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Pagal Nahi Hona (HD Video) | Sunanda Sharma | Sonu Sood | Jaani | New Punjabi Song 2025',
      brand: 'Punjabi Beats',
      view: '3.4 lakh views - 2 days ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Desi Crew | Full Video | Karan Aujla | Punjabi Hit Song 2025',
      brand: 'Desi Vibes',
      view: '5.2 lakh views - 1 day ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Brown Munde | AP Dhillon | Gurinder Gill | Punjabi Song 2025',
      brand: 'Urban Punjabi',
      view: '1.1M views - 3 days ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Satisfya | Imran Khan | Official Music Video 2025',
      brand: 'Khan Beats',
      view: '8.9 lakh views - 5 days ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Laung Laachi 2 | Neeru Bajwa | Ammy Virk | Punjabi Blockbuster',
      brand: 'Punjabi Hits',
      view: '4.3 lakh views - 4 days ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Titliaan | Afsana Khan | Harrdy Sandhu | Romantic Punjabi Song',
      brand: 'Star Music',
      view: '2.7M views - 1 week ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Lut Gaye | Jubin Nautiyal | Emraan Hashmi | Hindi Love Song 2025',
      brand: 'Bollywood Beats',
      view: '15M views - 2 weeks ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Patiala Peg | Diljit Dosanjh | Punjabi Folk Song',
      brand: 'Punjabi Classics',
      view: '3.5 lakh views - 3 days ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'High Rated Gabru | Guru Randhawa | Dance Hit 2025',
      brand: 'Urban Beats',
      view: '7.6M views - 2 weeks ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Do You Know | Diljit Dosanjh | Latest Punjabi Song 2025',
      brand: 'Diljit Hits',
      view: '1.2M views - 4 days ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Proper Patola | Badshah & Diljit Dosanjh | Punjabi Party Song',
      brand: 'T-Series Punjab',
      view: '5.4M views - 1 week ago',
    },
    {
      img: './vidothum.jpg',
      logo: 'https://png.pngtree.com/png-clipart/20210428/ourlarge/pngtree-neon-light-effect-karaoke-label-light-microphone-music-icon-png-image_3252821.jpg',
      title: 'Bapu Zimidar | Jassi Gill | Desi Vibes Punjabi Song 2025',
      brand: 'Punjabi Beats',
      view: '2.8 lakh views - 6 days ago',
    },
  ];



  return (
    <div className='flex flex-wrap '>
      {videos.map((video, index) => (
        <div key={index} className='  m-2 p-4'>
          <VideoCard

            img={video.img}
            logo={video.logo}
            title={video.title}
            brand={video.brand}
            view={video.view}
          />
        </div>
      ))}
    </div>

  );
}

export default VideoGrid;
