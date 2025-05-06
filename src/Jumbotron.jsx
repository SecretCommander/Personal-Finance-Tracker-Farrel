import Bg from "./assets/finance.svg";

export default function Jumbotron() {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* Background SVG */}
      <img
        src={Bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain opacity-10 -z-10 pointer-events-none lg:mt-10"
      />

      {/* Content */}
      <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-24 relative z-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Personal Finance Tracker Website
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          Here you can keep track of your income and expenses, and manage your budget
          effectively. Our website provides a user-friendly interface and powerful tools to help you achieve your financial goals and help your economic.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
        </div>
      </div>
    </section>
  );
}
