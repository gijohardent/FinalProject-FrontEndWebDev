import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";
import youtube from "../../images/youtube.png";

const socialMedia = [
  { Image: whatsapp, href: "http://wa.me/628114333323" },
  { Image: instagram, href: "https://www.instagram.com/klab.atspace/" },
  { Image: youtube, href: "https://www.youtube.com/@Klab.atSpace" },
];

export default function Footer() {
  return (
    <div className="mx-auto mt-36   bg-gray-800 py-24 sm:py-3">
      <div className="mx-auto mt-20 mb-20 max-w-2xl lg:mx-0 lg:max-w-none">
        <dl className="mt-16 grid grid-cols-3 sm:mt-20">
          {socialMedia.map((item) => (
            <a href={item.href} className="flex flex-col-reverse items-center">
              <img className="rounded-md size-10" src={item.Image}></img>
            </a>
          ))}
        </dl>
      </div>
    </div>
  );
}
