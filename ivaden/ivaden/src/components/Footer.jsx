import { resourcesLinks, platformLinks,communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-md font-semibold mb-4">
                Have Any Question?
                </h3>
                <p className="text-orange-800 text-2xl hover:text-white mb-2">
                    +254 711 147 134</p>
                <h3 className=" text-md font-semibold mb-4">
                Send Email
                </h3>
                <p className="text-2xl text-orange-800 hover:text-white mb-2">
                   info@ivaden.co.ke</p>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Explore</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="text-neutral-300 hover:text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Links</h3>
                <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <div className="h-5 w-5 bg-neutral-900 text-orange-700 rounded-full flex items-center justify-center">
                        {link.icon}
                        </div>
                        <a href={link.href} className="text-neutral-300 hover:text-white">
                        {link.text}
                        </a>
                    </li>
                    ))}

                </ul>
            </div>
        </div>  
        <div className="flex items-center justify-center mt-5">
            Copyright © {new Date().getFullYear()}{" "}
            <a href="/" className="text-orange-500 hover:text-orange-700 mx-1">
                Ivaden Consultancy. {"  "}
            </a>
            All rights reserved •
            </div>
 
    </footer>
  )
}

export default Footer