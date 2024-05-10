import { assets } from "../assets";

const DownloadApp = () => {
  return (
    <section className="w-full h-[80vh] flex flex-col gap-[10vh] items-center justify-center">
      <h2 className="text-[8vw] sm:text-[6vw] md:text-6xl leading-[1.3] text-center">
        For The Better Experience <br className="hidden sm:block" />
        Download Tomato App
      </h2>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <div className="w-[150px] cursor-pointer">
          <img
            src={assets.app_store}
            alt="app_store"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[150px] cursor-pointer">
          <img
            src={assets.play_store}
            alt="play_store"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
