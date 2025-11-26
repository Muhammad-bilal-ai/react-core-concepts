export const RuleThree = () => {
  return (
    <>
      <h2>Rule Number Three</h2>
      <p>
        Attribute names must be written in camelCase, and do not use javascript
        or html reserved words as Attribute names like for, class, component,
        etc.
      </p>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" className="form-input" />
      <label htmlFor="email"> Email: </label>
      <input type="email" id="email" className="form-input" tabIndex="1" />
    </>
  );
};
