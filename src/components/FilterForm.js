import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredCapsules, getPaginator } from "../store/capsules-slice";

export default function FilterForm() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");
  const [landings, setLandings] = useState("");
  const [type, setType] = useState("");
  const allCapsules = useSelector((state) => state.capsules.allCapsules);

  const filterCapsluesHandler = () => {
    const capsulesToFilter = allCapsules?.filter(
      (capsule) =>
        (status
          ? capsule.status?.toLowerCase().includes(status.toLowerCase())
          : true) &&
        (landings ? capsule.landings === +landings : true) &&
        (type ? capsule.type?.toLowerCase().includes(type.toLowerCase()) : true)
    );

    dispatch(getFilteredCapsules(capsulesToFilter));
    if (capsulesToFilter.length === 0) dispatch(getPaginator([]));
  };

  return (
    <div className="grid md:grid-cols-5 gap-3">
      <input
        type="text"
        id="status"
        className="input-style"
        placeholder="status"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      />
      <input
        type="number"
        id="landings"
        className="input-style"
        placeholder="landings"
        onChange={(e) => setLandings(e.target.value)}
        value={landings}
      />
      <input
        type="text"
        id="type"
        className="input-style"
        placeholder="type"
        onChange={(e) => setType(e.target.value)}
        value={type}
      />
      <span></span>
      <button onClick={filterCapsluesHandler} className="button ">
        Search
      </button>
    </div>
  );
}
