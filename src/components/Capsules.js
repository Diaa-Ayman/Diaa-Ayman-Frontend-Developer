import { useSelector } from "react-redux";
import Capsule from "./Capsule";
import FilterForm from "./FilterForm";
import Pagination from "./Pagination";

export default function Capsules() {
  const capsules = useSelector((state) => state.capsules.filteredCapsules);
  const paginatedCapsules = useSelector((state) => state.capsules.paginator);

  return (
    <div className="my-8 px-[3rem] md:px-[5rem]" id="capsules">
      <div className="flex items-center justify-center my-20">
        <h3 className="text-4xl md:text-6xl text-slate-950 font-semibold font-script">
          Capsules!
        </h3>
      </div>
      <div className="py-6 px-4 border border-gray-100 rounded-xl">
        <FilterForm />
      </div>
      {capsules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-20 my-16">
          {paginatedCapsules.map((capsule) => (
            <Capsule
              key={capsule.capsule_serial}
              // image={rocket.flickr_images[0]}
              serial={capsule.capsule_serial}
              details={capsule.details}
              type={capsule.type}
              status={capsule.status}
              missions={capsule.missions.length}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-6">
          <span className="text-xl text-red-600 font-semibold">
            No Capsules Found!
          </span>
        </div>
      )}
      {capsules.length > 0 ? (
        <div className="flex items-center justify-center">
          <Pagination paginateData={capsules} itemsPerPage={6} />
        </div>
      ) : null}{" "}
    </div>
  );
}
