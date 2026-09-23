"use client";

import Card from "./Card";
import Button from "./Button";
import PageContainer from "./PageContainer";

type Props = {
  onNext: () => void;
};

export default function GitCommit({ onNext }: Props) {
  return (
    <PageContainer>
      <Card>
        <p className="text-green-400 font-mono">commit 84dca21</p>

        <p className="text-zinc-500 mt-2">Author</p>

        <p className="text-white">Faisal ❤️</p>

        <div className="mt-8 border-l-2 border-green-500 pl-5">
          <p className="font-semibold text-white">fix(relationship)</p>

          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>✅ Removed careless words</li>

            <li>✅ Accepted mistake</li>

            <li>✅ Added genuine apology</li>

            <li>✅ Increased appreciation</li>

            <li>✅ Promise to think before speaking</li>
          </ul>
        </div>

        <div className="mt-10">
          <Button text="Merge Into Main ❤️" onClick={onNext} />
        </div>
      </Card>
    </PageContainer>
  );
}
