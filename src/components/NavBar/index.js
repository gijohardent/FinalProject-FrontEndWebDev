import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "You Might Like", href: "#", current: false },
  { name: "Our Menu", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "../Footer", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 rounded-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <DisclosureButton href="#">
              <img
                alt="Your Company"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUBAv/EAEwQAAEDAwICBgUHBwYPAAAAAAEAAgMEBREGEiExBxNBUWFxFCJSgZEVIzJCscHRFjU2c6Gy4SQzVFV00hdERWJkcoKSk5Sio7PC8P/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAvEQEAAgICAQEHAwQCAwAAAAAAAQIDEQQSITEFEyIyM0FRFHGBFVKhsZHxNEJh/9oADAMBAAIRAxEAPwC8UBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQMoPAQeRQeoCAgICAgICAgICAgICAgICAgICAgICAeCCOa0vwtFAI4Hj0yfLYx7I7XH/7n5KvJbULcWPtZo6BvZrKR1uqXl08HFhJ4vZ+IXMVtxpLNTrO49EwCtUPUBAQEBAQEBAQEBAQEBAQEBAQEBAQCcINS5V0NvoZauodiONufPwXJnUbdiO06hUtRNV6ivYcQTLUPDGN9hvd7gss7vZviIxUbFwpqrS2oY3ROJMZa+N/tt7QfPiEmJx2RrMZarTttdDcKGKrgdmOQZ8u8LVE7himNTqW0uuCAgICAgICAgICAgICAgICAgICAg8ccBBV2t778p1wpaZ2aSBx5H+cf3+Q5BZsl9+jbgx6jbr9HFnw2S7TN+l6kAI5D6zvfy9ylir91efJv4YdbXNn+UrSZoW5qabL2Y5lv1gp5K7hXhv1tpGuj69+jVfydO75moOYs/Vf3e/7VXivqdSu5GPfxQsocloZBAQEBAQEBAQEBAQEBAQEBAQEBAPJBEdd3/0Cl9ApnYqZ2+sQeLGfx5KrJfXhfhx9vMoBaqCS5XGGjjHGR3rO9kdp+CorXctV7da7XNR08dLTR08AxHG0NaO4Ba4jXh58zudsrhnmuuKn1haTZ7w50AcyCY9ZCW8Np7QPesuSvWfDdht3rqVgaWvIvFqjlcR6RH6kw/zh2+R5q+lu0MmSnS2naU0BAQEBAQEBAQEBAQEBAQEBAQEHOvd1htNukqpiOHBjfad2BRtbUJUrN51Cnq2qmrauWqqX7pZXZc77h4LJPmXoxHWIhP8Ao6s/UUb7lO3ElQNsXhGO33nPuwtGKuvLHnvudQmX0Vaocu736gtL4WVku10rgAAMlo9o9w8VGbRHhKtLW9Gvqm1NvdmeyPa6dg6yBwPM92fELl67hLHfrZXulLwbNdGyPyKeX1Jm+yO/3KiltS15aReu4W414c0OaQQRkELUwPtAQEBAQEBAQEBAQEBAQEBAQfD3hjXOe4Na0ZJPYEPVU2rL6681+YXfySI4hz9bvcsuS3aW7Dj6xuWpYLY67XSGkbnYTukPc0c1yle0pZLdarjiY2KNscbQGMADQO4LU8/bhao1LBZY+qZiWse31I/Z8XeChe/VbjxTef8A4jFn0zWX7rbld5pIzM0mLI9YnsJHs9w7VXWk28yttmjH8NXQ0zc6my1osF6O3jimlcfVPcM9x7PgpUtNZ62RyUi8dquNry0egXT0yJmKeqO7lyf2j38/ioZK6nazBfddJB0f3r0qiNtnfmanHzZPNzP4fgrMdtxpVnp1ntCYq1QICAgICAgICAgICAg8QeoCAgi+tBdqqkFBa6SSRko+eka5o4ezxKryb1qFuLrE7shA0pfR/k2T/fZ+Koilvw1e+om+h7E+00Lpatm2qnPrNJBLGjkPvV+KnWGbNk7z49GXV1/dZKRrYYnOqJ8iNxHqtx2k9/gl7dYcx4+86cLSGn/lJ/yzdJBPveXMYTnJHDLvwUKU35lZlya+CE+aOHJXszm3+zU15ozBONr+bJQOLCo2rFkqXmk+HF9Crq+w1VtvsYZJTt+aq3OG1+OTj2g9+VDUzXUrItFbxNfur62Vk1uroaqnyZI3DgPreHvVFZms+Gu9YmupXTTSmanjl2uZvaDtcOI8Frh5zMuggICAgICAeSCL9ItTUUumny0tRNBJ10Y3xSFjsbu8K7BETfyx821q4d1lzOi6trKyK4msq6ioLHs29dK5+3geWTwUs9YiY0p9nXvetu07TtZ3pPCjiote3a502pa+KmuVbDG0M2siqXtaPUHIA4W3DSJpG4eJzMuSuaYraf8AlbNKSaaIkkksGSfJY59XtU81hlXEhB5gIK06SrjX0l6p46SuqoGGDJbDO5gJz3ArVx6xNfMPI5+S1bxFZmPCaaSlkn03bZZ5HyyPp2lz3uLi495J5rPf5pehxrTOKsz+G3drdTXShkpKtm5j+R7WnsI8VCaxMaaa2ms7hBLJUz6Svj7dXk+hzng/6ueQePsP8FRWZpbTReIy17R6rGYQRkcuzC0Mr5mkZEx0kjgxjRlznHAATcQK11FfqnUVULdamyGnLsbW85vE+Cz2vNp1DXjxxSO1kk0zpOC1htTWhs9bzB5tj8vHxU6Y4r5lVkzTbxHolOPBWqXp5IOVcNQ2q2T9RX1scMu3dtdnOO9SjHa3opyZ8eOdXlv0tRFVQxzwP3xSNDmuHaCo6WxMTG4ZkdEBAQeHkgiXSf8Aoq/9fF+8ruP87F7Q+hLl9En81c/1kf2FWcn1hR7M9LJNqbUdJp6GJ9SySV8rsNjjxk+PEjgqcdJvOobc/IrhjcvdO35l/gkqIKSoghYdodLt9Y9uMErl6TTxLmDP76s2iNKw6RP0puXkz9wLZg+SHj8/68rTuN1js1lFdNG+Rkcbctjxu447yFjiO1tQ9m+WMWLvMeiN/wCEy3f1dXf9v+8rv01vyyf1Kn9svuLpJtT37ZKSujHtFrSP2OJXJ49nY9pY/vEwlNrulHdaYVFBO2WPkccCD4jsVNqzWdS248lckbrKuelP8/UuP6P961cb5Xk+0vqV/ZuWLXtDa7NR0MtDVvfBC1hczZtJ8MuUbce0zuFmHn0x44rMS6lN0j2iaQMmgq6ce09gcP8ApJKhPHvC6vtDFM6mJh1rrQ0GqbUOomjePpQzs47Xfh3hZ8mPfiXo4c0fNWfDQ0td30ontF5eIqmiaS18hwHxjtz4fYoVtrxK3JXfxV+7lXOvr9X1horUHR0EbsvkcMB3ifuChMzedR6LK1rjjtb1Y6TUVj0rPPb4rfWS1ELtktQAz1yO7LuA8Fsx8WdRMPJz+0o7zWYnw3R0mW3+r6/4R/3lZ+msp/qVP7Zday6ytF4mbBDK+GoPKKdu0nyPI/FVWxWr6tGLmYsviJde73CO122orpmOfHAwvLWcyPBQpXtOl2S8Y6TaVPatvEV+unpdPFLE3qwwNkxnI8it+KnSPLweTmjPbtWEotPSDQUVrpaWWhrHPhiawuZswSB2Zcqbce0z4bcftGlKRE1lNrFc47xbIa+GN8cc2cNfjIwSOzyWe1es6ejivGSkW06CisEBB4eSCJdJ/wCir/18f7yu4/zsXP8AoS4PRrXUtvt92qKyZsUTXMJLjz4Hl3q3kRNpiIZfZ960rebOFUPrtZamHVNI3uwzPKGMdp93Hz4KyNYqM9u/LzePRbtuooLdQxUlK3bFE3a0Hn7/ABWG0zM7e5SkUr1qqLpE/Sm5eTP/ABhbsHyQ8Ln/APkT/C2J6GmuVrZS1sfWQvjbubnGeAWLfW24e3NK5MfW3o5TtHaab9KjiHnIfxU/e5Pypnh8f71c6+aOsXyZUSUTW088cZcxzJc8QM4IzxClXNfflTl4eCaz1jz+6OdF9VJHqF1OwkRTwOc4Z7RjB/aQruRWOu2T2feYy9Y+8MvSl+fqb+z/AHrnG+VL2l9Sv7S72mdJ2Wt0/b6mpog+aWBrnu3Hifiqr5bxeYiWrBxcN8VbWjzMPb5oC2SUUj7Yx9NUsBc31iWux2EFKZ7RPkzcDHNZ6eJRjo5uk1Df20TnO6iry1zM8GvHI+fDHv8ABXcikWr2ZOBlmmTp9pWDf9OUt86p8rnRSxkfORji5va0rz7Uiz38eSaOjQ0NNb6ZtPSRNijbyaBzUoiI9EJtMzuXLrNJ2GqqJKmqo2OllcXPcXkZPxVsZbxGollvxcNp7Wjy1To/TP8ARYh5TH8V33uRD9LxvxCudWW6KyXx8NBKTGGtmiOclvhntwQtWOe9fLyeTSuLL8C3IoortY4mVjOsjqYW9Y09uQsXy28PdiIvj1b7qr13bKW1Xo09BEIo+pDg3JPHj4rZgmbV8vF5uOuK+qwmti0hY6qzUU89CHSSwNc87zxJHms98t4tOpeji4mG1ImYSm3UUFupWUtJHshjztb3ZOfvVUzNp3LZSkUjUNlcSEBB4eSCJ9J3DSz/ANdH+8rsHzsXP+hP8f7V3Y9N1l9gqpqF0W6nIGx/AuyDyPuWq+SKTG3lYePfNEzR2tF6jjslX8n3CmjiifJsfMGYfG7OPX7xn4KvNj7R2iWjiciMdul4/lag5c1jez9lMdIn6U3L/VZ+4FvwfJDwOf8AXt/CZ69vdTarNRQUbzHLUjBkbza0NGcePELPhpFrTtv5ma2PFWK/dGdPaOqdR0XyhU12xj3FrN7TI44OCck96uvmik9Yhj4/DnPXvazfrOjZlNSTTm4Bxjjc7HUgZwM45qMcmd+i6fZsVj5nN6MznVMR/wBHk/8AVT5HyKOB5zfw3OlIH5cpTjgac4+KjxvlW+0vqR+yb6KkY/S1s2uBxAGHzHAhZsni8vR4v0a/s69RKyKB8ryAxjS5x7MAKMeq+0xETMqZ0o01Gr6F0XI1RkGPZGT9i3Zfpvn+N55Ea/Mrar77a7bKIa+vggkIyGvdg471iilp9Ie5fPjxzq1tPqC7UNXRzVlHUx1EMTXFzoznGBlJrMTqXYy0tWbVnapIJLprG8sglqizrcvDXE7I2DsDe1bfGKu9PDicnJydd+qRjouZjjcm/wDAH4qn9TP4a/6ZH93+ES1PZRYbkaATdaepD9+3bzzwx7lfjv3jemDk4fdX6b2uWx/mWh/UM+xYbfNL6DF9OFadJ36Sj+ztWvjfK8j2j9WP2WNpggaet3H/ABZn2LJf5petg+lX9nVUVogICAeSCJ9JbHyaXkbG1znddHwaMn6QV2CdXYudEzhmIcrooikZDct8b2ZfGRvaR2HvU+TO5jSn2bWYi24YOknTjhILvRRF28htQxgySew4/Yu4Mn/rKPP43n3lYdbo9vU1bQegVrZRUUwwx72kb2dnE9oVeakRO4XcLNa9Ot48whfSDBNJqe4ujgleC1mC1hIPqBaMMx0efzomc0+E31rYJ73ZqV1GAamnGWsPDe0jiPPgPgs+O8Ut5ehysE5cVZj1hBrdddSadY6mghnijLs9XNTOc0HtwtFqY7+ZedTNnwxqI/w2KjV+pqmnkgkjwyRpa4tpHZwe5Pc44lK3M5FtxP8AqW70aWusF6NbJTSxU8cDmbpGFuSSOWefJR5Fo66Wez8Vve9pjxpKNeabkvtHFJSBvpVOSWgnG4HmFRhv0nTbzOPOau49YQGgr9R6cL4IIaqFpOTFJAXMz4dnwK1TXHfzt5lMnIwfDH+mStu+qNQRupJIql8b+DooacsafAnu8zhcimOk7Svl5Ob4df4S/Quk5LQ99wuO01b2bGRg56oHnx7zwVGbL38Q3cPie6+K3qjXSPTVB1M+RsEzmuhZhzGE5x5K7jzHX1ZOfS05txHjTvdGFK8Wi4sqYHsZLLjDmkFw24Kq5E/F4afZ9JjHaLfdFKux3zTFx62mjncIieqqYYy8FviB+3Kvi9L11MsVsGXj33VuflrqcfVZ/wAo5R9zjS/W8iP+nHuDrxqCv66WmmkqZGhgDIHNGB9nNTr0xx6qLzmz33Mef2XTbYXU1vpoHDDo4mtPnhYJ8zMvoaRqsQhXSTYKutlguNDC6YsZ1csbG5OM8DjtV+DJFfEvO5/HtfV6o9bNU6htVIyjhpy6OPIY2WmeXAdytnDjt52y4+Vnxx1iPCzNMV1RcrHS1lY0NnlaS8BpbjiRyWS0RE6h7OG83pE2dVRWiAgINO6V0Fto3VNQCYwQOAyck4H2rkzp2K7nTQk1DSxBp6idx6rrZAxgPVszjcceR+Cj3SjHLIL1BUTGKmjmkaODpmsyxpLcjPuXezk0nXlq02oYWUtA6qBc+pYz5xjA1uXHA4ZyOK5FtR5d9358M9Ldx8m1tbWMAZTVE0Z2N5tY8tHvXYt425NZidQ+fyhg20+ymqJHz7+rYxocSG4yeBx2p2h2KT+R+o6Fvo7i2Tq5wC2TaMDJxgjnzTvB0sym/Ug695jmFPDu3VHV+plvMZ/Yudoc6SyWy70tx60U5LXRYL2uxwB5Fdi2y1Zr4ZZ7pRR2+Su69j6eMZL4zu93DtXZnUbciJmdQ0XaipIxKKmGeF8YYSyRuCd30QPgo9oS93PrDHDqOGoqqSGlglkE7nse5uPm3N5g9/MHyK72Onje33+UtEJJo3NlY6JocRgH1NwaXcD2EhOx0mWVl/opZnRRlz3tqOow0c3bS4keGAePgkWhyaTrcsdPqSildt2yMd1jGOBA9XfwaSQeRPBc7wdJ03YLlSz00lVuDII5HMMkmADtOCQe7KlE/dya68PK2509JFA/a6Y1Dg2FsQ3F+Rnh7uKTbRET6NKTUdIyj9J6mfqxI+N2QAWlvPIJXO8Je7nen3NqOjidMC2YshjbI+RrPVAcAWjzOcYTvB0lrDUbI56oVcD4mRvjjjje3D3OcCcHjjs5rnd3pqI0ynU1E5jHQxTzOcx7y2NgJbsOHZ8k7ue7dejniqqaKog4xSsD2HlkEZClE7Q9PDOuggICDXraVtZTmF75GA49aN21w965MbdidTtzfyYt4jaxhnYAwscWTOBkaTkh3eMkrnWEu8s0dipIqnroXTRZIJijlLWEgbclvbwTq52mfVrjS9vDYWtM4bE2NoAk4EMOW5TpDvezdjtUEdNPTxulayeV8ry15Dtzjk4PZxTrGtI9p3tzH6YhbU07oKieKOMyvkc2QiR73gcc/wCzyXOifvJ+7O7S1tdt2iZjQxjS1shw7Yctz45JXekOd5ZfyeoS6bJmMMwfvg613V+t9IhveU6w52lsW62RW+NzIpJpA7HGV+4jHYkV0TaZ9X1X0LKm3z0jWRBsjC3a9mW+8Aj7V2Y8ORMxO3HoNMt/lJuDw8zBgAie/LNvI7nEnOVCKeu05yfhv/IVLtph1tRvp3OcyTrTuO7mCe0eCl1hHtLHDpq3wukcOtdvhdBh7yQGOIJA+C50h2by9i03bonxPbG7McBgblx4tPMnx4nj4rvWD3lmpVaZYyinp7fIA+ojbE99QS/axv0S0DHEHiPJcmsO+8ncTLtUtFDTUUVJG0GGNgaA7jkDvUo9EJmZnbUvVtdXUsccPVNfE8PYX7xtx3FpBC5Ndu1nUtCk0rTiijiq5pHytMpc+J5aMSHLhxz3Djz4KMUhKckzO2/8g0JgqIXNe5lQxjJAXnk0YbjuKl1hHvZh/JqhLZBJJUyPkc13WPmJeHNGAQfInwTrDvvLNiOy0zHMcHSue2F8O5z8ktccnPikViHO8tuipY6KkgpYc9VDGI2bjk4AwOKlHhGZ3O5Z0BAQEBAQEBAQeYQeoCAgIPAMIPUBAQEBB5hAwg9QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBB//9k="
                className="h-8 w-auto rounded-lg"
              />
            </DisclosureButton>
            <div className="hidden sm:mr-auto sm:block ml-auto">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "font-body bg-teal-600 text-amber-300 shadow-md"
                        : "font-body text-teal-600 hover:bg-yellow-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base text-center font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
