import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../store/modal-slice";
import { convertUTCtoLocal } from "../utils/convertDate";

export default function Modal() {
  const serial = useSelector((state) => state.modal.capSerial);
  const allCapsules = useSelector((state) => state.capsules.allCapsules);

  const curCap = allCapsules.find((cap) => cap.capsule_serial === serial);
  const dispatch = useDispatch();

  const hideModalHandler = () => {
    dispatch(hideModal());
  };

  const missions = curCap?.missions.map((mission) => mission.name);

  const detailsTable = [
    {
      title: "Capsule Serial",
      value: curCap.capsule_serial,
    },
    {
      title: "Type",
      value: curCap.type,
    },
    {
      title: "Details",
      value: curCap.details,
    },
    {
      title: "Landings",
      value: curCap.landings,
    },
    {
      title: "Missions",
      value: missions.join(", "),
    },
    {
      title: "Original Launch",
      value: convertUTCtoLocal(curCap?.original_launch),
    },
  ];
  return (
    <div>
      <div
        id="defaultModal"
        // tabindex="-1"
        aria-hidden="true"
        className=" flex items-center justify-center fixed  z-50  w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-100 bg-opacity-50"
      >
        <div className="relative w-full max-w-2xl max-h-full bg-gray-300">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                Capsule C01 Details
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    {detailsTable.map((detail, index) => (
                      <tr
                        key={detail.title}
                        className="bg-white  dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th scope="row" className="px-6 py-4 font-medium">
                          {detail.title}
                        </th>
                        <td className="px-6 py-4 text-[1rem] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {detail.value ? detail.value : "None"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={hideModalHandler}
                data-modal-hide="defaultModal"
                type="button"
                className="button px-8 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
