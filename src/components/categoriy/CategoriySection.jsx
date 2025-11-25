import { CodeXml, Megaphone, Palette, Pencil } from "lucide-react";

const CategoriySection = () => {
  const categories = [
    {
      id: 1,
      icon: <CodeXml size={44} color="#0B74FF" />,
      name: "Web Development",
      count: "1,234 jobs",
    },
    {
      id: 2,
      icon: <Megaphone size={44} color="#f5683d" />,
      name: "Digital Marketing",
      count: "856 jobs",
    },
    {
      id: 3,
      icon: <Palette size={44} color="#0B74FF" />,
      name: "Graphics Design",
      count: "642 jobs",
    },
    {
      id: 4,
      icon: <Pencil size={44} color="#f5683d" />,
      name: "Content Writing",
      count: "423 jobs",
    },
  ];
  return (
    <>
      <div className="py-5 md:py-6 lg:py-8 mb-5">
        <h1 className="text-4xl text-[#0F172A] font-bold mb-4 text-center">
          Top Job Categories
        </h1>
        <p className="text-lg text-[#707C90] font-sans text-center">
          Explore opportunities across different industries
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category) => (
          <div className=" p-7 w-full bg-white hover:scale-101 transition-all duration-300 cursor-pointe rounded-2xl border border-gray-300">
            <div className="">
              <div className="flex flex-col justify-between items-center">
                <p className="bg-[#e8ecf1] p-6 rounded-full">
                  {category.icon}
                </p>
              </div>
              <div className="text-xl text-[#0F172A] font-semibold text-center  pt-5">
                <h2>{category.name}</h2>
              </div>
              <p className="text-lg font-sans text-gray-700 text-center pt-2">
                {category.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriySection;
