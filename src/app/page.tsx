import Image from "next/image";
import js from "@/assets/js.png";
import ts from "@/assets/ts.png";
import react from "@/assets/react.png";
import next from "@/assets/next.png";
import tanstack from "@/assets/tanstack.png";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="h-screen flex items-center relative overflow-hidden px-16">
        <div id="introduce" className="flex-1 flex flex-col items-center font-bold">
          <div className="flex flex-col gap-3">
            <span className="text-3xl">임광수</span>
            <span className="text-accent text-5xl">포트폴리오</span>
            <span className="text-4xl">Frontend Engineer</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="max-w-stack w-full">
            <div className="flex justify-between">
              <Image id="javascript" src={js} alt="javascript 도형" width={115} height={160} />
              <Image id="typescript" src={ts} alt="typescript 도형" width={115} height={160} />
            </div>
            <Image
              id="react"
              src={react}
              alt="react 도형"
              width={115}
              height={160}
              className="mx-auto"
            />
            <div className="flex justify-between">
              <Image id="next" src={next} alt="next 도형" width={115} height={160} />
              <Image id="tanstack" src={tanstack} alt="tanstack 도형" width={115} height={160} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
