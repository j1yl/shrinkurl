const Input = () => {
  return (
    <>
      <form className="flex justify-between">
        <div className="flex flex-col">
          <label>
            Name:
            <input type="text" name="name" className="bg-slate-800 border" />
          </label>
          <label>
            URL:
            <input type="text" name="url" className="bg-slate-800 border" />
          </label>
        </div>
        <button>
          <input type="submit" value="submit" />
        </button>
      </form>

      {/* output */}
      <div className="border border-white w-full h-[60px] mt-32"></div>
    </>
  );
};

export default Input;
