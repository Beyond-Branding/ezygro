/* eslint-disable react/jsx-no-undef */
import LandingSection from "@/components/common/LandingSection";
import { useState, useEffect } from "react";

export default function InnovativeDashboardsPage() {
  return (
    <>
      <LandingSection
        title={() => (
          <>
            Innovative
            <span className="text-[#4B1D92]">Dashboards</span>
          </>
        )}
        subtitle="Make smarter decisions, faster with Innovative Dashboards that turn complex data into clear, visual insights. Track performance, monitor Key Performing Indicators, and stay in control with real time analytics tailored to your business."
        media="https://res.cloudinary.com/daoju0r3c/image/upload/v1754332932/computer-767776_960_720_fi5unh.jpg"
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="items-center gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 lg:px-12 container">
          <div>
            <h2 className="sm:ml-8 md:ml-16 lg:ml-12 font-bold text-black text-2xl sm:text-3xl md:text-3xl">
              Visualize Success
            </h2>
          </div>
          <div>
            <p className="text-gray-800 text-sm sm:text-base md:text-base leading-relaxed">
              At EZYGRO, we turn data into decisions fast. Our custom built,
              interactive dashboards are designed to align with your unique
              business goals, seamlessly integrating your data sources to
              deliver real time insights. With secure, scalable solutions and
              AI-powered analytics, we help you move beyond just reporting
              towards predictive and prescriptive outcomes that drive smarter,
              faster decision making for growing businesses.
            </p>
            <div className="flex items-center mt-4 font-semibold text-black cursor-pointer"></div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-6 lg:px-8 container">
          <div className="mb-8 sm:mb-10 md:mb-12 sm:ml-8 md:ml-16 lg:ml-12">
            <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-4xl">
              Our <span className="text-purple-900">Services</span>
            </h2>
          </div>
          <div className="gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-3 sm:mb-4 font-bold text-gray-900 text-xl sm:text-2xl">
                Sales & Marketing Dashboards
              </h3>
              <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
                Who it&apos;s for: Marketing Managers, Sales Heads, Growth
                Teams.
                <br />
                <span className="block h-4" />
                Purpose: Optimize sales processes and measure marketing
                effectiveness.
                <br />
                <span className="block h-4" />
                <span className="font-semibold">Key Features:</span>
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Lead Tracking: Visual pipeline of leads by stage, source,
                    and owner.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Conversion Metrics: Analyze conversion rates across
                    campaigns and channels.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Campaign Performance: Measure ROI, CTR, impressions, and
                    engagement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Customer Journey Mapping: Track user behavior from first
                    touchpoint to sale.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Sales Forecasting: Use historical data to predict future
                    performance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Segmentation & Targeting: Visualize demographics,
                    geographics, and user profiles.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-3 sm:mb-4 font-bold text-gray-900 text-xl sm:text-2xl">
                Operational <br />
                Dashboards
              </h3>
              <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
                Who it&apos;s for: Operations Heads, Department Managers,
                Project Leads.
                <br />
                <span className="block h-4" />
                Purpose: Enhance organizational efficiency and decision-making.
                <br />
                <span className="block h-4" />
                <span className="font-semibold">Key Features:</span>
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Real-Time Key Performing Indicator Monitoring: Track
                    productivity, turnaround time, and output across teams.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Performance Analytics: Identify bottlenecks and areas of
                    improvement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Resource Utilization: View how manpower and assets are
                    allocated and used.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Project Progress Tracking: Monitor milestones, deliverables,
                    and deadlines.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Custom Alerts & Notifications: Set triggers for abnormal
                    performance or delays.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Cross-Departmental Insights: Unified view of performance
                    across HR, logistics, IT, etc.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-3 sm:mb-4 font-bold text-gray-900 text-xl sm:text-2xl">
                Financial <br />
                Dashboards
              </h3>
              <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
                Who it&apos;s for: CFOs, Finance Managers, Accountants, Startup
                Founders.
                <br />
                <span className="block h-4" />
                Purpose: Real-time visibility into financial health.
                <br />
                <span className="block h-4" />
                <span className="font-semibold">Key Features:</span>
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Revenue & Expense Tracking: Monitor monthly, quarterly, and
                    annual financial performance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Profitability Analysis: Understand margins by product,
                    service, or business unit.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Cash Flow Monitoring: Visualize inflows and outflows to
                    manage liquidity.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Budget vs Actual Comparison: Track financial performance
                    against forecasts.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Ratio Analysis: Automated display of key financial ratios
                    (ROI, ROE, Current Ratio, etc.).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Drill-Down Functionality: Explore data by region, category,
                    or time frame for detailed insights.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 sm:pb-16">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl text-center">
          <p className="text-gray-800 text-base sm:text-lg">
            For any queries, please contact us at:{" "}
            <a
              href="tel:+91 9372963906"
              className="font-bold text-purple-900 hover:underline"
            >
              +91 9372963906
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
