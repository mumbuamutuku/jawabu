import emailjs from 'emailjs-com';
import { what } from '../assets/index';
import { useState } from 'react';

const Contact = () => {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const templateParams = {
      firstName: formData.get('full-name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // Create the WhatsApp message by using the templateParams object
    const whatsappMessage = `Hello, my name is ${templateParams.firstName}. My email is ${templateParams.email}, and my phone number is ${templateParams.phone}. Subject: ${templateParams.subject}. Message: ${templateParams.message}.`;
    const whatsappUrl = `https://wa.me/254741305364?text=${encodeURIComponent(whatsappMessage)}`;

    setWhatsappUrl(whatsappUrl); // Set the dynamic URL for the WhatsApp link

    // EmailJS send function
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        alert('Message sent successfully!');
        event.target.reset(); // Clear the form
      }, (error) => {
        alert('Error sending message.');
      });
  };

  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-3xl font-medium px-2 py-1 uppercase">
          Contact us
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-gxl mt-10 lg:mt-20 tracking-wide">
          What's on{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">your mind?</span>
        </h2>
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <form onSubmit={handleSubmit} className="w-full px-6">
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

            {/* Submit Button and WhatsApp Link */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-orange-800 px-4 py-6 text-xl font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Send Message
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-800 py-6 px-4 rounded-md text-white text-xl font-semibold hover:from-orange-600 hover:to-red-600"
              >
                <img src={what} width="30" alt="WhatsApp" className="mr-2" /> 
                Send on WhatsApp
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
