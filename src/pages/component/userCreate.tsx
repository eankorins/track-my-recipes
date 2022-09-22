import { useState } from "react";
import { trpc } from "../../utils/trpc";

const UserCreate = () => {
  const createUser = trpc.useMutation("user.create");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      className="flex gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        createUser.mutate({
          name: name,
          email: name,
        });
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default UserCreate;
