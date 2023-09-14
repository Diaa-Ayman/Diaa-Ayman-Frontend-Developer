import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../store/modal-slice";

export default function Capsule({ serial, details, type, status, missions }) {
  const dispatch = useDispatch();
  const openDetailsModal = () => {
    dispatch(showModal(serial));
  };
  return (
    <div
      className="flex flex-col bg-slate-950 rounded-md shadow-md shadow-slate-600 px-4 py-2 relative border border-gray-100 min-h-[300px] hover:bg-opacity-95 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
      onClick={openDetailsModal}
    >
      <img
        alt="imag"
        src={
          "https://spacecenter.org/wp-content/uploads/2020/01/KSC-20200117-PH-SPX01_0001_medium-e1678724652148.jpg"
        }
        className="  h-[80px] w-[80px] rounded-full object-cover absolute transform left-[50%] -translate-x-[50%] -top-[40px]"
      />

      <div className="flex flex-col space-y-2 mt-12 text-white">
        <span className="text-xl font-bold">{serial}</span>
        <span className="text-md font-bold text-red-600">{type}</span>

        {details ? (
          <span className="text-sm font-semibold text-slate-400">
            {details}
          </span>
        ) : null}
        <span className="text-sm font-semibold text-green-500 uppercase">
          {status}
        </span>
        <p className="text-sm font-semibold text-slate-300">
          Missions:{" "}
          <span className="font-bold text-base text-white">{missions}</span>{" "}
        </p>
      </div>
    </div>
  );
}
