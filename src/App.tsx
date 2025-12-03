import {
  ProductGallery,
  ProductImage,
} from "./components/product-gallery";

export default function App() {
  // 商品画像の配列（可変式：3〜10枚まで自由に増減可能）
  // 各画像にダウンロードURLを設定できます
  const productImages: ProductImage[] = [
    {
      url: "https://images.unsplash.com/photo-1760708825913-65a50b3dc39b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjYWJsZSUyMGJsYWNrfGVufDF8fHx8MTc2NDc1OTUzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      downloadUrl: "YOUR_DOWNLOAD_LINK_1", // ここにダウンロードリンクを設定
      alt: "商品画像1",
    },
    {
      url: "https://images.unsplash.com/photo-1756043827134-dcc8ac7462f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwY2FibGUlMjBjbG9zZXxlbnwxfHx8fDE3NjQ3NTk1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      downloadUrl: "YOUR_DOWNLOAD_LINK_2", // ここにダウンロードリンクを設定
      alt: "商品画像2",
    },
    {
      url: "https://images.unsplash.com/photo-1729514552992-91c78b07a88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY2FibGV8ZW58MXx8fHwxNzY0NzU5NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      downloadUrl: "YOUR_DOWNLOAD_LINK_3", // ここにダウンロードリンクを設定
      alt: "商品画像3",
    },
    {
      url: "https://images.unsplash.com/photo-1762341125975-5821ed9928c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyZ2luZyUyMGNhYmxlJTIwZGV0YWlsfGVufDF8fHx8MTc2NDc1OTU0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      downloadUrl: "YOUR_DOWNLOAD_LINK_4", // ここにダウンロードリンクを設定
      alt: "商品画像4",
    },
    {
      url: "https://images.unsplash.com/photo-1760708825913-65a50b3dc39b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjYWJsZSUyMGJsYWNrfGVufDF8fHx8MTc2NDc1OTUzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      downloadUrl: "YOUR_DOWNLOAD_LINK_5", // ここにダウンロードリンクを設定
      alt: "商品画像5",
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