import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../store/modal-slice";

export default function Modal() {
  const serial = useSelector((state) => state.modal.capSerial);
  const allCapsules = useSelector((state) => state.capsules.allCapsules);

  console.log(allCapsules);
  const curCap = allCapsules.find((cap) => cap.capsule_serial === serial);
  const dispatch = useDispatch();

  const hideModalHandler = () => {
    dispatch(hideModal());
  };

  console.log(curCap);
  return (
    <div>
      <div
        id="defaultModal"
        // tabindex="-1"
        aria-hidden="true"
        className=" flex items-center justify-center fixed  z-50  w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full"
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
                    {[...Array(5)].map((cap, index) => (
                      <tr
                        key={index}
                        className="bg-white  dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">Silver</td>
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
