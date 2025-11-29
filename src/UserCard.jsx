import { UserInfo } from "./UserInfo";

export const UserCard = (...rest) => {
  return (
    <>
      <h2> User Details</h2>
      <UserInfo {...rest} />
    </>
  );
};
