export default function ContactMe() {
    return (
      <section id="contact" className="py-12 bg-gradient-to-r from-pink-400 to-gray-800 h-screen pt-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Me</h2>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  