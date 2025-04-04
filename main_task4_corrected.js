// === Task 1: Number Generator & News ===
class NumberGenerator {
    constructor(containerId, newsSectionId) {
      this.value = 0;
      this.container = document.getElementById(containerId);
      this.newsSection = document.getElementById(newsSectionId);
  
      this.render();
    }
  
    render() {
      const wrapper = document.createElement('div');
      wrapper.className = 'number-generator';
  
      const numberDisplay = document.createElement('div');
      numberDisplay.id = 'number-display';
      numberDisplay.textContent = this.value;
  
      const generateBtn = this.createButton('Generate', () => this.generateRandom());
      const increaseBtn = this.createButton('Greater ↑', () => this.updateValue(this.value + 1));
      const decreaseBtn = this.createButton('Less ↓', () => this.updateValue(this.value - 1));
  
      wrapper.append(generateBtn, increaseBtn, decreaseBtn, numberDisplay);
      this.container.appendChild(wrapper);
    }
  
    createButton(label, onClick) {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.onclick = onClick;
      return btn;
    }
  
    generateRandom() {
      const random = Math.floor(Math.random() * 101);
      this.updateValue(random);
    }
  
    updateValue(newValue) {
      this.value = newValue;
      document.getElementById('number-display').textContent = this.value;
      this.updateNews();
    }
  
    updateNews() {
      this.newsSection.innerHTML = '';
      for (let i = 0; i < this.value; i++) {
        const news = document.createElement('div');
        news.className = 'news-item';
        news.textContent = `News Item ${i + 1}`;
  
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => news.remove();
  
        news.appendChild(removeBtn);
        this.newsSection.appendChild(news);
      }
    }
  }
  
  // === Task 2: Color Palette with Delegation ===
  class ColorButton {
    constructor(color) {
      this.color = color;
    }
  
    show(parent) {
      const btn = document.createElement('div');
      btn.className = 'color-btn';
      btn.style.backgroundColor = this.color;
      btn.setAttribute('data-color', this.color);
      parent.appendChild(btn);
    }
  }
  
  class PaletteMenu {
    constructor(containerId, targetBlockId) {
      this.container = document.getElementById(containerId);
      this.targetBlock = document.getElementById(targetBlockId);
      this.handleEvent = this.handleEvent.bind(this);
  
      this.colors = ['red', 'blue', 'green', 'orange', 'purple', 'black'];
      this.colors.forEach(c => new ColorButton(c).show(this.container));
  
      this.container.addEventListener('mouseover', this);
      this.container.addEventListener('click', this);
    }
  
    handleEvent(event) {
      const color = event.target.getAttribute('data-color');
      if (!color) return;
  
      if (event.type === 'mouseover') {
        this.targetBlock.style.backgroundColor = color;
      }
  
      if (event.type === 'click') {
        this.targetBlock.style.color = color;
      }
    }
  }
  
  // === Task 3: Collapsible Sweet Menu ===
  function setupSweetMenu() {
    const menuHeader = document.getElementById('menu-header');
    const sweetMenu = document.getElementById('sweet-menu');
    const sweetPreview = document.getElementById('sweet-preview');
  
    const sweetImages = {
      cake: 'https://cdn-icons-png.flaticon.com/128/595/595267.png',
      cookie: 'https://cdn-icons-png.flaticon.com/128/1046/1046784.png',
      candy: 'https://cdn-icons-png.flaticon.com/128/1065/1065718.png',
      donut: 'https://cdn-icons-png.flaticon.com/128/1046/1046786.png',
    };
  
    menuHeader.addEventListener('click', () => {
      sweetMenu.classList.toggle('hidden');
      if (sweetMenu.classList.contains('hidden')) {
        document.querySelectorAll('#sweet-menu li').forEach(li => li.classList.remove('active'));
        sweetPreview.innerHTML = '';
      }
    });
  
    sweetMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        document.querySelectorAll('#sweet-menu li').forEach(li => li.classList.remove('active'));
        e.target.classList.add('active');
  
        const sweetType = e.target.dataset.img;
        const imgSrc = sweetImages[sweetType];
        sweetPreview.innerHTML = `<img src="${imgSrc}" alt="${sweetType}">`;
      }
    });
  }
  
  // === Initialize All Tasks ===
  document.addEventListener('DOMContentLoaded', () => {
    new NumberGenerator('number-generator-container', 'news-section');
    new PaletteMenu('color-buttons-container', 'target-block');
    setupSweetMenu();
  });

  class Fruit {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    show(parent) {
      const item = document.createElement('li');
      item.className = 'fruit-item';
      item.setAttribute('data-color', this.color);
      item.textContent = `${this.name} (${this.color})`;
      parent.appendChild(item);
    }
  }
  
  class btnColor {
    constructor(color) {
      this.color = color;
    }
  
    show(parent) {
      const btn = document.createElement('button');
      btn.style.backgroundColor = this.color;
      btn.textContent = this.color;
      btn.setAttribute('data-color', this.color);
      parent.appendChild(btn);
    }
  }
  
  class RatedFruit extends Fruit {
    constructor(name, color, rating) {
      super(name, color);
      this.rating = rating;
    }
  
    show(parent) {
      const item = document.createElement('li');
      item.className = 'fruit-item';
      item.setAttribute('data-color', this.color);
      item.innerHTML = `${this.name} (${this.color})`;
  
      const starsContainer = document.createElement('div');
      starsContainer.className = 'stars';
  
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.innerHTML = '&#9733;'; // Unicode for star
        if (i <= this.rating) star.classList.add('orange');
        starsContainer.appendChild(star);
      }
  
      item.appendChild(starsContainer);
      parent.appendChild(item);
    }
  }
  
  function setupFruitsAndColors() {
    const fruits = [
      new RatedFruit('Strawberry', 'red', 3),
      new RatedFruit('Blueberry', 'blue', 4),
      new RatedFruit('Banana', 'yellow', 5),
      new RatedFruit('Grape', 'purple', 2),
      new RatedFruit('Lime', 'green', 1)
    ];
  
    const fruitList = document.getElementById('fruit-list');
    const colorBtns = document.getElementById('color-buttons-fruit');
  
    const allColors = [...new Set(fruits.map(f => f.color))];
    allColors.forEach(color => new btnColor(color).show(colorBtns));
    fruits.forEach(fruit => fruit.show(fruitList));
  
    // Highlight fruits on color button click (jQuery + delegation)
    $('#color-buttons-fruit').on('click', 'button', function () {
      const selectedColor = $(this).data('color');
      $('.fruit-item').removeClass('highlight');
      $(`.fruit-item[data-color="${selectedColor}"]`).addClass('highlight');
    });
  
    // Handle rating click on stars
    $('#fruit-list').on('click', '.star', function () {
      const $star = $(this);
      $star
        .addClass('orange')
        .prevAll('.star').addClass('orange');
      $star.nextAll('.star').removeClass('orange');
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new NumberGenerator('number-generator-container', 'news-section');
    new PaletteMenu('color-buttons-container', 'target-block');
    setupSweetMenu();
    setupFruitsAndColors(); // <-- Task 4 initialization
  });
  
  