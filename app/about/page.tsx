"use client";

import { useDeferredValue, useEffect, useState, useTransition } from "react";

function About() {
  const [name, setName] = useState("");
  const [list, setList] = useState<string[]>([]);
  const deferredValue = useDeferredValue(name);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  useEffect(() => {
    const l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(deferredValue);
    }
    setList(l);
  }, [deferredValue]);

  useEffect(() => {
    console.log(`name: ${name}\ndeferred name: ${deferredValue}`);
  }, [name, deferredValue]);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default About;
