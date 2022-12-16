import { useEffect, useState } from "react";

export function EditCustomer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/createCustomer")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-gray-200 text-xs font-semibold text-gray-700 uppercase tracking-wide">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Kennzeichen</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">ID</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => (
          <tr key={item.id} className="text-xs text-gray-700">
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.kennzeichen}</td>
            <td className="border px-4 py-2">{item.status}</td>
            <td className="border px-4 py-2">{item.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
