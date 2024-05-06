const items = [
    {
        product_no: 1,
        product_name: "Glass Tumbler",
        product_price: 100,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem at sunt reiciendis ad optio laboriosam minus, tempore facilis? Libero, omnis qui neque accusamus beatae mollitia soluta quam rem fugit.",
        product_image: "Resized img/Glass Tumbler 2.jpg"
    },
    {
        product_no: 2,
        product_name: "Glass Tumbler",
        product_price: 100,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem at sunt reiciendis ad optio laboriosam minus, tempore facilis? Libero, omnis qui neque accusamus beatae mollitia soluta quam rem fugit.",
        product_image: "Resized img/Glass Tumbler 3.jpg"
    },
    {
        product_no: 3,
        product_name: "Glass Tumbler",
        product_price: 100,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem at sunt reiciendis ad optio laboriosam minus, tempore facilis? Libero, omnis qui neque accusamus beatae mollitia soluta quam rem fugit.",
        product_image: "Resized img/Glass Tumbler 4.jpg"
    },
    {
        product_no: 4,
        product_name: "Glass Tumbler",
        product_price: 100,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem at sunt reiciendis ad optio laboriosam minus, tempore facilis? Libero, omnis qui neque accusamus beatae mollitia soluta quam rem fugit.",
        product_image: "Resized img/Glass Tumbler 5.jpg"
    },
    {
        product_no: 5,
        product_name: "Glass Tumbler",
        product_price: 100,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem at sunt reiciendis ad optio laboriosam minus, tempore facilis? Libero, omnis qui neque accusamus beatae mollitia soluta quam rem fugit.",
        product_image: "Resized img/Glass Tumbler 6.jpg"
    },
];

let cartItems = [];

if(localStorage.getItem("shopping_cart")){
    cartItems = JSON.parse(localStorage.getItem("shopping_cart"));
}