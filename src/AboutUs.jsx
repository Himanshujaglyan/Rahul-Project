const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600 max-w-2xl mb-4">
                Deepfakes are going to be the first real punch from AI to humanity. 
                The cybersecurity industry has a very short time to get ahead of deepfakes 
                before they undermine the public’s trust in reality.
            </p>
            <p className="text-gray-600 max-w-2xl mb-6">
                We first recognized the danger while our parent company <strong> Zemana </strong> 
                researched methods to develop an AI-based antivirus engine. Later, in mid-2018, 
                we started our research on deepfake detection and generation as the deepware AI team.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-sm font-semibold hover:bg-red-700">
                CONTACT US
            </button>
        </div>
    );
}

export default AboutUs;
