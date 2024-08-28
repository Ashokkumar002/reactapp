let personlist = [{
    "name":"Ashok",
    "address":"chennai",
    "mobile":"123456",
    "email":"ashokgtncollege@gmail.com"
},
{
    "name":"Karan",
    "address":"manali",
    "mobile":"67890",
    "email":"Karandg@gmail.com"
},
{
    "name":"Kumar",
    "address":"manali",
    "mobile":"67890",
    "email":"Kumardg@gmail.com"
}
];

console.log(personlist[2])

for(let index in personlist){
    console.log(personlist[index]['name']);
}

