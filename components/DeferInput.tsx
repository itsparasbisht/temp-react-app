import { useDeferredValue, useEffect, useMemo, useState } from "react";

function DeferInput() {
  const [name, setName] = useState("");
  const deferredValue = useDeferredValue(name);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < 10000; i++) {
      l.push(deferredValue);
    }
    return l;
  }, [deferredValue]);

  useEffect(() => {}, [deferredValue]);

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

export default DeferInput;
