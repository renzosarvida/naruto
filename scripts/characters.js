// Array of all Naruto characters
const characters = [
    "Naruto Uzumaki",
    "Sasuke Uchiha",
    "Sakura Haruno",
    "Kakashi Hatake",
    "Shikamaru Nara",
    "Hinata Hyuga",
    "Rock Lee",
    "Gaara",
    "Madara Uchiha",
    "Obito Uchiha",
    "Orochimaru",
    "Pain (Nagato)",
    "Tsunade Senju",
    "Jiraiya",
    "Minato Namikaze",
    "Kushina Uzumaki",
    "Itachi Uchiha",
    "Kiba Inuzuka",
    "Choji Akimichi",
    "Neji Hyuga",
    "Temari",
    "Killer Bee",
    "Hiruzen Sarutobi",
    "Hashirama Senju",
    "Tobirama Senju",
    "Danzo Shimura",
    "Konan",
    "Deidara",
    "Kisame Hoshigaki",
    "Zabuza Momochi",
    "Haku",
    "Iruka Umino",
    "Konohamaru Sarutobi",
    "Asuma Sarutobi",
    "Kurenai Yuhi",
    "Shino Aburame",
    "Tenten",
    "Sai",
    "Yamato",
    "Boruto Uzumaki",
    "Sarada Uchiha",
    "Mitsuki",
    "Toneri Otsutsuki",
    "Momoshiki Otsutsuki",
    "Kinshiki Otsutsuki",
    "Hamura Otsutsuki",
    "Hagoromo Otsutsuki"
    // Add more characters as needed
];

// Populate the character directory
const characterDirectory = document.getElementById("character-directory");

characters.forEach((character) => {
    const listItem = document.createElement("li");
    listItem.textContent = character;
    characterDirectory.appendChild(listItem);
});

// Filter characters based on search input
function filterCharacters() {
    const searchInput = document.getElementById("character-search").value.toLowerCase();
    const listItems = characterDirectory.getElementsByTagName("li");

    for (let i = 0; i < listItems.length; i++) {
        const characterName = listItems[i].textContent.toLowerCase();
        if (characterName.includes(searchInput)) {
            listItems[i].style.display = "";
        } else {
            listItems[i].style.display = "none";
        }
    }
}