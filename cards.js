const IMAGE_URL = "http://placehold.co/200";

const USER = {
    id: 0,
    username: 'User Name',
    description: 'Me gustan los conejos',
    age: '25',
    fav_music: {
        bands: [
            'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
        ]}
}

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]



//selectores
const card =document.getElementById("card-container");
const cardImgContainer = document.getElementById("card-img-container");


//Crear elemento img
const imageElement = document.createElement("img");
imageElement.src = IMAGE_URL;
imageElement.alt = "User profile photo";

//Creamos elemento titulo -> card
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title");
const cardAgeElement = document.createElement("p");
const cardDescElement = document.createElement("p");


//Poblar
cardTitleElement.textContent = USER.username;
cardAgeElement.textContent = USER.age;
cardDescElement.textContent = USER.description;

//Renderizar
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement , cardAgeElement,cardDescElement);
