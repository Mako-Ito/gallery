import { useState } from 'react';
import { Download } from 'lucide-react';

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
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-[650px] mx-auto bg-white p-0">

      {/* Desktop サムネイル（左側） */}
      <div className="hidden md:flex flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className="w-[60px] h-[60px] rounded border-2 transition-all bg-[#F7F7F7] overflow-hidden flex-shrink-0"
            style={{
              borderColor: selectedIndex === index ? '#000000' : '#E0E0E0',
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

      {/* メイン画像（9:16固定） */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="relative w-full bg-[#F7F7F7] overflow-hidden rounded group">
          {/* 9:16 アスペクト比ボックス */}
          <div className="relative w-full pt-[177.78%]">
            <img
              src={currentImage.url}
              alt={currentImage.alt || "メイン画像"}
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* ダウンロードボタン（ホバー表示） */}
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

        {/* Mobile: 横スクロールのサムネイル */}
        <div className="md:hidden overflow-x-auto flex gap-2 pb-2">
          <div className="flex gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                className="w-[60px] h-[60px] rounded border-2 transition-all bg-[#F7F7F7] overflow-hidden flex-shrink-0"
                style={{
                  borderColor: selectedIndex === index ? '#000000' : '#E0E0E0',
                }}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt || `サムネイル ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile ダウンロードボタン（常時表示） */}
        <a
          href={currentImage.downloadUrl}
          download
          className="md:hidden w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>この画像をダウンロード</span>
        </a>
      </div>
    </div>
  );
}
