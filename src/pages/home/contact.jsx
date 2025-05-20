export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-yellow-400 mb-4 text-center">
                    Contact Us
                </h1>
                <p className="text-gray-300 mb-10 text-center">
                    Have questions about our sound system rentals? Reach out and we'll get back to you as soon as possible!
                </p>


                <form className="grid grid-cols-1 gap-6 bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            rows="5"
                            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-300 transition"
                    >
                        Send Message
                    </button>
                </form>


                <div className="mt-12 text-center space-y-4">
                    <p className="text-gray-300">
                        📞 Phone: <span className="text-yellow-400 font-medium">+94 (0) (800) 5555</span>
                    </p>
                    <p className="text-gray-300">
                        📧 Email: <span className="text-yellow-400 font-medium">kv.audio@gmail.com</span>
                    </p>
                    <p className="text-gray-300">
                        📍 Location: <span className="text-yellow-400 font-medium">Colombo, LK</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
