import Image from "next/image";
import Link from "next/link";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/assets/images/logo.png";

const features = {
  tag: "Revolutionize Your Finances",
  title: "Unleashing Unrivaled Budgeting Power",
  description:
    "Embark on a journey of financial empowerment with YABA. Crafted with innovative technology and user-friendly interfaces, YABA equips you with tools that make managing money effortless, enjoyable, and effective. Experience the future of financial planning today with our three core features",
  list: [
    {
      name: "Personalized Budgeting.",
      description:
        "YABA's AI-driven budgeting tool creates personalized budget plans based on your income, expenses, and financial goals. It adjusts your budget in real-time as your financial situation changes, ensuring your goals are always within reach.",
      icon: CloudArrowUpIcon,
      href: "/",
    },
    {
      name: "Smart Expense Tracking.",
      description:
        "No more manually entering each purchase or forgetting to log an expense. YABA seamlessly syncs with your accounts to automatically track and categorize your spending, providing you with accurate, up-to-date overviews anytime, anywhere.",
      icon: LockClosedIcon,
      href: "/",
    },
    {
      name: "Financial Forecasting.",
      description:
        "Look ahead with YABA's predictive analytics. Our app uses your financial history to forecast future spending trends and potential savings opportunities. Make informed decisions and stay one step ahead of your financial future.",
      icon: ServerIcon,
      href: "/",
    },
  ],
};

