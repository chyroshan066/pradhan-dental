import { MEDIA_ITEMS } from '@/constants/gallery';
import Gallery from './_components/Gallery/Gallery';

export default function GalleryPage() {
  return (
    <main>
      <Gallery
        mediaItems={MEDIA_ITEMS}
      />
    </main>
  );
}