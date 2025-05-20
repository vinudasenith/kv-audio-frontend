import { FaHeadphonesAlt, FaMicrophoneAlt, FaGuitar, FaSpeakerDeck, FaLightbulb } from "react-icons/fa";
import { MdCamera, MdMusicNote } from "react-icons/md";

export default function Gallery() {
    const items = [
        { icon: <FaSpeakerDeck size={60} />, label: "High-Power Speakers" },
        { icon: <FaMicrophoneAlt size={60} />, label: "Wireless Microphones" },
        { icon: <FaHeadphonesAlt size={60} />, label: "DJ Headsets" },
        { icon: <FaGuitar size={60} />, label: "Electric Guitars" },
        { icon: <MdCamera size={60} />, label: "Stage Cameras" },
        { icon: <FaLightbulb size={60} />, label: "Lighting Equipment" },
        { icon: <MdMusicNote size={60} />, label: "Audio Mixers" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10">
            <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
                Gallery
            </h1>
            <p className="text-gray-300 mb-10 text-center">
                Explore our high-quality sound and stage equipment available for rental.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-[#1f1f1f] p-6 rounded-lg shadow-md hover:bg-[#2b2b2b] transition"
                    >
                        <div className="text-yellow-400 mb-4">{item.icon}</div>
                        <p className="text-white text-center font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
