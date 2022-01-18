let students = [{
    name: "John",
    id: 3
},
{
    name: "Peter",
    id: 2
},
{
    name: "Mary",
    id: 10
}
];
console.log(students)
students.sort(function (x, y) {
return strCompare(x.name, y.name);
});
console.log(students)
students.sort((s1, s2) => {
    if (s1.id < s2.id) {
        return -1
    } else if (s1.id > s2.id) {
        return 1
    } else {
        return 0
    }
})

console.log(students)
function strCompare(x, y) {
    if (x < y) {
    return -1;
    } else if (x > y) {
    return 1;
    } else {
    return 0;
    }
}