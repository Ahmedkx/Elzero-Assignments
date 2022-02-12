let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here


if(chosen === 1){
    let [{title:t,age:a,available:av,skills:[,s]}] = myFriends
    printInfo(t,a,av,s)
}else if(chosen === 2){
    let [{},{title:t,age:a,available:av,skills:[,s]}] = myFriends
    printInfo(t,a,av,s)
}else if(chosen === 3){
    let [{},{},{title:t,age:a,available:av,skills:[,s]}] = myFriends
    printInfo(t,a,av,s)
}

function printInfo(title,age,availability,skills) {
    if(availability){
        availability = "Available";
    }else{
        availability = "Not Available";
    }
    console.log(title)
    console.log(age)
    console.log(availability)
    console.log(skills)
}



// ({title: t,age: a,available: av,skills: [skillOne, skillTwo]} = myFriends[chosen - 1]);

// console.log(`Name: ${t}, Age: ${a},  Available: ${av}, Skill: ${skillTwo}`);
