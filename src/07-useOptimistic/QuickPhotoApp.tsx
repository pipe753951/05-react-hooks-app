import { useOptimistic, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { MessageCircleWarningIcon, SendHorizontal, X } from "lucide-react";

interface Comment {
  id: number;
  text: string;
  optimistic?: boolean;
}

export const QuickPhotoApp = () => {
  const [isPending, startTransition] = useTransition();

  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: "¡Gran foto!" },
    { id: 2, text: "Me encanta 🧡" },
  ]);

  const lastOptimisticCommentId = useRef(2);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newCommentText: string): Comment[] => {
      lastOptimisticCommentId.current++;
      return [
        ...currentComments,
        {
          id: lastOptimisticCommentId.current,
          text: newCommentText,
          optimistic: true,
        },
      ];
    },
  );

  const handleAddComment = async (form: FormData) => {
    const newMessageText = form.get("post-message");
    if (!newMessageText) return;

    console.log(`Nuevo comentario: ${newMessageText}`);

    startTransition(async () => {
      addOptimisticComment(newMessageText.toString());

      // Simular la petición HTTP del servidor.
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // const newComment: Comment = {
      //   id: Date.now(),
      //   text: newMessageText?.toString() ?? "Mensaje",
      // };
      // setComments((prevComments) => [...prevComments, newComment]);
      // console.log("Mensaje grabado.");

      //* Este sería el código para revertir el proceso
      setComments((prevComments) => prevComments);
      toast.error("Hubo un error: no se pudo añadir tu comentario.", {
        description: "Por favor, vuelve a intentar enviarlo.",
        duration: 10000,
        position: "top-right",
        classNames: {
          icon: "size-6!",
        },
        icon: <MessageCircleWarningIcon />,
        action: (
          <button
            onClick={() => toast.dismiss()}
            className="bg-red-500 text-white p-2 shadow-md rounded-full cursor-pointer transition-shadow duration-300 ease-in-out outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/80 focus:ring-red-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white/80 focus-visible:ring-red-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <X size={20} />
          </button>
        ),
      });
    });
  };

  return (
    <div className="app-container">
      <div className="flex flex-col items-center justify-center p-4 bg-white/80 rounded-4xl">
        {/* Post de ejemplo */}
        <div className="flex flex-col items-center justify-center rounded-t-3xl w-125">
          <img
            src="https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?w=500&h=500&fit=crop"
            alt="Instagrom"
            className="object-cover rounded-xl mb-4"
          />
          <h1 className="text-black text-3xl font-bold">
            ¡Mira que interesante esta funcionalidad de la API de React!
          </h1>
        </div>
        {/* Comentarios */}
        <ul className="flex flex-col items-start justify-center w-125 px-4 py-8">
          {optimisticComments.map((comment) => (
            <li key={comment.id} className="flex items-center gap-2 mb-2">
              <div className="bg-radial-[at_0%_100%] from-blue-700 from-30% to-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-white text-center font-bold">A</span>
              </div>
              <p className="text-black">{comment.text}</p>
              {comment.optimistic && (
                <i className="text-gray-700 text-sm">Enviando... </i>
              )}
            </li>
          ))}
        </ul>
        {/* Formulario de comentarios */}
        <form
          action={handleAddComment}
          className="flex items-center gap-2 justify-center w-125 rounded-b-3xl"
        >
          <input
            type="text"
            name="post-message"
            placeholder="Escribe un comentario"
            required
            className="w-full px-4 py-2 text-black bg-white rounded-full shadow-md"
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-500 text-white p-2 shadow-md rounded-full cursor-pointer transition-shadow duration-300 ease-in-out outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/80 focus:ring-blue-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white/80 focus-visible:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <SendHorizontal />
          </button>
        </form>
      </div>
    </div>
  );
};
