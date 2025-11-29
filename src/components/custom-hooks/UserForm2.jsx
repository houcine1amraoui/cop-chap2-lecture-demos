import useInput from "../../hooks/useInput";

function UserForm2() {
  const [firstName, firstNameBind, firstNameReset] = useInput("");
  const [lastName, lastNameBind, lastNameReset] = useInput("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Salam ${firstName} ${lastName}`);
    firstNameReset();
    lastNameReset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" {...firstNameBind} />
        <input type="text" {...lastNameBind} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm2;
