// import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from "next/link"
import Header from "./header"

export default function Intro() {
  return (
   <>
   <Header/>
    {/* Heading and Image */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center mb-6">
        <div className="flex w-[45%] flex-col gap-6">
          <h1 className="text-black font-normal text-7xl leading-[103px]  ">
            Stay Updated
          </h1>
          <h3 className="text-black font-normal text-xl leading-7">
            Discover stories, thinking and expertise
            <br />
            from writers on education.
          </h3>
          <div>
            <button className="border border-collapse px-9 py-3 bg-[#FCAD15]  text-black font-normal text-xl  ">
              Start Reading
            </button>
          </div>
        </div>

        <div className="flex p-0 ">
          <img src="Images/image 34.png"></img>
        </div>
      </div>

      <div className="w-full h-[1px] bg-black "></div>
      

    {/* Trending Blogs */}
    <section className="section max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto flex gap-2 mb-8">
          <div style={{marginTop:'18px'}}>
            <img src="Images/icon-park_trend.png"></img>
          </div>

          <div className="flex place-items-center">
            <h2 className="font-bold text-xl leading-5 text-black my-6">
              Trending Blogs
            </h2>
          </div>
        </div>
      </section>
   
   </>
  )
}
