import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-purple-700/20 text-center text-gray-400 mt-12">
      <div className="max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} <strong>Dushyant Goyal</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
}
