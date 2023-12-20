'use client';
import { Image, Modal, ModalContent } from '@nextui-org/react';
import photos from '@src/constant/photos';
import { useRouter } from 'next/navigation';
interface Props {
  params: {
    id: string;
  };
}

export default function PhotoModal({ params: { id } }: Props) {
  const photo = photos.find((p) => p.id === id);
  const router = useRouter();

  return (
    <Modal
      isOpen={true}
      onClose={() => {
        router.back();
      }}
    >
      <ModalContent>
        <Image alt={photo?.name} src={photo?.imageSrc} />
      </ModalContent>
    </Modal>
  );
}
