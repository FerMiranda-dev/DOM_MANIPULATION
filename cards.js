const IMAGE_URL = "http://placehold.co/200";

const users = [
    {
        id: 0,
        username: 'User Name',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
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
];

// Selector del contenedor principal
const container = document.getElementById("container");

// Función para crear una tarjeta de usuario
function createUserCard(user) {
    // Crear los elementos de la tarjeta
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("card-img-container");

    const imageElement = document.createElement("img");
    imageElement.src = IMAGE_URL;
    imageElement.alt = "User profile photo";

    const cardTitleElement = document.createElement("h3");
    cardTitleElement.classList.add("card-title");

    const cardAgeElement = document.createElement("p");
    const cardDescElement = document.createElement("p");

    // Poblar los elementos con datos del usuario
    cardTitleElement.textContent = user.username || user.user_name;
    cardAgeElement.textContent = `Edad: ${user.age}`;
    cardDescElement.textContent = `Descripción: ${user.description}`;

    // Agregar elementos a la tarjeta
    cardImgContainer.appendChild(imageElement);
    card.append(cardImgContainer, cardTitleElement, cardAgeElement, cardDescElement);

    return card;
}

// Iterar sobre la lista de usuarios y crear una tarjeta para cada uno
users.forEach(user => {
    const userCard = createUserCard(user);
    container.appendChild(userCard);
});
