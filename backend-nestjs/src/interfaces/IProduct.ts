export interface IProductCategory {
    _id: String;
    category: String;
}

export interface IProductStock {
    productId: String;
    stockCount: Number;
}

export interface IProduct {
    _id: String;
    name: String;
    image: String;
    description: String;
    brand: String;
    category: String;
    price: Number;
    countInStock: Number;
    rating: Number;
    numReviews: Number;
}