import {Product} from "@/app/_products/model/Product.entity";
import ProductItem from "@/app/_products/components/ProductItem.component";

interface ProductListProps {
    products : Product[];
}


export default function ProductList({products}: ProductListProps) {
    return (
        <div className={`grid grid-cols-4 gap-6 `}>
            {
                products.map((product: Product) => (
                    <ProductItem key={product.id} product={product}/>
                ))
            }
        </div>
    )
}