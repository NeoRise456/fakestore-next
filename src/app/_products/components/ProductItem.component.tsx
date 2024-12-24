import {Product} from "@/app/_products/model/Product.entity";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

interface ProductItemProps {
    product: Product;
}

export default function ProductItem({product}: ProductItemProps) {
    return (
        <Card className={`w-full overflow-hidden`}>
            <CardHeader className={`p-0`}>
                <div className={`relative w-full h-52`}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority
                        className="object-cover"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold">{product.title}</CardTitle>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-xl font-bold">${product.price}</span>
            </CardFooter>

        </Card>
    )
}