import "./App.css";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { ReactCore, ReactCoreWithoutJsx } from "./ReactCore";
import { RuleOne } from "./RuleOne";
import { RuleTwo } from "./RuleTwo";
import { RuleThree } from "./RuleThree";
import { RuleFour } from "./RuleFour";
import { Product } from "./Product";
import { Greetings } from "./Greetings";
import { UserCard } from "./UserCard";
import { UserInfo } from "./UserInfo";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
//creating components to render in parent node (App)
//components are functions for displaying the ui using html(jsx)

function App() {
  return (
    <div>
      <UserDetails
        name="Waqar"
        isOnline={true}
        isPremium={true}
        isNew={true}
        role="admin"
      />
      <UserDetails
        name="Fareed"
        isOnline={true}
        hideOffline={false}
        role="moderator"
      />
      <CardWrapper title="User Profile">
        <p>Bruce lee</p>
        <p>brucelee@bl.com</p>
        <p>555-443-543</p>
      </CardWrapper>
      <UserCard name="Fareed" age={18} city="Lahore" email="fareed@gmail.com" />
      <Product
        title="Lenovo Laptop"
        price={120}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <UserInfo name="Amir" age={24} city="Lahore" email="amir@gmail.com" />
      <Greetings message={"Good Morning"} names={"Fareed"} />
      <Greetings names={"Waqar"} />
      <Greetings message={"Have a Nice Day"} />
      <ReactCore />
      <Welcome name="Bilal" alias=" Fast Learner" />
      <Welcome name="Fareed" alias=" True Leader" />
      <Welcome name="Waqar" alias=" Smart Learner" />
      <RuleOne />
      <RuleTwo />
      <RuleThree />
      <RuleFour />
      <Button text="Click here" />
    </div>
  );
}

export default App;
