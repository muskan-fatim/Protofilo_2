import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-8">
          Designing <b className="text-gray-600">With Heart</b> to Provide
          <br />
          <span className="block mt-2">the <b className="text-gray-600">Best User Experience</b></span>
        </h1>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mt-4 sm:mt-6 mb-16">
          Some of the services I offer to ensure your digital product has a well-designed and user-friendly experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <Image src="/feather-pen.png" alt="Visual Design" className="mx-auto mb-4" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-700">Visual Design</h2>
            <p className="mt-2 text-gray-500">
              Craft visually appealing designs that delight users and elevate your brand.
            </p>
          </div>
          <div className="text-center">
            <Image src="/layers.png" alt="Information Architecture" className="mx-auto mb-4" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-700">Information Architecture</h2>
            <p className="mt-2 text-gray-500">
              Develop a clear and intuitive structure for seamless navigation.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/icons8-multiple-devices-96.png"
              alt="Responsive Design"
              className="mx-auto mb-4"
              height={50}
              width={50}
            />
            <h2 className="text-xl font-semibold text-gray-700">Responsive Design</h2>
            <p className="mt-2 text-gray-500">
              Ensure a smooth experience across all devices with a responsive layout.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-500 pt-8 text-center">
        <p className="text-gray-500 text-sm">© 2024 Muskan Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
