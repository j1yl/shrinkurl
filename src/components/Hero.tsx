const largeText = "text-7xl";

const Hero = () => {
  return (
    <>
      <section className="h-1/2 flex flex-col justify-center gap-10">
        <div className={largeText}>FORGET LONG LINKS</div>
        <div className={largeText}>LET&apos;S MAKE URLS EASY</div>
        <form className="w-full flex justify-between p-8 text-2xl rounded-3xl border-white border">
          <input
            placeholder="HTTPS://URLHERE.COM"
            className="bg-transparent focus:outline-none placeholder-gray-400"
          />
          <button className="underline">SHRINK</button>
        </form>
      </section>
      <section className="h-1/2 flex flex-col justify-center gap-10">
        <div className={largeText}>SHRUNKEN LINK</div>
        <div className="w-full flex justify-between p-8 text-2xl rounded-3xl border-white border">
          <a href="/" className="text-gray-400">
            HTTPS://SHRUNKENURL.COM
          </a>
          <button className="underline">COPY</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
