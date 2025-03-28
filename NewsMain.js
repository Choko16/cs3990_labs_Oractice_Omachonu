import { News } from './newsClass.js';

document.addEventListener('DOMContentLoaded', () => {
    const newsData = [
        {
          title: 'Big Discovery',
          content: 'Scientists discover a new particle.',
          img: 'images/news1.jpeg'
        },
        {
          title: 'Tech Update',
          content: 'New AI tool released today.',
          img: 'Images/news2.jpeg'
        },
        {
          title: 'Weather',
          content: 'Heavy rain expected this weekend.',
          img: 'Images/news3.jpg'
        }
      ];
      

  const button = document.getElementById('myBtn');
  button.addEventListener('click', () => {
    const contentDivs = document.querySelectorAll('#content p');
    contentDivs.forEach((el, index) => {
        const newsItem = new News(newsData[index].title, newsData[index].content, newsData[index].img);
      newsItem.render(el);
    });
  });
});
