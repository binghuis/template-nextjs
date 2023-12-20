'use client';
import { Image } from '@nextui-org/react';
import photos from '@src/constant/photos';

interface Props {
  params: {
    id: string;
  };
}

export default function PhotoPage({ params: { id } }: Props) {
  const photo = photos.find((p) => p.id === id);
  return <Image alt={photo?.name} width={200} src={photo?.imageSrc} />;
}
