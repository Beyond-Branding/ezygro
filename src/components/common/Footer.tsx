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
        <div
          className="mx-auto container"
          style={{ backgroundColor: "#1e1e1e" }}
        >
          <div className="ml-0 sm:ml-16 md:ml-32 lg:ml-44 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
              {/* Careers Section */}
              <div className="text-left">
                <h2 className="mb-4 font-light text-white text-3xl lg:text-4xl">
                  Careers
                </h2>
                <p className="mb-8 text-gray-300 text-lg">
                  Gain a HERITAGE. Leave a LEGACY.
                </p>
                <Link
                  href="/careers"
                  className="inline-block hover:bg-white px-8 py-3 border border-gray-400 font-medium text-white hover:text-black text-sm tracking-wide transition-colors duration-300"
                >
                  JOIN US
                </Link>
              </div>
              {/* Contact Us Section */}
              <div className="text-left">
                <h2 className="mb-4 font-light text-white text-3xl lg:text-4xl">
                  Contact Us
                </h2>
                <p className="mb-8 text-gray-300 text-lg">
                  What can we help you achieve?
                </p>
                <Link
                  href="/contact"
                  className="inline-block hover:bg-white px-8 py-3 border border-gray-400 font-medium text-white hover:text-black text-sm tracking-wide transition-colors duration-300"
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
        <div className="mx-auto ml-0 sm:ml-16 md:ml-32 lg:ml-40 px-4 sm:px-6 lg:px-8 py-12">
          <div className="gap-8 lg:gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto container">
            {/* Tech Mahindra Logo */}
            <div
              className="flex items-center lg:col-span-1"
              style={{ alignItems: "flex-start" }}
            >
              <Image
                src={logo}
                alt="Tech Mahindra Logo"
                className="mt-0 rounded w-auto h-24"
                style={{
                  marginTop: "-0.75rem",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            {/* Our Brand */}
            <div>
              <h3 className="mb-6 font-semibold text-white text-base">
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
              <h3 className="mb-6 font-semibold text-white text-base">
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
              <h3 className="mb-6 font-semibold text-white text-base">
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
      <div className="bg-black border-gray-800 border-t">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 container">
          <div className="flex lg:flex-row flex-col justify-between items-center mx-auto container">
            <p className="mb-4 lg:mb-0 text-gray-400 text-sm">
              © 2025 EZYGRO Limited
            </p>
            <div className="flex items-center space-x-6">
              <button
                className="focus:outline-none text-gray-400 hover:text-white text-sm transition-colors"
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
