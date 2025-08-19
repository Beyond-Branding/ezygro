import React, { useState } from "react";
import Image from "next/image";
import { Youtube, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import TermsOfUseModal from "./TermsOfUseModal";
import Link from "next/link";

interface FooterProps {
  showCareersContact?: boolean;
}

export default function Footer({ showCareersContact = true }: FooterProps) {
  const [showCookieModal, setShowCookieModal] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-400">
      {showCareersContact && (
        <div className="" style={{ backgroundColor: "#1e1e1e" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 ml-0 sm:ml-16 md:ml-32 lg:ml-44">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Careers Section */}
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
                  Careers
                </h2>
                <p className="mb-8 text-lg text-gray-300">
                  Gain a HERITAGE. Leave a LEGACY.
                </p>
                <Link
                  href="/careers"
                  className="inline-block px-8 py-3 border border-gray-400 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  JOIN US
                </Link>
              </div>
              {/* Contact Us Section */}
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
                  Contact Us
                </h2>
                <p className="mb-8 text-lg text-gray-300">
                  What can we help you achieve?
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 border border-gray-400 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  SPEAK WITH US
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Bottom Footer - Black Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ml-0 sm:ml-16 md:ml-32 lg:ml-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Tech Mahindra Logo */}
            <div
              className="lg:col-span-1 flex items-center"
              style={{ alignItems: "flex-start" }}
            >
              <Image
                src={logo}
                alt="Tech Mahindra Logo"
                className="h-24 w-auto rounded mt-0"
                style={{
                  marginTop: "-0.75rem",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            {/* Our Brand */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-base">
                Our Brand
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Capabilities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Our Services */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-base">
                Our Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/capabilities/financial-accounting"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Financial &amp; Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/income-tax"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Income Tax
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/virtual-cfo"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Virtual CFO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/innovative-dashboards"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Innovative Dashboards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/loans-insurance"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Loans &amp; Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/secretarial-compliances"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Secretarial Compliances
                  </Link>
                </li>
              </ul>
            </div>
            {/* Terms of Use Modal */}
            <TermsOfUseModal
              show={showCookieModal}
              onClose={() => setShowCookieModal(false)}
            />
            {/* Follow Us */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-base">
                Follow Us
              </h3>
              {/* MODIFIED: Social icons updated */}
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/ezygro/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCYjgY2a1e5E2jMJcjyC1iCA/posts?pvf=CAI%253D"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ml-0 sm:ml-16 md:ml-32 lg:ml-40">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2025 EZYGRO Limited
            </p>
            <div className="flex items-center space-x-6">
              <button
                className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none"
                onClick={() => setShowCookieModal(true)}
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
