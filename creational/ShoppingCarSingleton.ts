class Product {
    private id: number;
    private name: string; 
    private cost: number;

    constructor(id: number, name: string, cost: number) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }


    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCost() {
        return this.cost;
    } 

}



class ShoppingCar {
    private static instance: ShoppingCar;
    private  products: Product[] = [];


    getShoppingCar(): Product[] {
        return this.products;
    }

    add(product: Product): void {
        this.products.push(product);
    }

    deleteProductById(id: number): void {
        this.products = this.products.filter((product) => product.getId() !== id);
    }

    static getInstance() {
        if(!this.instance)
            this.instance = new ShoppingCar();
        return this.instance;
    }
}

(() => {
    const car = ShoppingCar.getInstance();
    const car2 = ShoppingCar.getInstance();

    const prod1 = new Product(1, "matcha", 100);
    const prod2 = new Product(2, "chai", 200);
    const prod3 = new Product(3, "café", 300);

    car.add(prod3);
    car.add(prod1);

    console.log("car: ", car.getShoppingCar());

    car.deleteProductById(3)

    console.log("car: ", car.getShoppingCar());

})