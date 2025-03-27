let scores = [10, 20, 10];

let i = 0;

while(i < scores.length) {
  scores[i]++;
  i++;
}

console.log(scores); // [11, 21, 11]

for(let i = 0; i < scores.length; i++) {
    scores[i]++;
}

console.log(scores); // [12, 22, 12]

scores.forEach(function(entry, index){
    entry++; // passing by value, so original array is not modified
});

console.log(scores);

scores.forEach(function(entry, index){
    scores[index]++;
});

console.log(scores);

let catalog = [
    {
        title: 'JS for Beginners',
        author: 'Zenva',
        copies: 1
    },
    {
        title: 'HTML for Beginners',
        author: 'Zenva',
        copies: 1
    },
    {
        title: 'CSS for Beginners',
        author: 'XYZ',
        copies: 1
    }
]

catalog.forEach(function(entry){
    console.log(entry);
});

catalog.forEach(function(entry){
    if(entry.author == 'Zenva') {
        entry.copies++;
    }
});

console.log(catalog);