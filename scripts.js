let titles = [
    "Whale Watching", "Eaton Canyon", "Channel Islands", "Universal Studios",
    "Go Jump", "Huntington Library", "Aquarium of the Pacific", "Bingsu Bingsu",
    "Ostrich Land", "Santa Monica Pier", "Little Skewer", "Miko's Boba Tea",
    "Legoland", "Escape Hotel", "Golden Gate Bridge", "Getty Museum",
    "Churro Boss", "Joshua Tree", "Big Bear Apline Slide", "Color Me Mine",
    "Joe's Italian Ice", "Switzer Falls", "Laser Land", "Buca di Beppo"
];

let URLs = [
    "https://cms-media.getmyboat.com/production/images/Whale_Watching_Long_Beach.2e16d0ba.fill-1080x565.jpg",
    "https://modernhiker-storage.s3.amazonaws.com/modernhiker/wp-content/uploads/2009/04/eaton-canyon-16.jpg",
    "https://www.mensjournal.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM2NDA0MDAyMDg4NDUz/channel-islands.jpg",
    "https://www.tripsavvy.com/thmb/nBrRhFBEbCNPpzyaDgBwrexsOCk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KMD12CityWalkLA_0009lg-5857632a5f9b586e02c24fb3-ac63b484a51647ee9049b51a912c85d9.jpg",
    "https://gojump-america.com/wp-content/themes/hawaii/assets/images/hawai-banner-new.jpg",
    "https://img1.10bestmedia.com/Images/Photos/265036/p-Chinese-Garden-Jade-Mirror-2_55_660x440.JPG",
    "https://www.presstelegram.com/wp-content/uploads/migration/2017/201705/NEWS_170509608_AR_0_UETATFJTQBIU.jpg?w=640",
    "https://www.dumplingconnection.com/wp-content/uploads/2021/06/AdobeStock_242394003.jpg",
    "https://truffle-assets.tastemadecontent.net/97f68adc-tm-travel_ostrichland_16x9_1.jpg",
    "https://a.cdn-hotels.com/gdcs/production153/d1393/8bcb5b94-605b-4aba-bf81-3eb5516cc627.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/Cqz5PR09HESuC0HfnCE-HA/o.jpg",
    "https://s3-media0.fl.yelpcdn.com/bphoto/Wex9YE53QjXJ6bNHPy8gvQ/o.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/b7/95/54/caption.jpg?w=1200&h=-1&s=1",
    "https://d2ugbn5gb88fyp.cloudfront.net/863113/0_0.png",
    "https://assets.cityexperiences.com/wp-content/uploads/2022/06/Golden-Gate-SF-1024x701.jpg",
    "https://www.tripsavvy.com/thmb/0o-QzB2Tnhd4lLLFblZGwDmZIzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Los-Angeles-Assignment-1-60WEB-5c741eedc9e77c00016bfdfd.jpg",
    "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/0e928a02-ae7f-4c75-955c-edfa6f8a83bc.jpg",
    "https://www.nps.gov/jotr/learn/nature/images/JoshuaTrees_LMcAfee.jpg?maxwidth=1300&maxheight=1300&autorotate=false",
    "https://www.bigbearcoolcabins.com/sites/default/files/resize/remote/fde53eb3091f857223e6dc3f7da30ef7-1800x1181.jpg",
    "https://thecollectionrp.com/wp-content/uploads/2022/06/The-Collection-Riverpark-ColorMeMine-Gallery-002.jpg",
    "https://joesice.com/wp-content/uploads/2019/09/FullSizeRender.jpeg",
    "https://westsidelosangeles.com/images/waterfall-hikes/switzer-falls/switzer-falls-3b.jpg",
    "https://avatars.mds.yandex.net/get-tycoon/6302170/2a000001880fd4ddb503813297d0884ed67d/priority-headline-background",
    "https://www.bucadibeppo.com/wp-content/uploads/2023/01/CATERING_Images8.png"
];

