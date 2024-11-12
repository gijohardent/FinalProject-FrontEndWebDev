import klbtfrdchkn from "../../images/klbtfrdchkn.jpg";
import klbtssltmtcha from "../../images/klbtssltmtcha.jpg";
import klbtsprng from "../../images/klbtsprng.jpg";
import klbtchsyfrs from "../../images/klbtchsyfrs.jpg";

const forYou = [
  { Image: klbtfrdchkn },
  { Image: klbtssltmtcha },
  { Image: klbtchsyfrs },
  { Image: klbtsprng },
];

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 py-24 sm:py-3">
      <div className="mx-auto mt-36 max-w-2xl lg:mx-0 lg:max-w-none">
        <h1 className="font-display text-5xl text-center font-semibold tracking-tight text-teal-500 sm:text-5xl">
          You Might Like
        </h1>
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {forYou.map((foryou) => (
            <div
              key={foryou.name}
              className="flex flex-col-reverse items-center gap-1"
            >
              <img
                className="rounded-md size-60 sm:size-auto"
                src={foryou.Image}
              ></img>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Hero;
