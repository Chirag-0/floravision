import BracketTitle from "./BracketTitle";
import {  Star } from 'lucide-react';

function CustomerReview() {
  return (
    <section className="bg-[#1B2316] w-full h-[160vh] -mt-1 md:h-[125vh] lg:h-[35vw]">
      <div>
        <BracketTitle text="Customer Review" />
      </div>

      {/* Cards box */}
      <div className="flex flex-wrap gap-6 items-center justify-center">
        <div className="w-66 h-52 mt-10 rounded-4xl bg-white/5 backdrop-blur-[17px] border border-white/10 shadow-lg">
          <div className="flex flex-col p-2 mt-2 gap-4 items-center">
            <div className="flex gap-1.5 items-center">
              <img
                src="/cust1.png"
                alt="User"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col text-white">
                <p className="font-bold text-lg">Shelly Russel</p>
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
            <p className="text-sm w-56 text-white font-light p-3">
              Just got my hands on some absolutely awesome plants, and I couldn’t be happier!
            </p>
          </div>
        </div>
        <div className="w-66 h-52 mt-10 rounded-4xl bg-white/5 backdrop-blur-[17px] border border-white/10 shadow-lg">
          <div className="flex flex-col p-2 mt-2 gap-4 items-center">
            <div className="flex gap-1.5 items-center">
              <img
                src="/cust2.jpg"
                alt="User"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col text-white">
                <p className="font-bold text-lg">Lula Rolfson</p>
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
            <p className="text-[12px] w-56 text-white font-light p-3">
              Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.
            </p>
          </div>
        </div>
       <div className="w-66 h-52 mt-10 rounded-4xl bg-white/5 backdrop-blur-[17px] border border-white/10 shadow-lg">
          <div className="flex flex-col p-2 mt-2 gap-4 items-center">
            <div className="flex gap-1.5 items-center">
              <img
                src="/cust3.png"
                alt="User"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col text-white">
                <p className="font-bold text-lg">Carol Huels</p>
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
            <p className="text-sm w-56 text-white font-light p-3">
              It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CustomerReview;
