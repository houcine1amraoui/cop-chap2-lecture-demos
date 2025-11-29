import { useState } from "react";

function UserForm1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Salam ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm1;
