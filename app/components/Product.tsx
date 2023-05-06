import { ProductType } from "@/types/ProductType";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";

export default function Product({ name, image, unit_amount }: ProductType) {
  return (
    <div className="text-gray-700 py-2">
      <Image
        src={image}
        alt={name}
        width={800}
        height={800}
        className="w-full h-80 object-cover rounded-lg"
      />
      <div className="font-medium">
        <h1>{name}</h1>
        <h2 className="text-sm text-teal-700">
          {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}{" "}
        </h2>
      </div>
    </div>
  );
}
