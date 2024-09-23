import React from 'react'

const Contact = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
  <div className="text-center">
    <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-3xl font-medium px-2 py-1 uppercase">
      Contact us
    </span>
    <h2 className="text-3xl sm:text-5xl lg:text-gxl mt-10 lg:mt-20 tracking-wide">
      What's on {" "}
      <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">your mind?</span>
    </h2>
  </div>

  <div className="flex justify-center mt-8 lg:mt-12">
    <form action="" method="POST" className="w-full px-6">
      <div className="grid grid-cols-1 gap-y-6">
        
        {/* First Name and Email on the same row */}
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <input type="text" name="full-name" id="full-name" placeholder="Full Name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-6 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="Email Address" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-6 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        {/* Phone Number and Subject on the same row */}
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <input type="tel" name="phone" id="phone" placeholder="Phone Number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-6 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div>
            <input type="text" name="subject" id="subject" placeholder="Subject" className="block w-full rounded-md border-0 px-3.5 py-6 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        {/* Message Input - Full width */}
        <div>
          <textarea name="message" id="message" placeholder="Your Message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-6 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button type="submit" className="inline-flex justify-center rounded-md bg-orange-800 px-4 py-6 text-xl font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
  )
}

export default Contact