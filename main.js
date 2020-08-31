//items
const menu = [{
        id: 1,
        title: 'pasta',
        category: 'breakfast',
        price: 15.99,
        img: "img/1.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ratione dolorum fugiat aperiam, adipisci iure quos perferendis totam impedit aliquam asperiores saepe assumenda a quidem eos tenetur quae deserunt. Iure!`
    },
    {
        id: 2,
        title: 'pizza',
        category: 'breakfast',
        price: 25.99,
        img: "img/2.jpg",
        desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing`
    },
    {
        id: 3,
        title: 'ice-creame',
        category: 'lunch',
        price: 10,
        img: "img/3.jpg",
        desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of`
    },
    {
        id: 4,
        title: 'stobery',
        category: 'shakes',
        price: 40.50,
        img: "img/4.jpg",
        desc: `passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in`
    },
    {
        id: 5,
        title: 'cake',
        category: 'shakes',
        price: 32,
        img: "img/5.jpg",
        desc: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you`
    },
    {
        id: 6,
        title: 'testy pizza',
        category: 'lunch',
        price: 20.30,
        img: "img/6.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ratione dolorum fugiat aperiam, adipisci iure quos perferendis totam impedit aliquam asperiores saepe assumenda a quidem eos tenetur quae deserunt. Iure!`
    },
    {
        id: 7,
        title: 'pitha',
        category: 'lunch',
        price: 8.44,
        img: "img/7.jpg",
        desc: `tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of `
    },
    {
        id: 8,
        title: 'bread',
        category: 'breakfast',
        price: 22,
        img: "img/8.jpg",
        desc: `model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    },
    {
        id: 9,
        title: 'coffee',
        category: 'shakes',
        price: 12.99,
        img: "img/9.jpg",
        desc: `packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    },
    {
        id: 10,
        title: 'dinner',
        category: 'dinner',
        price: 200.99,
        img: "img/10.jpg",

        desc: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who`
    },
    {
        id: 11,
        title: 'supper',
        category: 'supper',
        price: 150.99,
        img: "img/11.jpg",
        desc: `atur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad`
    },
    {
        id: 12,
        title: 'dinner',
        category: 'dinner',
        price: 180,
        img: "img/1.jpg",
        desc: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. `
    },
];
const menuContainer = document.querySelector('.menu-container');
const btnContainer = document.querySelector('.button-container');



//load items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});


//display menu items here
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    menuContainer.innerHTML = displayMenu;
}

//display all buttons here
function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;

    }, ['all']);

    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll('.filter-btn');

    //filter items
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}