import klbtfrdchkn from "../../images/klbtfrdchkn.jpg";
import klbtssltmtcha from "../../images/klbtssltmtcha.jpg";
import klbtsprng from "../../images/klbtsprng.jpg";
import klbtchsyfrs from "../../images/klbtchsyfrs.jpg";

const forYou = [
  {
    Image: klbtfrdchkn,
    value:
      "Crispy on the outside, tender and flavorful on the inside – every bite is a journey of savory delight!✨",
  },
  {
    Image: klbtssltmtcha,
    value:
      "Matcha with a twist! 🍵💚 Our Sea Salt Matcha is topped with a smooth layer of sea salt cream for a unique blend of earthy and savory flavors.",
  },
  {
    Image: klbtchsyfrs,
    value:
      "Get ready to elevate your fry game with our Cheesy Fries – crispy, golden perfection topped with a generous drizzle of melty cheese sauce! 🤤 Trust us, one bite and you’ll be hooked!",
  },
  {
    Image: klbtsprng,
    value:
      "Meet the Maklen Spring, one of our signature mocktail! 🌟🍹 A fresh twist on the classic virgin mojito, infused with the mesmerizing hues of butterfly pea. Perfect for sipping and chilling as you unwind.",
  },
];

export default function Hero() {
  return (
    <div className="animate-text-reveal [animation-fill-mode:backwards] mx-auto max-w-7xl px-6 lg:px-8 bg-slate-100 dark:bg-gray-900 py-24 sm:py-3">
      <div className="mx-auto mt-28 max-w-2xl lg:mx-0 lg:max-w-none">
        <h1 className="font-display text-5xl text-center font-semibold tracking-tight text-teal-500 sm:text-5xl">
          Rekomendasi Untukmu
        </h1>
        <dl className="mt-10 grid grid-cols-1 gap-7 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {forYou.map((item) => (
            <div className="flex flex-col gap-1">
              <img
                className="rounded-md size-60 sm:size-auto"
                src={item.Image}
              ></img>
              <dd className="text-sm font-semibold tracking-tight text-gray-800">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
