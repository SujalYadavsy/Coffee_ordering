import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-10 px-6 sm:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">CODERS CAFE</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores
          </p>
          <p className="text-sm mb-2">📞 +1 (123) 456-7890</p>
          <p className="text-sm">📍 Noida, Uttar Pradesh</p>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-sm text-white/80">
        © 2024 Company Name. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer