const Footer = () => {
  return (
    <div>
      <div className="bg-blueLight text-gray-50">
      <div className="max-w-[1440px] mx-auto hidden sm:grid grid-cols-12 p-4 sm:py-8 sm:px-0 md:mt-4">
        <div className="col-span-12 sm:col-start-2 sm:col-span-10 flex justify-between">

          <div className="text-sm">
            <h3 className="text-xl font-medium mb-2">Customer Service</h3>
            <span className="block mb-2">Terms &amp; Privacy policy</span>
            <span>Return policy</span>
          </div>

          <div className="text-sm">
            <h3 className="text-xl font-medium mb-2">Language</h3>
            <span className="block mb-2">Myanmar (Unicode)</span>
            <span className="block mb-2">Myanmar (Zawgyi)</span>
            <span>English</span>
          </div>

          <div className="text-sm">
            <h3 className="text-xl font-medium mb-2">Contact Us</h3>
            <span className="block mb-2">+959 00122 3443</span>
            <span>No.6, Malar Myaing 4th Street,</span>
            <span className="block">16th Ward, Hlaing Township,</span>
            <span>Yangon, Myanmar</span>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full text-center sm:font-medium py-2 bg-blueDark text-gray-50">
        <p>All Rights Reserved. Made With All The Love in Shopdoora Co,Ltd.</p>
      </div>
    </div>
  );
};
export default Footer;
