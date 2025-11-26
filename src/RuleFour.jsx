export const RuleFour = () => {
  const name = "Muhammad Bilal";
  const role = "Software Engineer";
  const yearsOfExperience = 5;
  const isAvailable = true;
  return (
    <>
      <h2>Rule Number Four</h2>
      <p>
        You can embed JavaScript expressions directly in your markup using curly
        braces
      </p>
      <h3>{name}</h3>
      <p>
        {role} with {yearsOfExperience} years of experience
      </p>
      <p>Started in {2025 - yearsOfExperience}</p>
      <p>Status: {isAvailable ? "Available for hire" : "Not available"}</p>
      <p>Contact: {name.toLocaleLowerCase().replace(" ", ".")}@gmail.com</p>
    </>
  );
};
