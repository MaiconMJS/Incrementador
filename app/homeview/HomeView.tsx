"use client";

import { ButtonStyle, Display } from "@/components/IncrementadorComponents";
import Incrementador from "@/hooks/Incrementador";

const HomeView = () => {
  const {
    manualIncrement,
    manualIsPressed,
    numeroN1,
    numeroN2,
    zerarContadores,
    automaticIncrement,
    stopAutoIncrementador,
    stopAutoIsPressed,
    autoIsPressed,
    zerarIsPressed,
  } = Incrementador();
  return (
    <main className="flex flex-col h-screen items-center justify-evenly bg-black">
      <section className="flex flex-col h-screen items-center justify-end">
        <Display n1={numeroN1.n1} n2={numeroN2.n2} />
        <section className="flex gap-10">
          <ButtonStyle
            text="Manual Increment"
            isPressed={manualIsPressed.pressed}
            onClick={manualIncrement}
            style="text-white text-3xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-3xl h-20 w-100 px-5 py-2.5 text-center me-2 mb-2"
          />
          <ButtonStyle
            text="Automatic Increment"
            isPressed={autoIsPressed.pressed}
            onClick={automaticIncrement}
            style="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-3xl w-100 h-20 text-3xl px-5 py-2.5 text-center me-2 mb-2"
          />
        </section>
      </section>
      <section className="flex h-100 items-center justify-center">
        <ButtonStyle
          text="Stop Auto Increment"
          isPressed={stopAutoIsPressed.pressed}
          onClick={stopAutoIncrementador}
          style="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-3xl text-3xl w-100 h-20 px-5 py-2.5 text-center me-2 mb-2"
        />
      </section>

      <ButtonStyle
        text="Zerar Contadores"
        isPressed={zerarIsPressed.pressed}
        onClick={zerarContadores}
        style="text-white text-3xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-3xl text-3xl h-28 w-100 px-5 py-2.5 text-center me-2 mb-9"
      />
    </main>
  );
};

export default HomeView;