let description = [
    "Cruise into the open Pacific Ocean to search for migrating whales",
    "Check out this 3.5-mile round trip hike to a beautiful waterfall",
    "A world-class outdoor escape, with remote camping, hiking, kayaking, scuba diving, and bird-watching",
    "Thrilling theme park rides and shows and a real working movie studio",
    "Feel the breeze with scenic oceanview skydiving",
    "Botanical gardens, art galleries, a library of rare books, and much more",
    "Take a journey of discovery through the world's largest ocean",
    "Cozy spot for authentic Korean bingsu, crispy taiyaki, and creamy soft serve",
    "Come see and feed over 100 ostriches and emus",
    "A large pier with a small amusement park, concession stands, and areas for views and fishing",
    "Delicious skewers and appetizers as well as a great atmosphere",
    "An inexpensive cat cafe conjoined with a pet store supply shop"
];

let city = [
    "Long Beach", "Altadena","Ventura", "Universal City", 
    "Oceanside", "San Marino", "Long Beach", "Arcadia",
    "Solvang", "Santa Monica", "Monterey Park", "West Covina"
];

let address = [
    "100 Aquarium Way, Dock #2", "1801-1945 Veranada Ave", "1901 Spinnaker Drive", "100 Universal City Plaza",
    "480 Airport Rd", "1151 Oxford Rd", "100 Aquarium Way", "400 S Baldwin Ave",
    "610 E Hwy 246", "200 Santa Monica Pier", "429 W Garvey Ave"
];

let zipcode = [
    "90802", "91001", "93001", "91608", "92058", "91108", "90802", "91007",
    "93464", "90401", "91754"
];

let type = [
    "o", "o", "o", "o", "o", "o", "i", "f",
    "o", "o", "f", "i", "o", "i", "o", "i",
    "f", "o", "o", "i", "f", "o", "i", "f"
];

let items = titles.map((title, index) => ({
    title: title,
    url: URLs[index],
    description: description[index],
    city: city[index],
    zipcode: zipcode[index],
    address: address[index],
    type: type[index]
}));

let saves = []; 



let currentDisplayedCount = 8; 

function showCards(count) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    // Determine the range of data to display based on the count
    const endIndex = Math.min(count, titles.length);

    for (let i = 0; i < endIndex; i++) {      
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, items[i].title, items[i].url, items[i].description, items[i].address, items[i].city);
        cardContainer.appendChild(nextCard);
    }

    // If there are more items to show, display the "Show more" link
    if (endIndex < titles.length) {
        document.getElementById('show-more-link').style.display = 'block';
    } else {
        document.getElementById('show-more-link').style.display = 'none';
    }
}

// Show the initial set of cards
document.addEventListener("DOMContentLoaded", () => {
    showCards(currentDisplayedCount);
});

function editCardContent(card, newTitle, newImageURL, newDescription, newAddress, newCity) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const descriptionElement = card.querySelector(".card-content ul li:first-child");
    descriptionElement.textContent = newDescription;

    const addressElement = card.querySelector(".card-content ul li:nth-child(2)");
    addressElement.textContent = newAddress + ", " + newCity + ", CA";
}

// Event listener for the "Show more" link
document.getElementById('show-more-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default action of the anchor tag
    currentDisplayedCount += 8; // Increase the count by 8
    showCards(currentDisplayedCount); // Show more cards
});

function filterItems(filter) {
    if (filter === "all") {
        showCards(currentDisplayedCount); // Display all items
    } else {
        const filteredItems = items.filter(item => item.type === filter);
        showFilteredCards(filteredItems); // Display filtered items
    }
    toggleShowMoreButton(); // Toggle visibility of "Show more" button
}

function toggleShowMoreButton() {
    const showMoreButton = document.getElementById('show-more-link');
    if (document.getElementById('filter-dropdown').value === 'all' && currentDisplayedCount < items.length) {
        showMoreButton.style.display = 'block';
    } else {
        showMoreButton.style.display = 'none';
    }
}

function showFilteredCards(filteredItems) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear previous cards

    filteredItems.forEach(item => {
        const nextCard = document.querySelector(".card").cloneNode(true);
        editCardContent(nextCard, item.title, item.url, item.description, item.address, item.city);
        cardContainer.appendChild(nextCard);
    });
}

// Event listener for filter dropdown change
document.getElementById('filter-dropdown').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    console.log(`Dropdown selection changed to: ${selectedOption}`);
    filterItems(selectedOption);
});

function addToList(button) {
    if (!button.classList.contains('blue-plus')) {
        button.classList.add('blue-plus');
        button.innerHTML = '&#x2713;';
    } else {
        button.classList.remove('blue-plus');
        button.innerHTML = '&#x2b;'; 
    }
}





/* -------------  Autoscroll -------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});