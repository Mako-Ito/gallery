import { useState } from "react";
import { Download } from "lucide-react";

export interface ProductImage {
  url: string;
  downloadUrl: string;
  alt?: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const displayImageIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
  const currentImage = images[displayImageIndex];

  return (
    <div className="flex flex-row gap-4 w-full mx-auto bg-white rounded-xl shadow-md p-3 md:p-4">
      {/* サムネイル（常に左固定） */}
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className="w-[60px] h-[60px] rounded border-2 transition-all bg-[#F7F7F7] overflow-hidden flex-shrink-0"
            style={{
              borderColor: selectedIndex === index ? "#000000" : "#E0E0E0",
            }}
            onClick={() => setSelectedIndex(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.url}
              alt={image.alt || `サムネイル ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* メイン画像：比率そのまま、高さだけ 30vh 上限・内部スクロールなし */}
      <div className="flex-1 flex flex-col">
        <div className="relative w-full bg-[#F7F7F7] rounded-lg flex items-center justify-center group min-h-[200px] max-h-[30vh] overflow-hidden">
          <img
            src={currentImage.url}
            alt={currentImage.alt || "メイン画像"}
            className="max-h-[30vh] w-auto h-auto object-contain"
          />

          {/* ダウンロードボタン（ホバー時表示） */}
          <a
            href={currentImage.downloadUrl}
            download
            className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-lg transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100"
          >
            <Download className="w-4 h-4" />
            <span>ダウンロード</span>
          </a>
        </div>
      </div>
    </div>
  );
}
