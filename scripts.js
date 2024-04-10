let titles = [
    "Whale Watching", "Eaton Canyon", "Channel Islands", "Universal Studios",
    "Go Jump", "Huntington Library", "Aquarium of the Pacific", "Bingsu Bingsu",
    "Ostrich Land", "Santa Monica Pier", "Little Skewer", "Miko's Boba Tea",
    "Legoland", "Escape Hotel", "Golden Gate Bridge", "The Getty Center",
    "Churro Boss", "Joshua Tree", "Big Bear Apline Slide", "Color Me Mine",
    "Joe's Italian Ice", "Switzer Falls", "Laser Land", "Buca di Beppo",
    "White Water Rafting", "Gram Cafe", "Celebrity Helicopters", "Hangar 18", 
    "K1 Speed", "Los Angeles Gun Club", "Snooze", "T-Swirl Crepe"
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
    "https://www.bucadibeppo.com/wp-content/uploads/2023/01/CATERING_Images8.png",
    "https://www.americanwhitewater.com/wp-content/themes/awe/images/baner_1.png",
    "https://i.redd.it/4u6x6vf5c5sa1.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/35/7c/5b/caption.jpg?w=1200&h=900&s=1", 
    "https://climbhangar18.com/wp-content/uploads/2020/06/08.jpg",
    "https://www.k1speed.com/wp-content/uploads/2024/01/FI-Autobahn-Acquisition.jpg",
    "https://seeingtheworldinsteps.files.wordpress.com/2018/10/img_5536.jpg?w=750",
    "https://www.snoozeeatery.com/wp-content/uploads/2019/09/Hillcrest_exterior.jpg",
    "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/2cddfda7-419f-463e-9217-cbe1e4f439ca.jpg"
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
    "An inexpensive cat cafe conjoined with a pet store supply shop",
    "A vibrant wonderland with towering Lego creations, thrilling rides, and endless adventures",
    "An entire hotel, where every room is a different escape game, and the staff is dying to check you in",
    "A breathtaking marvel of engineering suspended against San Francisco's picturesque skyline",
    "Features works of art dating from the eighth through the twenty-first century",
    "A haven of fresh, golden churros drizzled with delicious toppings",
    "Where two distinct desert ecosystems, the Mojave and the Colorado, come together",
    "Year-round facility that offers winter bobsled tracks and summer water slides",
    "A paint your own pottery studio that offers painting on ceramics for all ages",
    "Philadelphia style water ice made daily with real fresh fruit",
    "This hike takes you along a brook, historic ruins, and to a pristine waterfall",
    "Team up with friends and family for epic laser tag battles in immersive gameplay",
    "Serves Italian, family-style meals in an eclectic group-friendly setting, perfect for celebrations",
    "The 3 Forks of the American River offer up some great whitewater rafting for everyone",
    "Home of the original Japanese Soufflé Pancakes, handcrafted with natural ingredients",
    "Curated tour that covers amazing locations from Santa Monica to the Hollywod Sign",
    "Climbing gym with top ropes, auto belays, and 3 massive bouldering areas",
    "Indoor racing center featuring electric go-karting for all skill levels, plus food",
    "Longtime shooting range offering free safety and handling lessons, plus gun rentals",
    "Vibrant, retro chain serving a seasonal menu of creative breakfast and lunch fare, plus cocktails",
    "Each bite, no matter sweet or savory, is identical and bursting with fresh exquisite flavor"
];

let city = [
    "Long Beach", "Altadena","Ventura", "Universal City", 
    "Oceanside", "San Marino", "Long Beach", "Arcadia",
    "Solvang", "Santa Monica", "Monterey Park", "West Covina",
    "Carlsbad", "Los Angeles", "San Francisco", "Los Angeles",
    "Covina", "Joshua Tree", "Big Bear Lake", "Pasadena",
    "Anaheim", "Altadena", "West Covina", "Pasadena",
    "Coloma", "Monterey Park", "Compton", "Arcadia",
    "Burbank", "Los Angeles", "Orange", "Temple City"
];

let address = [
    "100 Aquarium Way, Dock #2", "1801-1945 Veranada Ave", "1901 Spinnaker Drive", "100 Universal City Plaza",
    "480 Airport Rd", "1151 Oxford Rd", "100 Aquarium Way", "400 S Baldwin Ave",
    "610 E Hwy 246", "200 Santa Monica Pier", "429 W Garvey Ave", "1416 S Azusa Ave #C2",
    "One Legoland Dr", "6633 Hollywood Blvd", "Golden Gate Brg", "1200 Getty Center Dr",
    "117 N Citrus Ave", "6554 Park Boulevard", "800 Wildrose Ln", "81 S Fair Oaks Ave",
    "2201 S Harbor Blvd", "Switzer Picnic Area", "2340 S Azusa Ave", "80 W Green St",
    "5981 New River Road", "500 N Atlantic Blvd Suite 179", "961 W Alondra Blvd", "305 N Santa Anita Ave",
    "960 Chestnut S", "1375 E 6th St #7", "240 W Chapman Ave Suite 101", "5708 Rosemead Blvd #105"
];

let zipcode = [
    "90802", "91001", "93001", "91608", "92058", "91108", "90802", "91007",
    "93464", "90401", "91754", "91791", "92008", "90028", "94129", "90049",
    "91723", "92252", "92315", "91105", "92802", "91001", "91792", "91105",
    "95613", "91754", "90220", "91006", "91506", "90021", "92866", "91780"
];

