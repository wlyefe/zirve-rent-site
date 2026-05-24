const cars = [

{
name:"Renault Megane",
type:"Ekonomik Sedan",
daily:1750,
weekly:11200,
monthly:42900,
image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Fiat Egea",
type:"Ekonomik Sedan",
daily:1650,
weekly:10400,
monthly:39800,
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Renault Clio",
type:"Ekonomik Hatchback",
daily:1490,
weekly:9400,
monthly:35900,
image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Hyundai i20",
type:"Ekonomik Hatchback",
daily:1520,
weekly:9600,
monthly:36500,
image:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Toyota Corolla",
type:"Sedan",
daily:1980,
weekly:12500,
monthly:46900,
image:"https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Honda Civic",
type:"Sedan",
daily:2150,
weekly:13700,
monthly:51800,
image:"https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Peugeot 3008",
type:"SUV",
daily:3150,
weekly:19800,
monthly:75800,
image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Opel Mokka",
type:"SUV",
daily:2820,
weekly:17900,
monthly:68900,
image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Volkswagen Passat",
type:"Premium Sedan",
daily:3480,
weekly:22400,
monthly:83900,
image:"https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Volvo XC60",
type:"Premium SUV",
daily:4650,
weekly:29900,
monthly:112000,
image:"https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Dacia Sandero",
type:"Ekonomik",
daily:1320,
weekly:8200,
monthly:31800,
image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Kia Rio",
type:"Ekonomik",
daily:1410,
weekly:8700,
monthly:33400,
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Seat Ibiza",
type:"Hatchback",
daily:1580,
weekly:9800,
monthly:37200,
image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Volkswagen Polo",
type:"Ekonomik",
daily:1690,
weekly:10500,
monthly:39900,
image:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Ford Focus",
type:"Sedan",
daily:1890,
weekly:11800,
monthly:45200,
image:"https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Skoda Superb",
type:"Premium Sedan",
daily:2950,
weekly:18800,
monthly:71800,
image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Citroen C-Elysee",
type:"Ekonomik Sedan",
daily:1470,
weekly:9200,
monthly:34900,
image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop"
},

{
name:"Nissan Qashqai",
type:"SUV",
daily:2890,
weekly:18200,
monthly:69400,
image:"https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1200&auto=format&fit=crop"
}

];

/* ÇOKLU FARKLI EKONOMİK ARAÇLAR */

const brands = [

"Fiat Linea",
"Fiat Fiorino",
"Renault Symbol",
"Renault Taliant",
"Hyundai Accent",
"Toyota Yaris",
"Toyota Auris",
"Kia Picanto",
"Kia Ceed",
"Seat Leon",
"Skoda Octavia",
"Volkswagen Jetta",
"Volkswagen Golf",
"Peugeot 301",
"Peugeot 208",
"Citroen C3",
"Citroen C4",
"Ford Fiesta",
"Ford Puma",
"Dacia Duster",
"Opel Astra",
"Opel Corsa",
"Nissan Micra",
"Nissan Juke",
"Chevrolet Cruze",
"Mitsubishi Attrage",
"Suzuki Swift",
"Mazda 3",
"Audi A3",
"BMW 1 Serisi",
"Mercedes A180"

];

for(let i=0;i<brands.length;i++){

cars.push({

name:brands[i],

type:
i % 3 === 0
? "Ekonomik Sedan"
:
i % 3 === 1
? "SUV"
:
"Hatchback",

daily:
1300 + (i * 95),

weekly:
8200 + (i * 550),

monthly:
32000 + (i * 2100),

image:
i % 2 === 0
?
"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
:
"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"

});

}