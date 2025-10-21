import { useEffect, useRef, useState } from "react";

export default function TypingLoop() {
  const fullText = "Hi, I'm Lama Naser";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const i = useRef(0);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    const type = () => {
      if (!isDeleting) {
        setText(fullText.slice(0, i.current + 1));
        i.current++;
        if (i.current === fullText.length) {
          setIsDeleting(true);
          timeout.current = window.setTimeout(type, 1000); // pause before deleting
          return;
        }
      } else {
        setText(fullText.slice(0, i.current - 1));
        i.current--;
        if (i.current === 0) {
          setIsDeleting(false);
          timeout.current = window.setTimeout(type, 500); // pause before typing again
          return;
        }
      }
      timeout.current = window.setTimeout(type, isDeleting ? 100 : 150); // typing speed
    };

    timeout.current = window.setTimeout(type, 300);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [isDeleting, fullText]);

  return (
    <h1 className="name">
      <span>{text}</span>
      <span className="cursor">|</span>
    </h1>
  );
}