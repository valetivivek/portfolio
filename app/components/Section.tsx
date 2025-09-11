import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({ title, description, children }: Props) {
  return (
    <section className="py-12 md:py-16">
      <header className="max-w-3xl">
        <h2>{title}</h2>
        {description ? <p className="mt-2 text-slate-700">{description}</p> : null}
      </header>
      <div className="mt-6">{children}</div>
    </section>
  );
}


