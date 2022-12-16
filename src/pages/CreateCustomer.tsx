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
    <div className="">
      <form className="mt-10 ml-10" onSubmit={handleSubmit}>
        <label className="mr-5" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      <form className="mt-10 ml-10">
        <label className="mr-5" htmlFor="Kennzeichen">
          Kennzeichen:
        </label>
        <input
          type="text"
          id="kennzeichen"
          value={kennzeichen}
          onChange={(event) => setKennzeichen(event.target.value)}
        />
      </form>
      <form className="mt-10 ml-10">
        <label className="mr-5" htmlFor="email">
          E-Mail:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </form>
      <form className="flex absoulte -mt-10 ml-[400px]">
        <label className="mr-5">Status</label>
        <select onChange={(event) => setStatus(event.target.value)}>
          <option selected value="Eingeliefert">
            Eingeliefert
          </option>
          <option value="Gecheckt">Gecheckt</option>
          <option value="Teile bestellt">Teile bestellt</option>
          <option value="Teile verbaut">Teile verbaut</option>
          <option value="Fertig zur Abholung">Fertig zur Abholung</option>
        </select>
      </form>
      <button
        onClick={handleSubmit}
        className="ml-9 mt-10 bg-black"
        type="submit"
      >
        Senden
      </button>
    </div>
  );
}
