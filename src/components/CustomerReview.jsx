import BracketTitle from "./BracketTitle";
import {  Star } from 'lucide-react';

function CustomerReview() {
  return (
    <section className="bg-[#1B2316] w-full h-auto -mt-1 md:h-[125vh] lg:h-[35vw]">
      <div className="inter font-semibold">
        <BracketTitle text="Customer Review" />
      </div>

      {/* Cards box */}
     
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="w-66 h-58 mt-10 rounded-4xl  bg-[url('/rectangle7.png')] bg-cover ">
            <div className="flex flex-col p-2 mt-2 gap-4 items-center">
              <div className="flex gap-1.5 items-center mt-4">
                <img
                  src="/cust1.png"
                  alt="User"
                  className="h-12 w-12 rounded-full"
                  loading="lazy" decoding="async"
                />
                <div className="flex flex-col text-white">
                  <p className="inter font-semibold text-lg">Shelly Russel</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        className="text-yellow-400 "
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm w-56 text-white  p-3 inter">
                Just got my hands on some absolutely awesome plants, and I couldn’t be happier!
              </p>
            </div>
          </div>

          <div className="w-66 h-58 mt-10 rounded-4xl bg-[url('/rectangle7.png')] bg-cover">
            <div className="flex flex-col p-2 mt-2 gap-4 items-center">
              <div className="flex gap-1.5 items-center mt-4">
                <img
                  src="/cust2.jpg"
                  alt="User"
                  className="h-12 w-12 rounded-full"
                  loading="lazy" decoding="async"
                />
                <div className="flex flex-col text-white">
                  <p className="inter font-semibold text-lg ">Lula Rolfson</p>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        className="text-yellow-400 "
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[12px] w-56 text-white p-3 inter">
                Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.
              </p>
            </div>
          </div>
        <div className="w-66 h-58 mt-10 rounded-4xl bg-[url('/rectangle7.png')] bg-cover">
            <div className="flex flex-col p-2 mt-2 gap-4 items-center">
              <div className="flex gap-1.5 items-center mt-4">
                <img
                  src="/cust3.png"
                  alt="User"
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex flex-col text-white">
                  <p className="inter font-semibold text-lg">Carol Huels</p>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        className="text-yellow-400 "
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm w-56 text-white inter p-3">
                It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!
              </p>
            </div>
          </div>
        </div>
      
    </section>
  );
}
export default CustomerReview;