const stats = [
  { id: 1, name: "Satisfied Users", value: "99%" },
  { id: 2, name: "Average Expense Reduction", value: "20%" },
  { id: 3, name: "Average Time Saved per Month", value: "15 hours" },
  { id: 4, name: "Total Savings Achieved by Users", value: "$50M+" },
];
const people = [
  {
    name: "Elton Bautista",
    role: "CEO",
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Bobby Lee",
    role: "CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Alexandra Martin",
    role: "CFO",
    imageUrl:
      "https://images.unsplash.com/photo-1554713388-77c211c0529d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];
const faqs = [
  {
    id: 1,
    question: "What is YABA?",
    answer:
      "YABA (Yet Another Budget App) is a personal finance app designed to simplify budgeting, track expenses, and offer predictive financial insights for smarter financial decision-making.",
  },
  {
    id: 2,
    question: "How does YABA's personalized budgeting work?",
    answer:
      "YABA's AI-powered budgeting tool creates a personalized budget based on your income, expenses, and financial goals. The budget adjusts in real-time as your financial situation changes.",
  },
  {
    id: 3,
    question: "How does YABA track expenses?",
    answer:
      "YABA automatically syncs with your bank accounts to track and categorize your spending. It provides real-time updates and a detailed overview of where your money goes.",
  },
  {
    id: 4,
    question: "What is YABA's financial forecasting?",
    answer:
      "YABA's financial forecasting uses your financial history to predict future spending trends and saving opportunities. It helps you make informed decisions and plan your finances effectively.",
  },
  {
    id: 5,
    question: "Is my data secure with YABA?",
    answer:
      "Absolutely. YABA employs top-tier security measures, including encryption, to ensure the privacy and protection of your financial data.",
  },
  {
    id: 6,
    question: "Where can I download YABA?",
    answer:
      "YABA is available for download on the App Store and Google Play Store. You can also access YABA's features through our web platform.",
  },
  {
    id: 7,
    question: "Is YABA free to use?",
    answer:
      "YABA offers a free basic version. However, to unlock all features and gain full access to the financial management tools, there's a modest subscription fee.",
  },
  {
    id: 8,
    question: "Does YABA offer personal financial advice?",
    answer:
      "No, YABA doesn't provide personalized financial advice. However, the app offers general insights, tips for smart financial management, and predictive financial analytics.",
  },
  {
    id: 9,
    question: "How does YABA compare to other budgeting apps?",
    answer:
      "YABA stands out with its intuitive design, personalized budgeting, smart expense tracking, and predictive financial insights. It's more than a budgeting app, it's a comprehensive financial management tool.",
  },
];

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Home() {
  return (
    <>
      <div>
        {/* <LPNavbar /> */}
        <main>
          {/* <Hero /> */}
          <section>
            <div className="relative isolate overflow-hidden bg-slate-950">
              <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="50%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                />
              </svg>
              <div
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                  }}
                />
              </div>
              <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                  <Link href="/">
                    <div className="pl-2">
                      <Image src={Logo} alt="logo" width={40} height={40} />
                    </div>
                  </Link>

                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    YABA. Your Tailored Path to Financial Freedom
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    YABA is more than a budget app—it&lsquo;s your personalized
                    financial guide. With our intuitive tools and intelligent
                    insights, you&lsquo;ll navigate your finances with ease,
                    make smarter decisions, and achieve financial freedom
                    faster. Let YABA put you in control of your money, today and
                    tomorrow.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                  <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                    {/* <img
                      src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                      alt="App screenshot"
                      width={2432}
                      height={1442}
                      className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* feature   */}
          <section>
            <div className="bg-slate-950 py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-base font-semibold leading-7 text-purple-400">
                    {features.tag}
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {features.title}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    {features.description}
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {features.list.map((feature) => (
                      <div key={feature.name} className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                          <feature.icon
                            className="h-5 w-5 flex-none text-purple-400"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                          <p className="flex-auto">{feature.description}</p>
                          <p className="mt-6">
                            <a
                              href={feature.href}
                              className="text-sm font-semibold leading-6 text-purple-400"
                            >
                              Learn more <span aria-hidden="true">→</span>
                            </a>
                          </p>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
          {/* review */}
          <section>
            <div className="bg-slate-950 pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
              <div className="bg-slate-950 pb-20 sm:pb-24 xl:pb-0">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                  <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                    <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                      <img
                        className="absolute inset-0 h-full w-full rounded-2xl bg-slate-950 object-cover shadow-2xl"
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                    <figure className="relative isolate pt-6 sm:pt-12">
                      <svg
                        viewBox="0 0 162 128"
                        fill="none"
                        aria-hidden="true"
                        className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                      >
                        <path
                          id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                          d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                        />
                        <use
                          href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                          x={86}
                        />
                      </svg>
                      <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                        <p>
                          YABA has completely revolutionized my approach to
                          budgeting. Its personalized budgeting, smart expense
                          tracking, and insightful financial forecasting make
                          managing finances incredibly straightforward. Within
                          months, I&lsquo;ve gained unparalleled control over my
                          money, turning financial stress into financial
                          freedom. Highly recommended for anyone seeking a
                          transformative budgeting tool.
                        </p>
                      </blockquote>
                      <figcaption className="mt-8 text-base">
                        <div className="font-semibold text-white">
                          Alex Thompson
                        </div>
                        <div className="mt-1 text-gray-400">
                          SapphireTech Solutions
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* stats */}
          <section>
            <div className="bg-slate-950 py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Trusted by creators worldwide
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                      Lorem ipsum dolor sit amet consect adipisicing possimus.
                    </p>
                  </div>
                  <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="flex flex-col bg-white/5 p-8"
                      >
                        <dt className="text-sm font-semibold leading-6 text-gray-300">
                          {stat.name}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
          {/* newsletter */}
          <section>
            <div className="bg-slate-950 py-16 sm:py-24">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                  <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Get notified when we&lsquo;re launching.
                  </h2>
                  <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                    Don&lsquo;t miss out on YABA&lsquo;s continuous evolution.
                    Sign up to be the first to know about our updates, new
                    features, and exciting improvements. Transform your
                    financial journey with YABA. Stay informed, stay ahead.
                  </p>
                  <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Notify me
                    </button>
                  </form>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true"
                  >
                    <circle
                      cx={512}
                      cy={512}
                      r={512}
                      fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                      fillOpacity="0.7"
                    />
                    <defs>
                      <radialGradient
                        id="759c1415-0410-454c-8f7c-9a820de03641"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(512 512) rotate(90) scale(512)"
                      >
                        <stop stopColor="#a855f7" />
                        <stop offset={1} stopColor="#3b0764" stopOpacity={0} />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </section>
          {/* team */}
          <section>
            <div className="bg-slate-950 py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Meet our team
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-400">
                    We’re a dynamic group of individuals who are passionate
                    about what we do.
                  </p>
                </div>
                <ul
                  role="list"
                  className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                >
                  {people.map((person) => (
                    <li
                      key={person.name}
                      className="rounded-2xl bg-gray-800 px-8 py-10"
                    >
                      <Image
                        className="mx-auto h-48 w-48 rounded-full"
                        src={person.imageUrl}
                        alt={person.name}
                        width={192}
                        height={192}
                      />
                      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                        {person.name}
                      </h3>
                      <p className="text-sm leading-6 text-gray-400">
                        {person.role}
                      </p>
                      <ul
                        role="list"
                        className="mt-6 flex justify-center gap-x-6"
                      >
                        <li>
                          <a
                            href={person.twitterUrl}
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href={person.linkedinUrl}
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          {/* faq */}
          <section>
            <div className="bg-slate-950">
              <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
                  Frequently asked questions
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
                  Have a different question and can’t find the answer you’re
                  looking for? Reach out to our support team by{" "}
                  <a
                    href="#"
                    className="font-semibold text-purple-400 hover:text-purple-300"
                  >
                    sending us an email
                  </a>{" "}
                  and we’ll get back to you as soon as we can.
                </p>
                <div className="mt-20">
                  <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                    {faqs.map((faq) => (
                      <div key={faq.id}>
                        <dt className="text-base font-semibold leading-7 text-white">
                          {faq.question}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-300">
                          {faq.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* footer */}
      <footer className="bg-slate-950" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/">
                <div className="pl-2">
                  <Image src={Logo} alt="logo" width={40} height={40} />
                </div>
              </Link>
              <p className="text-sm leading-6 text-gray-300">
                Transforming financial landscapes by building intuitive
                budgeting systems.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-gray-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    YABA.
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2023 YABA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
