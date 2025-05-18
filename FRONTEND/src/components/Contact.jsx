
const Contact = () => {
  return (
    // Main outer section jo pura contact form ka layout wrap karta hai
    <section className="relative min-h-screen bg-slate-900 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ke liye dot pattern use kiya gaya hai */}
      <div className="absolute inset-0 bg-[radial-gradient(#555_2px,transparent_2px)] [background-size:35px_35px] z-0" aria-hidden="true"/>
      {/* Glassmorphism container for form ke liye */}
      <div className="relative z-10 w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl rounded-3xl p-6 sm:p-10 lg:p-14 transition-all">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-10 tracking-tight">
          Contact Us
        </h2>
        {/* Form start ho raha hai, jo Getform.io se connected hai */}
        <form action="https://getform.io/f/avryeyra" method="POST" className="space-y-8">
          {/* Name input field */}
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base font-medium text-white mb-2">
              Name <span className="text-red-500">*</span> 
            </label>
            <input type="text"  id="name"  name="name"  required  placeholder="Jane Doe"  className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"/>
          </div>
          <div> 
            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input  type="email"  id="email" name="email"required placeholder="you@example.com" className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"/>
          </div>

          {/* Message textarea */}
          <div>
            {/* Label for message field */}
            <label htmlFor="message" className="block text-sm sm:text-base font-medium text-white mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            {/* Textarea input for long message */}
            <textarea id="message"name="message" rows="6" required placeholder="Type your message here..."  className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition resize-none"></textarea>
          </div>
          {/* Bot spam prevent karne ke liye hidden field */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />
           {/* Submit hone ke baad redirect hone ke liye */}
          <input type="hidden" name="_redirect" value="https://getform.io/f/avryeyra/thank-you" />
          <div className="pt-2">
            <button type="submit" className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/40 transition duration-300"> Send Message 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
