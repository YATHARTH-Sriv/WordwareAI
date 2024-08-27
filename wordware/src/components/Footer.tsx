import React from 'react';

function Footer() {
  return (
    <div className=" bg-black text-white p-6">
      <div className="flex flex-col items-center justify-center">
        {/* Main Text */}
        <h1 className="text-2xl font-bold mb-4 p-3">Wordware</h1>

        {/* Social Links */}
        <div className="flex space-x-6 m-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        {/* Border */}
        <div className="border-t border-white w-[70%] m-4"></div>

        {/* Bottom Text */}
        <div className="flex justify-between w-full max-w-6xl mt-3 text-sm">
          <p>Copyright © 2024 HeyDaily Inc. (dba Wordware) All rights reserved.</p>
          <div className="space-x-4">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
