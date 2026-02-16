import type { ReactNode } from "react";

type Props = {
  children?: React.ReactNode;
};

function Title({ children }: Props) {
  return (
    <div>
      <h1 className="text-6xl font-bold pb-24">{children}</h1>
    </div>
  );
}

export default Title;
