import { useCounter } from "../hooks/useCounter";
import { useLoremPicsum } from "../hooks/useLoremPicsum";
import { Button } from "../shared/components/Button";

export const LoremPicsumPage = function () {
  const { counter, increase, reduce } = useCounter();
  const { isLoading, loremPicsumImage, formattedId } = useLoremPicsum({
    id: counter,
  });

  if (isLoading) {
    return (
      <div className="app-container text-center">
        <h1 className="text-white text-5xl font-bold mb-7">Foto</h1>
        <section>
          <h2 className="text-white text-2xl font-light mb-7">
            <i>Cargando...</i>
          </h2>
        </section>
      </div>
    );
  }

  if (!loremPicsumImage) {
    return (
      <div className="app-container text-center">
        <h1 className="text-white text-5xl font-bold mb-7">Foto</h1>
        <section>
          <h2 className="text-white text-2xl font-light mb-7">
            <i>Imagen no encontrada o disponible</i>
          </h2>
        </section>
      </div>
    );
  }

  return (
    <div className="app-container text-center">
      <h1 className="text-white text-5xl font-bold mb-7">Foto</h1>
      <section>
        <h2 className="text-white text-2xl font-light mb-7">
          #{formattedId} <i>{loremPicsumImage.author}</i>
        </h2>
        <figure className="flex flex-col w-70">
          <img
            src={`https://picsum.photos/id/${counter}/300/200`}
            alt={`Foto #${formattedId} - ${loremPicsumImage.author}`}
            className="rounded-2xl"
          />
          <figcaption className="mt-2">
            De &#32;
            <a
              href="#"
              title={`De ${loremPicsumImage.author}`}
              className="italic"
            >
              {loremPicsumImage.author}
            </a>
            &#32;-&#32;
            <a
              href="https://commons.wikimedia.org/w/index.php?curid=49816657"
              className="underline"
            >
              Unsplash
            </a>
          </figcaption>
        </figure>
        <div className="flex justify-between gap-2 my-5">
          <Button
            onClick={reduce}
            className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500"
          >
            Anterior
          </Button>
          <Button
            onClick={increase}
            className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500"
          >
            Siguiente
          </Button>
        </div>
      </section>
    </div>
  );
};
