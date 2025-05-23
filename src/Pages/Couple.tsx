import Header from "../Components/Header";

const Couple = () => {

  return (
    <>
      <Header
        mainTitle="INFFOCUS: THE COUPLE"
        subtitle="THEY ARE NOT JUST THE HEADLINE — THEY ARE THE WHOLE STORY"
      />
      <div className="w-full  flex justify-center my-3">
        <img
        data-aos-once="true" data-aos="fade-up-zoon"
          src="/assets/prewed4.jpg"
          alt="Gugun and Mila"
          className="w-full h-[250px] max-w-xs object-cover mb-3 border border-black"
        />
      </div>
      <div className="text-center p-5 font-serif">
        <h2 className="text-2xl font-bold text-red-700 border-y py-3 border-black" data-aos-once="true" data-aos="fade-up">
          <span data-aos-once="true" data-aos="fade-left-zoom">GUGUN</span> <span className="charm-reguler text-black" data-aos-once="true" data-aos="fade-up-zoom">And</span> <span data-aos-once="true" data-aos="fade-right-zoom">MILA</span>
        </h2>
      </div>

      <div className=" text-sm p-5 font-serif text-justify leading-relaxed ">
        <p className="" data-aos-once="true" data-aos="fade-up">
          Their story began with a simple meeting and blossomed into something
          extraordinary — a bond built on love, trust, and shared dreams. They
          are not just the headline — they are the whole story. Today, Gugun and
          Mila step into the spotlight as partners in a lifetime journey that
          tells the best chapters ever written, where love speaks, joy sparkles,
          and together stays home.
        </p>
      </div>

      <div className="w-[90%] mx-auto pb-24" data-aos-once="true" data-aos="fade-up">
        <div className="text-[11px] text-center border-y border-black py-3 font-serif">
          Published by The Eternal Love of Gugun & Mila
        </div>
      </div>
    </>
  );
};

export default Couple;
