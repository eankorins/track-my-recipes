import { trpc } from "../../utils/trpc";
const User = () => {
  const { data: messages, isLoading } = trpc.useQuery(["user.all"]);
  if (isLoading) return <div>Fetching Users</div>;
  return (
    <div className="flex flex-col gap-4">
      {messages?.map((msg, index) => {
        return (
          <div className="flex gap-4" key={index}>
            <p>{msg.name}:</p>
            <span>{msg.email}</span>
          </div>
        );
      })}
    </div>
  );
};

export default User;
