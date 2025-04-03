const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Let’s talk about deepfakes!</h1>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center max-w-lg">
                <p className="text-gray-700">Whether it's for business or technical purposes.</p>
                <p className="text-gray-700">Don't hesitate to reach out to us – we would love to hear from you.</p>
                <p className="text-gray-700">
                    You can contact us by sending an email to 
                    <a href="mailto:info@deepware.ai" className="text-blue-500 font-semibold"> info@deepware.ai</a>
                </p>
            </div>
        </div>
    );
}

export default ContactUs;
