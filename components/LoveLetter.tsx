"use client";

import { motion } from "framer-motion";

import Card from "./Card";
import Button from "./Button";
import PageContainer from "./PageContainer";
import Typewriter from "./Typewriter";

type Props = {
  onNext: () => void;
};

const letter = `Dear Rizwana,

Maybe to you it was just one sentence.

But to me...

the moment I realised it hurt you,

it became the biggest mistake of my day.

The problem was never your pictures.

The problem was my words.

I wish I had chosen kindness
instead of carelessness.

You deserve appreciation.

Not doubt.

Not sadness.

Not tears.

If I could go back,

I'd change that one moment.

But since I can't...

I'll spend every next moment

trying to make you smile again.

I'm truly sorry.

— Faisal ❤️`;

export default function LoveLetter({ onNext }: Props) {
  return (
    <PageContainer>
      <Card>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold mb-8"
        >
          ❤️ A Letter
        </motion.h1>

        <Typewriter text={letter} speed={28} />

        <div className="mt-12">
          <Button text="Continue ❤️" onClick={onNext} />
        </div>
      </Card>
    </PageContainer>
  );
}
