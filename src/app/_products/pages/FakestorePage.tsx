import {Product} from "@/app/_products/model/Product.entity";
import ProductList from "@/app/_products/components/ProductList.component";

async function loadProducts() : Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
}

export default async function FakestorePage() {

    const products = await loadProducts();

    return (
        <>
            <div className={`flex-grow container mx-auto py-8 px-4`}>
                <ProductList products={ products}/>
            </div>
        </>
    )
}
