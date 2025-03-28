export class News {
    constructor(title, content, img) {
      this.title = title;
      this.content = content;
      this.img = img;
      this.likes = 0;
    }
  
    render(container) {
      container.innerHTML = ''; // Clear previous content
  
      const titleEl = document.createElement('h3');
      titleEl.textContent = this.title;
  
      const starsContainer = document.createElement('div');
      starsContainer.className = 'stars-container';
      starsContainer.innerHTML = ''; // empty stars initially
  
      const contentEl = document.createElement('p');
      contentEl.textContent = this.content;
  
      const imageEl = document.createElement('img');
      imageEl.src = this.img;
      imageEl.alt = this.title;
      imageEl.style.width = '100%';
      imageEl.style.margin = '10px 0';
      imageEl.classList.add('news-image');
  
      const likeBtn = document.createElement('button');
      likeBtn.textContent = `Like`;
      likeBtn.addEventListener('click', () => {
        this.likes++;
        starsContainer.innerHTML = '&#9733; '.repeat(this.likes);
      });
  
      const hideBtn = document.createElement('button');
      hideBtn.textContent = 'Hide Image';
      hideBtn.addEventListener('click', () => {
        imageEl.style.opacity = '0.2';
        likeBtn.disabled = true; // ✅ Disable the like button
      });
  
      const controls = document.createElement('div');
      controls.className = 'button-controls';
      controls.appendChild(likeBtn);
      controls.appendChild(hideBtn);
  
      container.className = 'news-item';
      container.appendChild(titleEl);
      container.appendChild(starsContainer);
      container.appendChild(imageEl);
      container.appendChild(contentEl);
      container.appendChild(controls);
    }
  }
  