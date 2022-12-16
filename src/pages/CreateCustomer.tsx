import { useState } from "react";

export function CreateCustomer() {
  const [name, setName] = useState("");
  const [kennzeichen, setKennzeichen] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Eingeliefert");
  const [toggle, setToggle] = useState(0);

  ///TODO: Update function for updating the car status

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Click");

    fetch("http://localhost:3002/customermail", {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, kennzeichen, email, status }),
    });

    fetch("http://localhost:3002/createCustomer", {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, kennzeichen, email, status }),
    });
  };
  return (
    <div className="mt-10 ml-10">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-2 font-semibold" htmlFor="name">
          Name:
        </label>
        <input
          className="border rounded-lg p-2"
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="mb-2 font-semibold" htmlFor="Kennzeichen">
          Kennzeichen:
        </label>
        <input
          className="border rounded-lg p-2"
          type="text"
          id="kennzeichen"
          value={kennzeichen}
          onChange={(event) => setKennzeichen(event.target.value)}
        />
        <label className="mb-2 font-semibold" htmlFor="email">
          E-Mail:
        </label>
        <input
          className="border rounded-lg p-2"
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="mb-2 font-semibold">Status</label>
        <select
          className="border rounded-lg p-2"
          onChange={(event) => setStatus(event.target.value)}
        >
          <option selected value="Eingeliefert">
            Eingeliefert
          </option>
          <option value="Gecheckt">Gecheckt</option>
          <option value="Teile bestellt">Teile bestellt</option>
          <option value="Teile verbaut">Teile verbaut</option>
          <option value="Fertig zur Abholung">Fertig zur Abholung</option>
        </select>
        <button
          className="mt-4 bg-black text-white rounded-lg p-2"
          type="submit"
        >
          Senden
        </button>
      </form>
    </div>
  );
}
