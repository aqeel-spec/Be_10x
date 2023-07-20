import React from 'react';

const Reference = () => {
  return (
    <div>
      {/* Refer & Earn Section */}
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-black_02 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-2xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black_04 md:text-5xl lg:text-6xl">
            Spread the Entrepreneurial Spirit: Refer & Earn
          </h1>
          <p className="mb-8 text-base  font-normal text-black_04 lg:text-xl sm:px-16 lg:px-48">
            Spread the word and earn rewards with our Refer & Earn program! As a valued
            member of our community, we invite you to share your positive experience with
            friends, colleagues, and aspiring software developers. By referring them to our
            platform, you not only help them discover valuable resources and opportunities
            but also earn enticing rewards in return. Each successful referral brings you one
            step closer to unlocking exclusive benefits and incentives. Join our referral
            program today and start sharing the benefits of our platform while earning
            exciting rewards along the way.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="signIn"
              className="btn inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-12  text-black_02">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">WHAT WE OFFER:</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Startups */}
            <div className="bg-blue-700 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Startups</h3>
              <p className="mb-6">
                Launch your entrepreneurial journey with our platform, propelling your
                business to new heights.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-bold"
              >
                Take Off
              </a>
            </div>
            {/* Students */}
            <div className="bg-blue-700 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Students</h3>
              <p className="mb-6">
                Unlock endless opportunities for growth as a student entrepreneur,
                harnessing knowledge and resources tailored to your learning needs.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-bold"
              >
                Learn
              </a>
            </div>
            {/* Professionals */}
            <div className="bg-blue-700 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Professionals</h3>
              <p className="mb-6">
                Empower your startup with the expertise of seasoned professionals,
                guiding you towards sustainable success in the competitive market.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-bold"
              >
                Collaborate
              </a>
            </div>
            {/* Sales and Marketing */}
            <div className="bg-blue-700 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Sales and Marketing</h3>
              <p className="mb-6">
                Supercharge your sales and amplify your revenue potential with our
                backend API solutions, giving you the competitive edge in the marketplace.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-bold"
              >
                Market
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Continue on Next Page */}
      <section className="text-center py-6">
        <a
          href="#"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold"
        >
          Continue on Next Page
        </a>
      </section>
    </div>
  );
};

export default Reference;