import { data, domains } from "../constants";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 ">
      <p className="p-4 ">{data}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl  p-4">
        <h2 className=" sm:col-span-2 text-lg font-semibold" >What I do?</h2>
        {domains.map((item) => (
          <div className="flex gap-2 p-3 rounded-lg items-center shadow-xl border hover:border-slate-700 hover:animate-bounce    bg-slate-100" key={item.title}>
            {<item.icon className="text-green-700 text-3xl " />}
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
