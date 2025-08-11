import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Myprofile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-155   py-12 px-4 flex justify-center">
      <div className=" max-w-4xl w-full">
        <div className="bg-[#faf6e8] border p-6 text-center py-20 ">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-32 h-32 rounded-full mx-auto object-cover border-green-400 border"
          />
          <h2 className="text-2xl font-semibold mt-4">{user?.displayName}</h2>
          <p className="text-gray-600">{user?.email}</p>
          <table className="table-auto w-full text-center space-x-20">
            <tbody className="">
              <tr className="border-b ">
                <th className="py-2 w-32">Name</th>

                <td className="py-2 md:pl-60">{user?.displayName}</td>
              </tr>

              <tr className="border-b">
                <th className="py-2">Email</th>

                <td className="py-2 md:pl-60">{user?.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
