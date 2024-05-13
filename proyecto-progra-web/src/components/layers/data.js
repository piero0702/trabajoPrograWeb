// Función para generar un precio aleatorio entre un rango dado
function generateRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Array de productos de cuidado personal (mock)
const products = [
    {
        index: 1,
        name: "Crema Hidratante Revitalizante",
        price: generateRandomPrice(10, 20),
        image: "https://pe.loccitane.com/cdn/shop/products/20HR050H20_220cca88-55d6-4553-a5f3-af71796bf72e_720x.jpg?v=1645137430",
    },
    {
        name: "Champú Nutritivo de Aloe Vera",
        price: generateRandomPrice(8, 15),
        image: "https://aruma.vtexassets.com/arquivos/ids/169204-1200-auto?v=637563720293870000&width=1200&height=auto&aspect=true",
    },
    {
        index: 2,
        name: "Jabón Exfoliante de Lavanda y Sal Marina",
        price: generateRandomPrice(5, 10),
        image: "https://i.etsystatic.com/29150517/r/il/a05d33/3634802963/il_794xN.3634802963_qkiy.jpg",
    },
    {
        index: 3,
        name: "Aceite Corporal de Rosa Mosqueta",
        price: generateRandomPrice(15, 25),
        image: "https://www.weleda.com.pe/wp-content/uploads/2021/09/WELEDA-ACEITE-DE-ROSA-MOSQUETA-470x470.png",
    },
    {
        index: 4,
        name: "Desodorante Natural en Barra",
        price: generateRandomPrice(7, 12),
        image: "https://theecobagcompany.pe/wp-content/uploads/2023/01/Desodorante-solido-600x800.jpeg",
    }
];
export default products;