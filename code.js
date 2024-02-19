const allDogs = [

    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5
    },
    {
        dogName: "Addie",
        breed: "Staffordshire Bull",
        age: 11
    },
    {
        dogName: "Alaskan Bull Worm",
        breed: "American Staffordshire",
        age: 3
    },
    {
        dogName: "Prince",
        breed: "Terrier",
        age: 4
    },
    {
        dogName: "Zeus The Third",
        breed: "Husky",
        age: 4
    },
    {
        dogName: "Yeti",
        breed: "Pitbull",
        age: 5
    },
    {
        dogName: "Toddy",
        breed: "Australian Sheperd",
        age: 3
    },
    {
        dogName: "Sparky",
        breed: "Bulldog",
        age: 1 
    },
    {
        dogName: "Smokey Joe",
        breed: "Chihuahua",
        age: 7
    }
];

function findDogs() {
    const minAge = parseInt(document.getElementById("minAgeInput").value);

    if (isNaN(minAge) || minAge < 0) {
        alert("Please enter a valid age.");
        return;
    }

    const selectedDogs = [];

    allDogs.forEach((dog) => {
        if (dog.age > minAge) {
            selectedDogs.push(dog);
        }
    });
    displayDogs(selectedDogs);
}

function displayDogs(dogs) {
    const outputArea = document.getElementById("dogInfo");

    outputArea.innerHTML = "";

    allDogs.forEach((dog) => {
        const dogInfo = document.createElement("p");
        dogInfo.textContent = `Name: ${dog.dogName}, Age: ${dog.age}, Breed: ${dog.breed}`;
        outputArea.appendChild(dogInfo);
    });
}