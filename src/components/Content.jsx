export default function Content() {
  
  return (
    <>
      <div className="mb-auto">
        <section className="w-full bg-cover px-5 bg-no-repeat" style={{ backgroundImage:`url("https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5f3d8d300f85afb219528a35_5f0d377cf77497567371549b_Banner%20(1).png")`}}>
          <div className="text-center pt-32">
            <h1 className="font-semibold mb-5 text-2xl lg:text-6xl text-white">The Creative Industry's<br/>Premium Directory</h1>
            <p className="text-white lg:mt-6" >Where innovative companies connect with vetted marketing,<br/> creative and media providers for all their marketing needs.</p>

            <div className="flex flex-col lg:flex-none items-center mt-12 text-center text-white text-sm font-semibold font-barlow pb-16">
              <div className="text-center items-center flex flex-col lg:flex-row">
              <a href="/#" className="px-7 lg:px-7 py-3 mb-5 lg:mb-0 mx-1.5 bg-orange-f1">Post a Job for Free</a>
              <a href="/#" className="px-9 lg:px-7 py-3 mb-5 lg:mb-0 mx-1.5 bg-transparent border">Schedule a Call</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col lg:flex-row items-center mt-10 lg:my-4 px-4 lg:mx-16">
            <div className="flex text-xs text-right text-white mb-2 lg:mb-0 lg:mr-10 lg:w-72">Trusted by 1,500+ brands and agencies</div>
            <div className="flex flex-row items-center justify-between w-full text-white text-xs">
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53e032216e394c5aea6c_Group%20527.png" loading="lazy" alt="Gojek" className="w-20 lg:w-32"/>
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53e032216ec65d5aea6d_Group%20526.png" loading="lazy" alt="P&G" className="w-20 lg:w-32"/>
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53de6b6bfe807db8267e_Group%20521.png" loading="lazy" alt="Coca-Cola" className="w-20 lg:w-32"/>
             </div>
            <div className="flex flex-row items-center justify-between w-full text-white text-xs mb-5 lg:mb-0">
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53df457b6ba005912535_Group%20522.png" loading="lazy" alt="Samsung" className="w-20 lg:w-32"/>
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f53df01eb782e7b3addc1_Group%20523.png" loading="lazy" alt="Tokopedia" className="w-20 lg:w-32"/>
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f546585f3c11be5e3c2fc_Group%20525.png" loading="lazy" alt="WPP" className="w-20 lg:w-32"/>
            </div>
          </div>
        </section>

        <section className="bg-white block">
          <div className="flex flex-col items-center py-10 lg:py-16">
            <div className="text-2xl lg:text-4xl text-gray-700 font-medium mb-7 lg:mb-16">Why GetCraft?</div>
            <div className="flex flex-col lg:flex-row items-center justify-between text-center mx-7 lg:mx-auto">
              <div className="flex flex-row lg:flex-col content-center items-center text-left lg:text-center mr-0 lg:mr-5 mb-5 lg:mb-0">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f7ebd5473342759fab89b_Group%20533.png" loading="lazy" alt="" className="w-16 mb-6 mr-5 lg:mr-0"/>
                <div className="w-64">
                  <div className="text-base lg:text-2xl font-semibold text-gray-600 mb-2">Vetted Creators</div>
                  <p className="text-sm text-gray-600 font-rubik">We conduct a four stage vetting process for all new creators. Only 30% have made it onto the Directory.</p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col content-center items-center text-left lg:text-center mr-0 lg:mr-5 mb-5 lg:mb-0">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f7ebde07d0e32b80b8337_Group%20534.png" loading="lazy" alt="" className="w-16 mb-6 mr-5 lg:mr-0"/>
                <div className="w-64">
                  <div className="text-base lg:text-2xl font-semibold text-gray-600 mb-2">Craft at Scale</div>
                  <p className="text-sm text-gray-600 font-rubik">We’re built for the premium creative industry. We help you scale your marketing while keeping the craft.</p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col content-center items-center text-left lg:text-center mr-0 lg:mr-5 mb-5 lg:mb-0">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f7ebdb4ac3caac8cd53c6_Group%20535.png" loading="lazy" alt="" className="w-16 mb-6 mr-5 lg:mr-0"/>
                <div className="w-64">
                  <div className="text-base lg:text-2xl font-semibold text-gray-600 mb-2">Secure Payments</div>
                  <p className="text-sm text-gray-600 font-rubik">You can pay via bank transfer or credit card, plus use our escrow solutions to help protect everyone.</p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col content-center items-center text-left lg:text-center mr-0 lg:mr-5 mb-5 lg:mb-0">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f7ebd5fedd1c706973aee_Group%20536.png" loading="lazy" alt="" className="w-16 mb-6 mr-5 lg:mr-0"/>
                <div className="w-64">
                  <div className="text-base lg:text-2xl font-semibold text-gray-600 mb-2">Production Support</div>
                  <p className="text-sm text-gray-600 font-rubik">Our project managers can help you find the perfect creators to work with and oversee the project if needed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="text-white py-5">
          <div className="text-center text-3xl lg:text-5xl text-white font-medium pt-5 lg:pt-20 mb-4">What's inside?</div>
          <div className="text-center lg:text-2xl text-white font-medium ">10,000+ Vetted Creative Professionals &amp; Businesses</div>
          <div className="flex flex-wrap my-4 lg:my-12 mb-16 px-4 lg:px-72">
            <div className="w-full lg:w-1/2 px-2 mb-4 text-center lg:text-left flex flex-col">
              <h1 className="text-xl lg:text-4xl mb-1.5 font-semibold">The Best Marketing  Specialists</h1>
              <div className="text-sm lg:text-base mb-4">Work with award-winning creative /<br/>strategic / media / research <br/>professionals and agencies</div>
              <div className="text-orange-f1"><a href="/#">Show more &gt;</a></div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23c5fb75bbca3060fba3_Group%20493.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Digital Marketing <br/>Specialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d63c5b0a32046a1bce_Tech-specialists.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Technology<br/>Specialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23c9d6d1356df5d5a81f_Group%20499.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Research<br/>Specialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23c90af6bc0337272efc_Group%20498.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Branding <br/>Specialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23c78a8cde08c8cd4657_Group%20497.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Social Media <br/>Specialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f46fbf4915e6d13c630ab_Group%20528.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-6 lg:mb-16 text-center text-sm lg:font-semibold font-rubik hover:underline">Media &amp;<br/>Performance <br/>Specialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23c9acbcdf9885011a88_Group%20500.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-6 lg:mb-16 text-center text-sm lg:font-semibold font-rubik hover:underline">Creative<br/>Ideation<br/>Specialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23c934e540a453e6682b_Group%20501.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-6 lg:mb-16 text-center text-sm lg:font-semibold font-rubik hover:underline">Content <br/>Strategy <br/>Speclialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23c6b5a1015a90afc0f4_Group%20495.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">UX &amp; UI <br/>Specialists &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/6034bf596a10677bda99a53d_Group%20493.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">PR &amp; Event <br/>Specialists &gt;</div>
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap mb-16 px-5 lg:px-72">
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d58e8e04e004ec8292_Rectangle%20131.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Videographers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d1e71ed996c940c42e_Group%20510.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Writers &amp;<br/>Editors &gt;</div>
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-2 mb-4 text-center lg:text-right flex flex-col">
              <h1 className="text-2xl lg:text-4xl mb-1.5 font-semibold">The Best ContentProducers</h1>
              <div className="mb-4 text-sm lg:text-base">Work with award-winning video /<br/>photography / writing / design<br/>professionals and studios</div>
              <div className="text-orange-f1"><a href="/#">Show more &gt;</a></div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cdc90e757bdd27a1e2_Group%20509.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Photographers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cc68c26dff9fdd7724_Group%20506.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Designers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cbb6bbdd8d9d3feac4_Group%20505.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Production<br/>Houses &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cb75f67c9866f8349b_Group%20502.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Design<br/>Studios &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cb75f67c9866f8349b_Group%20502.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Producers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cd6dc7b0b058fa143a_Group%20507.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Translators &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cbe683eb5fe9f0595b_Group%20504.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-16 text-center text-sm lg:font-semibold font-rubik hover:underline">Copywriters &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cbf95b65b658b6be99_Group%20503.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-16 text-center text-sm lg:font-semibold font-rubik hover:underline">Illustrators &gt;</div>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap mb-16 px-5 lg:px-72">
            <div className="w-full lg:w-1/2 px-2 mb-4 text-center lg:text-left flex flex-col">
              <h1 className="text-xl lg:text-4xl mb-1.5 font-semibold">The Best Media Partners</h1>
              <div className="mb-4 text-sm lg:text-base">Work with celebrities &amp; influencers / <br/>online publishers / TV stations /<br/>radio stations / OOH vendors</div>
              <div className="text-orange-f1"><a href="/#">Show more &gt;</a></div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d1a8e2e684cdaedb10_Group%20512.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Instagram <br/>Influencers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23cf6dc7b070cefa143b_Group%20511.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">YouTube<br/>Influencers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d350318c72105d3675_Group%20516.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Bloggers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d3e683eb2df1f05a83_Group%20515.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Podcasters &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d34126f56fdc343d1c_Group%20514.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Tiktok<br/>Influencers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d15c60b2b27ff0d070_Group%20513.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-16 text-center text-sm lg:font-semibold font-rubik hover:underline">Twitter<br/>Influencers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d34126f52f76343d1d_Group%20517.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-16 text-center text-sm lg:font-semibold font-rubik hover:underline">TV <br/>Stations &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d63c5b0a3e636a1bcd_Group%20518.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-16 text-center text-sm lg:font-semibold font-rubik hover:underline">Radio <br/>Stations &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f23d9b6bbdd2b9b3feacd_Group%20519.png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">OOH <br/>Providers &gt;</div>
              </a>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4">
              <a href="/#" className="hover:opacity-100 opacity-80 ">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f8c5e8fb78a7c7495b369_Group%20538%20(2)%20(1)%20(1).png" loading="lazy" alt="" className=""/>
                <div className="-mt-20 lg:-mt-32 mb-10 lg:mb-20 text-center text-sm lg:font-semibold font-rubik hover:underline">Online<br/>Publishers &gt;</div>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="flex flex-col items-center py-8 lg:py-20 px-5 lg:px-36">
            <div className="text-2xl lg:text-4xl text-gray-700 font-medium mb-6 lg:mb-12">How It Works</div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full text-center">
              <div className="flex flex-col content-center items-center text-center mr-0 lg:mr-5 mb-5 lg:mb-0">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602a222d145e131b6a120502_Mask%20Group.png" loading="lazy" alt="" className="w-72 mb-5"/>
                <div className=" mb-2">
                  <div className="text-base lg:text-2xl font-semibold text-gray-600 mb-2">Browse The Directory</div>
                  <p className="text-sm text-gray-600 font-rubik">Our directory’s powerful search, filter and portfolio features makes it easy to find and connect with skilled creative professionals and businesses.</p>
                </div>
                <a href="/#" className="text-orange-f1 font-semibold text-sm">Browse Directory &gt;</a>
              </div>
              <div className="flex flex-col content-center items-center text-center mr-0 lg:mr-5 mb-5 lg:mb-0">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602a222d01a7fb0af3808110_Mask%20Group-1.png" loading="lazy" alt="" className="w-72 mb-5"/>
                <div className=" mb-2">
                  <div className="text-base lg:text-2xl font-semibold text-gray-600 mb-2">Post a Job</div>
                  <p className="text-sm text-gray-600 font-rubik">Post a job for free on our creative jobs board where interested creative professionals and businesses will directly submit their quotes to you.</p>
                </div>
                <a href="/#" className="text-orange-f1 font-semibold text-sm">Post a job &gt;</a>
              </div>
              <div className="flex flex-col content-center items-center text-center mr-0 lg:mr-5 mb-5 lg:mb-0">
                <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602a222e01a7fb5eee808111_Rectangle%20196.png" loading="lazy" alt="" className="w-72 mb-5"/>
                <div className=" mb-2">
                  <div className="text-base lg:text-2xl font-semibold text-gray-600 mb-2">Schedule a Call</div>
                  <p className="text-sm text-gray-600 font-rubik">Need help chosing which creators to work with? Our creative producers can help you select the right creators to work with and oversee the project if needed.</p>
                </div>
                <a href="/#" className="text-orange-f1 font-semibold text-sm">Schedule a call &gt;</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-white text-center my-12 text-5xl">Testimonials</div>
          <div className="flex flex-col lg:flex-row mx-9 lg:mx-20 my-10">
            <div className="w-full lg:w-1/3 lg:mx-7 mb-7 lg:mb-0">
              <div className="mx-auto text-white text-center">
                <div className="relative mx-auto h-24 w-24 rounded-full overflow-hidden border-2 mb-4">
                  <img className="h-24 w-24" src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f68a42ec1ea6977417523_trent.jpeg" loading="lazy" alt=""/>
                </div>
                <div className="text-lg font-semibold">Trent Lindstone</div>
                <div className="text-xs font-rubik text-gray-400 mb-4">Digital Lead S.E.A of 3M<br/></div>
                <p className="text-sm font-rubik text-gray-200">As a company that operates across multiple vertical markets and countries, GetCraft has been valuable partners both regionally and locally for 3M. Few partners offer flexibility across South East Asia like GetCraft. Their model provides support and expertise at regional level complemented by their in country teams who have local and cultural knowledge, which ensures strong and efficient execution. The access to their extensive pool of creators ensures our diverse needs are met, previous programs such influencer campaigns in medical industrial or corporate brand content strategy demonstrates this.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 lg:mx-7 mb-7 lg:mb-0">
              <div className="mx-auto text-white text-center">
                <div className="relative mx-auto h-24 w-24 rounded-full overflow-hidden border-2 mb-4">
                  <img className="h-24 w-24" src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f6903e58ab94186d234f2_ardian.jpeg" loading="lazy" alt=""/>
                </div>
                <div className="text-lg font-semibold">Ardian Sapoetro</div>
                <div className="text-xs font-rubik text-gray-400 mb-4">VP Digital Marketing, TMRW UOB Digital Bank<br/></div>
                <p className="text-sm font-rubik text-gray-200">I can say GetCraft is a very reliable partner to work with.Not only providing a platform to help us connect with the best creative professionals out there, but they also provide offline service to manage projects and help us achieve the campaign objective. GetCraft not only has a rich network, they also have good project management service and always take the initiative to share recommendations based on data. This is very helpful. So, it's not a surprise for me if GetCraft has grown rapidly from the first time we worked together in 2017.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 lg:mx-7 mb-7 lg:mb-0">
              <div className="mx-auto text-white text-center">
                <div className="relative mx-auto h-24 w-24 rounded-full overflow-hidden border-2 mb-4">
                  <img className="h-24 w-24" src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f69ad547334c453fa67ab_vonn.jpeg" loading="lazy" alt=""/>
                </div>
                <div className="text-lg font-semibold">Vonn Vincent V. Tanchuan, ALMI</div>
                <div className="text-xs font-rubik text-gray-400 mb-4">Assistant Manager of BPI, Philam</div>
                <p className="text-sm font-rubik text-gray-200">I have been working with GetCraft for almost three years now and I commend the team’s mastery of content marketing which is evident through the improvement in several performance metrics for BPI-Philam, including social media engagement, email open and click rates, as well as the steady surge in website traffic. I also appreciate the fact that it’s really easy to work with the different teams which fostered productive collaboration in all projects we do as well as the tailored solutions that they provide to help our brand achieve results.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white ">
          <div className="text-center py-5 lg:py-14 text-2xl lg:text-4xl text-gray-600 font-semibold">Trusted by  1,500+ leading brands and agencies</div>
          <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602b854f35854db3293d42a5_Logo2.svg" loading="lazy" alt="" className="w-80 lg:w-0 pb-5 lg:pb-0 mx-4 lg:mx-auto"/>
          {/* <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602b854f35854d3fc03d42a6_client%20mobile.svg" loading="lazy" alt="" className=""/> */}
        </section>
        <section>
          <div className="w-full bg-cover" style={{ height:"460px",backgroundImage:`url("https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/602f4f626b6bfe3352b81f6c_Mask%20Group%20(1)%20(1).png")`}}>
            <h1 className="text-center text-white text-2xl lg:text-4xl font-semibold pt-20 lg:pt-32 mb-5">Apply as a Creator</h1>
            <div className="lg:w-96 lg:mx-auto">
              <p className="text-center text-white text-xs lg:text-sm mx-5 lg:mx-0">GetCraft helps creators get discovered by more clients, sent more projects &amp; paid faster!</p>
              <div className="text-center mt-12">
                <a href="/#" className="px-4 lg:px-7 py-3 lg:py-4 text-white bg-orange-f1">Learn More</a>
              </div>
            </div>
              {/* <a href="/#" className="bg-orange-f1 text-white items-center justify-center flex px-10 w-">Learn More</a> */}
          </div>
        </section>
      </div>
    </>
  )
}