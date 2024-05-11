export interface Product{
    description: string;
    price: number;
}

const phone:Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

//function taxCalculation({tax, products}:TaxCalculationOptions):[number, number]{
export function taxCalculation(options:TaxCalculationOptions):[number, number]{
    let total = 0;

    const {products, tax} = options
    products.forEach(({price} )=>{
        //const {price} = product
        total += price;
    })

    return [total, total * tax];
}

const [total, taxCalculated] = taxCalculation({
    products: shoppingCart,
    tax
});

//const [total, taxCalculated] = result
console.log('Total ', total);
console.log('Tax ', taxCalculated);

export {};