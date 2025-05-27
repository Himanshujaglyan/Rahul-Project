const ContactUs = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{ backgroundColor: "#FAF5E5" }} // Beige background
    >
      <h1 className="text-3xl font-bold mb-6 text-[#3B2F26]">
        Let's talk about deepfakes!
      </h1>

      <div
        className="p-6 shadow-lg text-center w-11/12 max-w-screen-lg rounded-lg mb-8"
        style={{ backgroundColor: "#3B2F26" }} // Dark brown box
      >
        <p className="text-[#FAF5E5] text-lg mb-2">
          Whether it's for business or technical purposes.
        </p>
        <p className="text-[#FAF5E5] text-lg mb-4">
          Don't hesitate to reach out to us — we would love to hear from you.
        </p>
        <p className="text-[#FAF5E5] text-lg">
          You can contact <strong>Rahul Kaushik</strong> by sending an email to
          <a
            href="mailto:info@deepware.ai"
            className="text-red-400 font-semibold ml-1 underline"
          >
            rahulkaushikg07@gmail.com
          </a>
        </p>
      </div>

      {/* Image Section */}
      <div
        className="w-11/12 max-w-screen-lg shadow-md rounded-lg overflow-hidden p-4 mb-4"
        style={{ backgroundColor: "#3B2F26" }} // ✅ Match navbar color
      >
        <img
          src="/screenshot.jpeg"
          alt="Screenshot"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default ContactUs;
