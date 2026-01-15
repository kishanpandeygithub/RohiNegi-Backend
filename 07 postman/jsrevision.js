let bookStore = [
    {
        id: 1,
        name: "Harry Potter",
        aurhor: "Kishan pandey"
    },
    {
        id: 2,
        name: "Friends",
        aurhor: "Marks Hallen"
    },
    {
        id: 3,
        name: "The RollerCoster",
        aurhor: "Mark andrios"
    },
    {
        id: 4,
        name: "DSA",
        aurhor: "Jack"
    },
    {
        id: 5,
        name: "System Design",
        aurhor: "Karl marks"
    }
]

// bookStore = bookStore.filter((n) => {
//     return n.id != 2;
// })
// console.log(bookStore);

let index = bookStore.findIndex((n) => {
    return n.id == 2;
})
bookStore.splice(index, 1);
console.log(bookStore);
// let obj = bookStore.find((n) => {
//     return n.id == 2;
// })

// console.log(obj);

// console.log(bookStore.includes({
//     id: 5,
//     name: "System Design",
//     aurhor: "Karl marks"
// }));

// let arr = [2, 3, 4, 5, 6];
// console.log(arr.includes(2));

// let map = arr.map((n) => {
//     return n * n;
// })
// console.log(map);

// let filter = arr.filter((n) => {
//     return n > 4;
// })
// console.log(filter);

// let redude = arr.reduce((acc, val) => {
//     return acc + val;
// }, 0)

// console.log(redude);

// let newarr = arr.slice(2, 4);
// console.log(newarr);

// let spl = arr.splice(1, 3, 2, 3, 4);

// console.log(arr);
// console.log(spl);