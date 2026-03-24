import { useCounter } from "../hooks/useCounter";
import { Button } from "../shared/components/Button";

export const LoremPicsumPage = function () {
  const { counter, increase, reduce } = useCounter();

  return (
    <div className="app-container text-center">
      <h1 className="text-white text-5xl font-bold mb-7">Foto</h1>
      <section>
        <h2 className="text-white text-2xl font-light mb-7">
          #{counter} <i>(Autor)</i>
        </h2>
        <figure className="flex flex-col w-70">
          <img
            src={`https://picsum.photos/id/${counter}/300/200`}
            alt="Imagen"
            className="rounded-2xl"
          />
          <figcaption className="mt-2">
            De &#32;
            <a href="#" title="De Fábio de Paina Nunes" className="italic">
              Fábio de Paina Nunes
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
