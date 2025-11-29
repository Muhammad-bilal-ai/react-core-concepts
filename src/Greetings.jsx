export const Greetings = ({ message = "Hello", names = "Guest" }) => {
  return (
    <>
      <h3>
        {message}, {names}
      </h3>
    </>
  );
};
