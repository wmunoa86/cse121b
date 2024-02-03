/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Walter Muñoa",
    photo: "images/image.jpg",
    favoriteFoods: ['Rice', 'Tikka Masala', 'Prioshki', 'Shrimp', 'Banana Cream Pie'],
    hobbies: ['Read', 'Dance', 'Draw', 'Play Soccer'],
    placedLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placedLived.push({
    place: 'Tuxtla Gutierrez, Chiapas',
    length: '25 years'
});

myProfile.placedLived.push({
    place: "Culican, Sinaloa",
    length: "1 year"
});

myProfile.placedLived.push({
    place: "Mazatlan, Sinaloa",
    length: "1 year"
});


/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placedLived.forEach(info => {
    let dt = document.createElement('dt');
    dt.textContent = info.place;

    let dd = document.createElement('dd');
    dd.textContent = info.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});