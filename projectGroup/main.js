document.addEventListener("DOMContentLoaded", () => {
    let books = [
        {
            img: "/public/The nightingale.jpg",
            title: "The Nightingale",
            categorie: "Historical Fiction",
            description:
                "A powerful story set during World War II, following two sisters in Nazi-occupied France as they resist the war in different ways.",
            id: 1,
        },
        {
            img: "/public/book thief.jpeg",
            title: "The Book Thief",
            categorie: "Historical Fiction",
            description:
                "Narrated by Death, this novel tells the story of a young girl in Nazi Germany who steals books and shares them with others.",
            id: 2,
        },
        {
            img: "/public/A court of thorns and  roses.webp",
            title: "A Court of Thorns and Roses",
            categorie: "Romance",
            description:
                "A Beauty and the Beast retelling where a mortal girl is taken to the magical land of the Fae and discovers love, danger, and secrets.",
            id: 3,
        },
        {
            img: "/public/The Night Circus.webp",
            title: "The Night Circus",
            categorie: "Romance",
            description:
                "A mysterious circus only open at night, where two young magicians are locked in a magical duel, but they unexpectedly fall in love.",
            id: 4,
        },
    ];

    let main = document.getElementById("books-container");

    function displayBooks(category = "All") {
        main.innerHTML = "";

        let filteredBooks =
            category === "All"
                ? books
                : books.filter((book) => book.categorie === category);

        filteredBooks.forEach((book) => {
            let bookElement = document.createElement("div");
            bookElement.classList.add("book");

            let img = document.createElement("img");
            img.src = book.img;
            img.alt = book.title;
            img.width = 150;

            let title = document.createElement("h3");
            title.textContent = book.title;

            let desc = document.createElement("p");
            desc.textContent = book.description;

            let shopBtn = document.createElement("button");
            shopBtn.textContent = "Shop Now";
            shopBtn.classList.add("shop-btn");
            shopBtn.addEventListener("click", () => {
                alert(`You selected: ${book.title}`);
            });

            bookElement.appendChild(img);
            bookElement.appendChild(title);
            bookElement.appendChild(desc);
            bookElement.appendChild(shopBtn);

            main.appendChild(bookElement);
        });
    }

    document
        .querySelector(".All")
        .addEventListener("click", () => displayBooks("All"));
    document
        .querySelector(".Fiction")
        .addEventListener("click", () => displayBooks("Historical Fiction"));
    document
        .querySelector(".Romance")
        .addEventListener("click", () => displayBooks("Romance"));

    displayBooks("All");
});

function sumOfCubes(nums) {
    result = 0;
    for (i = 0; i < nums.lenght; i++) {
        if (nums.lenght > 1) {
            result += nums[i] ^ nums.lenght;
        } else if (nums.lenght === 1) {
            result += nums[i] * 4;
        } else {
            result = 0;
        }
    }
}