let type = [
    "o", "o", "o", "o", "o", "o", "i", "f",
    "o", "o", "f", "i", "o", "i", "o", "i",
    "f", "o", "o", "i", "f", "o", "i", "f",
    "o", "f", "o", "i", "i", "i", "f", "f"
];

let items = titles.map((title, index) => ({
    title: title,
    url: URLs[index],
    description: description[index],
    city: city[index],
    zipcode: zipcode[index],
    address: address[index],
    type: type[index],
    favorite: false
}));

items.forEach((item, index) => {
    item.id = index; 
});

let saves = [];

let currentDisplayedCount = 8; 

function showCards(dataArray, count) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < count; i++) {      
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, dataArray[i].title, dataArray[i].url, dataArray[i].description, dataArray[i].address, dataArray[i].city, dataArray[i].id);
        cardContainer.appendChild(nextCard);
    }

    // If there are more items to show, display the "Show more" link
    if (count < dataArray.length) {
        document.getElementById('show-more-link').style.display = 'block';
    } else {
        document.getElementById('show-more-link').style.display = 'none';
    }
}

function editCardContent(card, newTitle, newImageURL, newDescription, newAddress, newCity, id) {
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

    const favoriteButton = card.querySelector("#add");
    if (items[id].favorite) {
        favoriteButton.classList.add('favorited');
    } else {
        favoriteButton.classList.remove('favorited');
    }
    favoriteButton.onclick = function() {
        addToList(this, id);
    };
}

// Show the initial set of cards
document.addEventListener("DOMContentLoaded", () => {
    showCards(items, currentDisplayedCount);
});

// Event listener for the "Show more" link
document.getElementById('show-more-link').addEventListener('click', (event) => {
    event.preventDefault(); 
    currentDisplayedCount += 8;
    showCards(items, currentDisplayedCount);
});

// Event listener for filter dropdown change
document.getElementById('filter-dropdown').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    const zipcodeFilter = document.getElementById('zipcode-search').value.trim();
    filterItems(selectedOption, zipcodeFilter);
});

// Event listener for zipcode search
document.getElementById('zipcode-search').addEventListener('input', (event) => {
    const zipcodeInput = event.target.value.trim();
    const selectedOption = document.getElementById('filter-dropdown').value;
    filterItems(selectedOption, zipcodeInput);
});

// Filtering
function filterItems(filter, zipcodeFilter) {
    let filteredItems = [];

    if (document.getElementById('favorites').classList.contains('active')) {
        filteredItems = saves;
    } else {
        filteredItems = items;
    }

    if (filter !== "all") {
        filteredItems = filteredItems.filter(item => item.type === filter);
    }

    if (zipcodeFilter && Number.isInteger(parseInt(zipcodeFilter))) {
        filteredItems = filteredItems.filter(item => {
            const itemZip = (item.zipcode && item.zipcode.toString()) || '';
            const filterZip = (zipcodeFilter && zipcodeFilter.toString()) || '';
            return itemZip.includes(filterZip);
        });
    }    

    showCards(filteredItems, filteredItems.length);
    if (filteredItems.length < 1) {
        if (document.getElementById('favorites').classList.contains('active')) {
            showNoFavoritesMessage();
        } else {
            showNoRecommendationsMessage();
        }
    }
}

// Function to display a message when there are no recommendations
function showNoRecommendationsMessage() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 

    const emptyDiv = document.querySelector(".empty").cloneNode(true);
    emptyDiv.style.display = 'block';
    cardContainer.appendChild(emptyDiv);

    document.getElementById('scroll-link').style.display = 'none';
}

// Favoriting 
function addToList(button, id) {
    const item = items.find(item => item.id === id);
    if (!button.classList.contains('favorited')) {
        button.classList.add('favorited');
        item.favorite = true; 
        saves.push(item);
    } else {
        button.classList.remove('favorited');
        item.favorite = false; 
        
        const itemIndex = saves.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            saves.splice(itemIndex, 1);
        }

        if (document.getElementById('favorites').classList.contains('active')) {
            showCards(saves, saves.length);
            if (saves.length < 1) {
                showNoFavoritesMessage(); 
            }
        }
    }
}

// Event listener for my favorites
document.getElementById('my-favorites').addEventListener('click', (event) => {
    document.getElementById('favorites').classList.add('active');
    document.getElementById('filter-dropdown').value = 'all'; 
    document.getElementById('zipcode-search').value = '';
    document.getElementById('favorites-heading').style.display = 'block';
    showCards(saves, saves.length);
    if (saves.length < 1) {
        showNoFavoritesMessage(); 
    }
});

// Event listener for home
document.getElementById('home').addEventListener('click', (event) => {
    document.getElementById('favorites').classList.remove('active');
    document.getElementById('filter-dropdown').value = 'all'; 
    document.getElementById('zipcode-search').value = '';
    document.getElementById('favorites-heading').style.display = 'none';
    showCards(items, 8);
});


// Function to display a message when there are no favorites
function showNoFavoritesMessage() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    const emptyDiv = document.querySelector(".empty-favorites").cloneNode(true);
    emptyDiv.style.display = 'block';
    cardContainer.appendChild(emptyDiv);

    document.getElementById('scroll-link').style.display = 'none';
}

function recommendationAlert() {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    const message = `
        Visit ${randomItem.title}!
        ${randomItem.description}
        Address: ${randomItem.address}, ${randomItem.city}, CA
    `;
    alert(message);
}

// Autoscroll
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