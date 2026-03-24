import { useState } from "react";

interface LoremPicsumImage {
  id: number;
  author: string;
  urlString: string;
}

interface Props {
  id: number;
}

export const useLoremPicsum = ({ id }: Props) => {
  const [loremPicsumImage, setLoremPicsumImage] =
    useState<LoremPicsumImage | null>(null);

  const getAnimalById = async (id: number) => {
    const response = await fetch("https://picsum.photos/id/1/info");
    const data = await response.json();

    setLoremPicsumImage({
      id: id,
      author: data.author,
      urlString: `https://picsum.photos/id/${id}/300/200`,
    });
  };

  return {
    // Properties
    loremPicsumImage,
  };
};
