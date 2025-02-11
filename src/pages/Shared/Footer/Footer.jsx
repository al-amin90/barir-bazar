import { FaFacebook, FaFacebookMessenger, FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="bg-[#F1F4F9]">
            <div className="footer max-w-7xl mx-auto w-[87%]  text-base-content py-10">
                <aside className="flex-col md:flex-row flex gap-7  md:items-center">
                    <img className="w-28 rounded-full" src="./public/logo.webp" alt="" />
                    <div>
                        <h6 className="text-black font-semibold text-base ">Always Here for You</h6>
                        <div className="text-sm font-normal">
                            <p>Call Us: 01754290637 (24/7, Everyday)</p>
                            <p>Email Us: queries@acilogistics.net</p>
                            <p>Barir Bazar</p>
                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className="text-black font-semibold text-base ">Information</h6>

                    <a className="link link-hover hover:text-[#fe5200] text-sm">Office Address</a>
                    <a className="link link-hover hover:text-[#fe5200] text-sm">Shipping & returns</a>
                    <a className="link link-hover hover:text-[#fe5200] text-sm">About us</a>
                    <a className="link link-hover hover:text-[#fe5200] text-sm">Terms & Condition</a>
                </nav>
                <nav>
                    <h6 className="text-black font-semibold text-base ">Customer Service</h6>

                    <a className="link link-hover hover:text-[#fe5200] text-sm">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="text-black font-semibold text-base ">Pay With</h6>

                    <a className="link link-hover hover:text-[#fe5200] text-sm">Contact Us</a>
                </nav>
            </div>

            <div className="bg-[#F7F1D9]">
                <div className="footer max-w-7xl mx-auto w-[87%] text-black items-center py-4 gap-4">
                    <aside className="grid-flow-col items-center">

                        <p className="font-medium text-sm">
                            Copyright © 2025 barirBazar.com
                        </p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4 text-white text-xl">
                            <a href="" className="bg-[#FE5200] p-2 rounded-full">
                                <FaFacebook />
                            </a>
                            <a href="" className="bg-[#FE5200] p-2 rounded-full">
                                <FaYoutube />
                            </a>
                            <a href="" className="bg-[#FE5200] p-2 rounded-full">
                                <FaFacebookMessenger />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;