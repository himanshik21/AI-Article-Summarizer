// Header Component
import logo from '../../public/technology.png';
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex gap-1 items-center w-full mb-11 pt-5 px-4">
        <img
          src={logo}
          width={65}
          alt="logo"
          className="object-contain"
        />
        <p className="green_gradient text-xl font-extrabold font-inter">SummarAize</p>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="green_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
