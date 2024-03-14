"use client";
import { useEffect, useState } from "react";
import diceIcon from "../../public/icon-dice.svg";
import dividerDesktop from "../../public/pattern-divider-desktop.svg";
import Image from "next/image";

export default function Home() {
  const url: string = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [id, setID] = useState("");

  const apiRes = async () => {
    let res = await fetch(url);
    let data = await res.json();

    setID(data.slip.id);
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    apiRes();
  });
  const resAdvice: string = `"${advice}"`;
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-darkb text-white w-screen h-screen font-sans text-lg">
        <section
          className="flex flex-col justify-center rounded-md bg-grayish m-10 p-5
        lg:p-10
        "
        >
          <p className="flex justify-center items-center text-neon w-full">
            ADVICE #{id}
          </p>
          <p className=" flex justify-center items-center lg:w-96 w-56 font-bold text-xl p-4">
            {resAdvice}
          </p>
          <Image
            className="flex justify-center items-center lg:p-8 p-5 lg:w-96 w-80"
            src={dividerDesktop}
            alt="Pattern divider"
          />
        </section>
        <div className="flex justify-center items-center -translate-y-8">
          <button className="rounded-full p-5 bg-neon" onClick={apiRes}>
            <Image src={diceIcon} alt="New Advice" />
          </button>
        </div>
      </main>
    </>
  );
}
