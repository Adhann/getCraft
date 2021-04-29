import { useState } from "react"

export default function Navbar() {
  
  const [isMobile, setIsMobile] = useState(false)
  const [navBgClr, setNavBgClr] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 15) {
      setNavBgClr(true)
    } else {
      setNavBgClr(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={`${navBgClr ? 'bg-gray-21' : 'bg-transparent'} w-full fixed px-5 text-sm`}>
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between px-4 py-4">
          <div>
            <a href="/#">
              <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5ee1607c3e19907b81f310cb_getcraft-logo.svg" alt="" className="" />
            </a>
          </div>
          <div>
            <button onClick={() => setIsMobile(!isMobile)} className="focus:outline-none text-white block lg:hidden">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className={`${!isMobile ? 'block ' : 'hidden'} text-orange-f1`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                <path className={`${isMobile ? 'block ' : 'hidden'} text-orange-f1`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isMobile ? 'block bg-gray-21' : 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0`}>
          {
            !isMobile ? (
              <>
                <div className="flex flex-col lg:flex-row items-center">
                  <a href="/#" className="block px-4 py-2 lg:py-5 text-white">Directory</a>
                  <a href="/#" className="block px-4 py-2 lg:py-5 text-white">Jobs</a>
                  {/* <a href="/#" className="block px-4 py-2 lg:py-5 text-white">Community</a>
                  <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5f16a8934334a73654a8563e_arrow%20down%20icon.png" alt="" className="w-3"/> */}
                  <div className="dropdown inline-block relative">
                    <div className="flex flex-col lg:flex-row items-center">
                      <a href="/#" className="block px-4 py-2 lg:py-5 text-white">Community</a>
                      <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5f16a8934334a73654a8563e_arrow%20down%20icon.png" alt="" className="w-3"/>
                    </div>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                      <li className="w-96">
                        <a className="bg-gray-21 text-white hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap" href="/#">
                          <div className="flex">
                            <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5ee16caed52645a053a1015d_C.png" alt="" className="w-11 h-11 mr-4"/>
                            <div className="">
                              <div className="font-semibold">Crafters</div>
                              <div className="text-xs text-gray-400">Helping you level up your craft &amp; become the best in your industry!</div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="w-96">
                        <a className="bg-gray-21 text-white hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap" href="/#">
                          <div className="flex">
                            <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5ee16caed52645bff5a10158_M.png" alt="" className="w-11 h-11 mr-4"/>
                            <div className="">
                              <div className="font-semibold">MarketingCraft</div>
                              <div className="text-xs text-gray-400">Helping you become the best marketer you can be!</div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                  <a href="/#" className="block px-4 py-2 lg:py-5 text-white">Apply as Creator</a>
                  <a href="/#" className="flex px-4 py-2 lg:py-5 text-white items-center">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-f1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                    Log in
                    <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5ee1667cf62b2731856fc129_login.png" alt="register" className="h-6 w-6 ml-2"/>
                  </a>
                  <a href="/#" className="block px-4 py-2 lg:py-2 text-white bg-orange-f1 mx-1.5">Register</a>
                  <a href="/#" className="block px-4 py-2 lg:py-2 text-white border mx-1.5">Need Help?</a>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col lg:flex-row">
                  <a href="/#" className="flex px-4 py-4 lg:py-5 text-white">
                    <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5ee1667cf62b2731856fc129_login.png" alt="register" className="h-6 w-6 mr-3"/>
                  Register
                  </a>
                  <a href="/#" className="flex px-4 py-4 lg:py-5 text-white">
                  <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5ee1667cf62b2731856fc129_login.png" alt="register" className="h-6 w-6 mr-3"/>
                    Log in
                  </a>
                  <a href="/#" className="flex px-4 pt-4 pb-4 py-2 lg:py-5 text-white border-b">
                    <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/601a3f78c1ff0bb682063525_color_lens.png" alt="Apply as Creator" className="h-6 w-6 mr-3"/>
                  Apply as Creator
                  </a>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <a href="/#" className="flex px-4 pt-4 pb-2 lg:py-5 text-white">
                    <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5f1f49f950a44b668cc5d059_search-24px.png" alt="register" className="h-6 w-6 mr-3"/>
                  Directory
                  </a>
                  <a href="/#" className="flex px-4 py-4 lg:py-5 text-white">
                    <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5f209c1af82e0738999f2467_jobs.png" alt="register" className="h-6 w-6 mr-3"/>
                  Jobs
                  </a>
                  <a href="/#" className="flex px-4 py-4 lg:py-5 text-white border-b">
                    <img src="https://assets.website-files.com/5ee11789f9b8e4ffc2f230f5/5f1f49fef1066cfab72b8561_school-24px.png" alt="register" className="h-6 w-6 mr-3"/>
                  Community
                  </a>
                </div>
              </>
            )
          }
        </div>
      </div>
    </nav>
    
  )
}