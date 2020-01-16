// Lightning Exercise 1: Given two options of data structures - array or object - 
// which should you use? You need to represent a red 2015 Ford Mustang in your code.
const car = {
    color: "red",
    year: "2015,",
    manufacturer: "Ford",
    model: "Mustang",
};

// Lightning Exercise 2: Given two options of data structures - array or object - 
// which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];


// Lightning Exercise 3: Define an object for four family members, 
// and put each object in an array named familyMembers. 
// Each family member object that you create should have the same keys on them, but the values will be different.
const nancy = {
    name: "Nancy",
    age: 100
};

const tyler = {
    name: "Tyler",
    age: 245
};

const tina = {
    name: "Tina",
    age: 1
};

const jessie = {
    name: "jessie",
    age: 999
};

const familyMembers = [nancy, tyler, tina, jessie];

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log("Wardrobe details:")
console.log("Wardrobe height is " + wardrobe.height);
console.log("Wardrobe manufacturer is " + wardrobe.manufacturer);
console.log("Wardrobe contents is " + wardrobe.contents);
console.log("Wardrobe depth is " + wardrobe.depth);
console.log("Wardrobe width is " + wardrobe.width);

// Lightning Exercises 1: 
// Use dot notation to output all of the dimensions of the Empire State Building to the console.
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log("Empire State Building Details:")
console.log("stories = " + empireStateBuilding.stories);
console.log("height = " + empireStateBuilding.height);
console.log("square feet = " + empireStateBuilding.squareFeet);

// Lightning Exercises 2: 
// Use square bracket notation to output the remaining 5 properties to the console. 
// Create 5 variables first with the keys as their values. Use those variables to look up the values.

console.log("Address = " + empireStateBuilding["address"]);
console.log("Construction Date = " + empireStateBuilding["constructionDate"]);
console.log("Cost = " + empireStateBuilding["cost"]);
console.log("Owner = " + empireStateBuilding["owner"]);
console.log("Architect = " + empireStateBuilding["architect"]);

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log("NSS Instructors:")
console.log("Part Time: " + nashvilleSoftwareSchool.instructors.partTime);
console.log("Full Time: " + nashvilleSoftwareSchool.instructors.fullTime);


// Lightning Exercise 2: Output only Andy and Zoe in the console.
console.log("Target only Andy: ", nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log("Target only Zoe: ", nashvilleSoftwareSchool.instructors.partTime[0]);

// Practice 
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// Output the following value to the console:
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

let paul = beatles.members[1]

console.log(`${paul.name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}.`); 
console.log(`He was born in ${paul.birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);