import {
  ProductGallery,
  ProductImage,
} from "./components/product-gallery";

export default function App() {
  // 商品画像の配列（可変式：3〜10枚まで自由に増減可能）
  // 各画像にダウンロードURLを設定できます
  const productImages: ProductImage[] = [
    {
      url: "https://dl.dropboxusercontent.com/scl/fi/bp2x1wz7elsr75o87df8x/ITO_Tokuharu_Profile.JPG?rlkey=l7ldx1z0ibys109jima7mzi8l",
      downloadUrl: "https://www.dropbox.com/scl/fi/bp2x1wz7elsr75o87df8x/ITO_Tokuharu_Profile.JPG?dl=1", // ここにダウンロードリンクを設定
      alt: "商品画像1",
    },
    {
      url: "https://dl.dropboxusercontent.com/scl/fi/kr5zd3tea1cjal3qab423/IMG_0026.JPG?rlkey=1yz9jh7kj2y6d38g2u599r5hm",
      downloadUrl: "https://www.dropbox.com/scl/fi/kr5zd3tea1cjal3qab423/IMG_0026.JPG?dl=1", // ここにダウンロードリンクを設定
      alt: "商品画像2",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-start justify-center p-4 md:p-8">
      <div className="w-full max-w-[650px]">
        <ProductGallery images={productImages} />
      </div>
    </div>
  );
}
