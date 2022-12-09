import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [kennzeichen, setKennzeichen] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    console.log("Click");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    //TODO: Create Backend

    fetch("https://eo72zb9tcvioghl.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, kennzeichen, email }),
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
      <button
        onClick={handleSubmit}
        className="ml-9 mt-4 bg-black"
        type="submit"
      >
        Senden
      </button>
    </div>
  );
};

export default Form;
