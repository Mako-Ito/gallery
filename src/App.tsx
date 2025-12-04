import {
  ProductGallery,
  ProductImage,
} from "./components/product-gallery";

export default function App() {
  // 商品画像の配列（可変式：3〜10枚まで自由に増減可能）
  const productImages: ProductImage[] = [
    {
      url: "https://raw.githubusercontent.com/Mako-Ito/gallery/main/public/ITO_Tokuharu_Profile.JPG",
      downloadUrl:
        "https://www.dropbox.com/scl/fi/bp2x1wz7elsr75o87df8x/ITO_Tokuharu_Profile.JPG?rlkey=l7ldx1z0ibys109jima7mzi8l&dl=1",
      alt: "商品画像1",
    },
    {
      url: "https://raw.githubusercontent.com/Mako-Ito/gallery/main/public/IMG_0026.JPG",
      downloadUrl:
        "https://www.dropbox.com/scl/fi/kr5zd3tea1cjal3qab423/IMG_0026.JPG?rlkey=1yz9jh7kj2y6d38g2u599r5hm&dl=1",
      alt: "商品画像2",
    },
  ];

  return (
    <div className="w-full flex justify-center py-4 md:py-6 bg-transparent">
      {/* 埋め込み幅を少しタイトにして左右の余白を減らす */}
      <div className="w-full max-w-[520px] md:max-w-[640px]">
        <ProductGallery images={productImages} />
      </div>
    </div>
  );
}
