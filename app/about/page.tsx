"use client";

import { useState, useTransition } from "react";

function About() {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState("");
  const [list, setList] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < 5000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {isPending
        ? "loading"
        : list.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
}

export default About;
