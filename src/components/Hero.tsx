import { useState } from "react";

const largeText = "text-7xl";

const Hero = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async (url: string) => {
    await fetch("https://gotiny.cc/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: url }),
    })
      .then((response) => response.json())
      .then((data) => {
        setShortUrl("https://gotiny.cc/" + data[0].code);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    shortenUrl(inputUrl);
  };

  return (
    <>
      <section className="h-1/2 flex flex-col justify-center gap-10">
        <div className={largeText}>FORGET LONG LINKS</div>
        <div className={largeText}>LET&apos;S MAKE URLS EASY</div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-between p-8 text-2xl rounded-3xl border-white border"
        >
          <input
            placeholder="ENTER YOUR URL HERE"
            className="bg-transparent focus:outline-none placeholder-gray-400 uppercase"
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button type="submit" className="underline">
            SHRINK
          </button>
        </form>
      </section>
      <section className="h-1/2 flex flex-col justify-center gap-10">
        <div className={largeText}>SHRUNKEN LINK</div>
        <div className="w-full flex justify-between p-8 text-2xl rounded-3xl border-white border">
          <p className="text-gray-400">
            {shortUrl ? shortUrl.toUpperCase() : "WAITING INPUT"}
          </p>
          <button
            onClick={() =>
              navigator.clipboard.writeText(shortUrl ? shortUrl : "ERROR")
            }
            className="underline"
          >
            COPY
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
