$(document).ready(function () {
  // Fruit data including name, description, and image
  const hannaFruits = [
    {
      fruit: "mango",
      descr:
        "Mangoes are juicy stone fruit (drupe) from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.",
        img: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
    },
    {
      fruit: "orange",
      descr:
        "Oranges are citrus fruits known for their vitamin C content and refreshing juice.",
      img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
    },
    {
      fruit: "pineapple",
      descr:
        "Pineapples are tropical fruits with spiky skin and sweet, tart flesh.",
      img: "https://cdn-icons-png.flaticon.com/512/135/135685.png",
    },
    {
      fruit: "papaya",
      descr:
        "Papayas are soft, sweet fruits with orange flesh and black seeds in the center.",
      img: "https://cdn-icons-png.flaticon.com/512/135/135684.png",
    },
    {
      fruit: "grapefruit",
      descr:
        "Grapefruits are large, tangy citrus fruits with a slightly bitter flavor.",
      img: "https://cdn-icons-png.flaticon.com/512/135/135678.png",
    },
    {
      fruit: "pear",
      descr:
        "Pears are fruits produced and consumed around the world, growing on a tree and harvested in late summer.",
      img: "https://cdn-icons-png.flaticon.com/512/135/135620.png",
    }
  ];

  // Helper to capitalize
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  // Generate fruit tab headers
  hannaFruits.forEach((item, index) => {
    $('#fruits').append(
      `<li class="fruit-tab" data-index="${index}">${capitalize(item.fruit)}</li>`
    );
  });

  // Function to show fruit content
  function showFruit(index) {
    const fruit = hannaFruits[index];

    $('#fruitDesc').html(`
      <img src="${fruit.img}" alt="${fruit.fruit}">
      <div id="fruitDescText">
        <h3>${capitalize(fruit.fruit)}</h3>
        <p>${fruit.descr}</p>
      </div>
    `);
    
    

    // Highlight active tab
    $('.fruit-tab').removeClass('active');
    $(`.fruit-tab[data-index="${index}"]`).addClass('active');
  }

  // Use event delegation for clicks
  $('#fruits').on('click', '.fruit-tab', function () {
    const index = $(this).data('index');
    showFruit(index);
  });

  // Default: show first fruit
  showFruit(0);
});
