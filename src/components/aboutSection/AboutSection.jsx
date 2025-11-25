import { Award, CodeXml, Megaphone, Palette, Pencil, Shield, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const about = [
    {
      id: 1,
      icon:<Shield size={44} color="#0B74FF" />,
      name: "Trusted & Secure",
      description:
        "Your data and transactions are protected with enterprise-grade security.",
    },
    {
      id: 2,
      icon: <Zap size={44} color="#0B74FF" />,
      name: "Fast Matching",
      description:
        "Our smart algorithm connects you with the right opportunities instantly.",
    },
    {
      id: 3,
      icon: <Users size={44} color="#0B74FF" />,
      name: "Global Network",
      description:
        "Join thousands of professionals and companies from around the world.",
    },
    {
      id: 4,
      icon: <Award size={44} color="#0B74FF" />,
      name: "Quality Assured",
      description:
        "All jobs and professionals are verified to ensure the highest quality.",
    },
  ];
  return (
    <>
      <div id="abut" className="py-5 md:py-6 lg:py-8 mb-5">
        <h1 className="text-4xl text-[#0F172A] font-bold mb-4 text-center">
          Why Choose TaskHub?
        </h1>
        <p className="text-lg text-[#707C90] font-sans text-center w-full lg:w-6/12 mx-auto">
          We're more than just a job marketplace. We're a community dedicated to
          connecting talented professionals with meaningful opportunities that
          help them grow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {about.map((category) => (
          <div className=" p-7 w-full bg-white hover:scale-101 transition-all duration-300 cursor-pointe rounded-2xl border border-gray-300 hober:border-2 hover:border-[#136bde]">
            <div className="">
              <div className="bg-[#e8ecf1] w-20 rounded-2xl flex flex-col items-center">
                <p className=" p-3   text-center">{category.icon}</p>
              </div>
              <div className="text-xl text-[#0F172A] font-semibold   pt-5">
                <h2>{category.name}</h2>
              </div>
              <p className="text-lg font-sans text-gray-700  pt-2">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutSection;
