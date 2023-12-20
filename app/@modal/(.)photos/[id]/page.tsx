import { Image, Modal } from '@nextui-org/react';
import photos from '@src/constant/photos';

interface Props {
  params: {
    id: string;
  };
}

export default function PhotoModal({ params: { id } }: Props) {
  const photo = photos.find((p) => p.id === id);

  return (
    <Modal>
      9999
      <Image alt={photo?.name} src={photo?.imageSrc} />
    </Modal>
  );
}
