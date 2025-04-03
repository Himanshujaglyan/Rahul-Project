const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Let’s talk about deepfakes!</h1>
            <div className="bg-gray-100 p-6  shadow-lg text-center w-11/12 max-w-screen-lg">
                <p className="text-gray-700 text-lg mb-2">Whether it's for business or technical purposes.</p>
                <p className="text-gray-700 text-lg mb-4">Don't hesitate to reach out to us – we would love to hear from you.</p>
                <p className="text-gray-700 text-lg">
                    You can contact us by sending an email to 
                    <a href="mailto:info@deepware.ai" className="text-blue-600 font-semibold"> info@deepware.ai</a>
                </p>
            </div>
        </div>
    );
}

export default ContactUs;
