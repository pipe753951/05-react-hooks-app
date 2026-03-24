import { useEffect, useState } from "react";

interface LoremPicsumImage {
  id: number;
  author: string;
  urlString: string;
}

interface Props {
  id: number;
}

const getLoremPicsumImageById = async (
  id: number,
): Promise<LoremPicsumImage> => {
  const response = await fetch(`https://picsum.photos/id/${id}/info`);
  const data = await response.json();

  return {
    id: id,
    author: data.author,
    urlString: `https://picsum.photos/id/${id}/300/200`,
  };
};

export const useLoremPicsum = ({ id }: Props) => {
  const [loremPicsumImage, setLoremPicsumImage] =
    useState<LoremPicsumImage | null>(null);
  const [prevId, setPrevId] = useState(id);
  const [isLoading, setIsLoading] = useState(true);

  if (id !== prevId) {
    setPrevId(id);
    setIsLoading(true);
  }

  useEffect(() => {
    let ignore = false;
    getLoremPicsumImageById(id).then((image) => {
      if (ignore) return;
      setLoremPicsumImage(image);
      setIsLoading(false);
    });
    return () => {
      ignore = true;
    };
  }, [id]);

  return {
    // Properties
    isLoading,
    loremPicsumImage,

    // Computed
    formattedId: id.toString().padStart(3, "0"),
  };
};
