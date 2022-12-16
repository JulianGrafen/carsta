import { useEffect, useState } from "react";

interface DataItem {
  name: string;
  kennzeichen: string;
  email: string;
  status: string;
  id: number;
}

export function EditCustomer(item: any) {
  const [data, setData] = useState([]);

  useEffect(() => {
    //Gets the customer data to display it in the table
    fetch("http://localhost:3002/createCustomer")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleSubmit = (event: any, updatedData: DataItem[]) => {
    event.preventDefault();
    console.log("Click");

    // Update the data in the database
    fetch("http://localhost:3002/createCustomer", {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    // Send the updated data to the API
    updatedData.forEach((item: DataItem) => {
      const { name, kennzeichen, email, status } = item;
      fetch("http://localhost:3002/customermail", {
        method: "POST",
        mode: "cors",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, kennzeichen, email, status }),
      });
    });
  };

  const handleStatusChange = (item: DataItem, value: string) => {
    item.status = value;
    setData([...data]);
  };
  return (
    <div>
      <table className="ml-10 table-auto w-full">
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
            <tr key={item.id} className="text-xs text-white">
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.kennzeichen}</td>
              <td className="border px-4 py-2">
                <select
                  value={item.status}
                  onChange={(event) =>
                    handleStatusChange(item, event.target.value)
                  }
                >
                  <option value="Eingeliefert">Eingeliefert</option>
                  <option value="Gecheckt">Gecheckt</option>
                  <option value="Teile bestellt">Teile bestellt</option>
                  <option value="Teile verbaut">Teile verbaut</option>
                  <option value="Fertig zur Abholung">
                    Fertig zur Abholung
                  </option>
                </select>
              </td>
              <td className="border px-4 py-2">{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="ml-10 mt-4 bg-black text-white rounded-lg p-2"
        type="submit"
        onClick={(event) => handleSubmit(event, data)}
      >
        Speichern
      </button>
    </div>
  );
}
