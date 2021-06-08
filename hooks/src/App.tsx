import React, { useState } from "react";

interface IUserData {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<IUserData>();

  async function loadData() {
    const response = await fetch("https://api.github.com/users/eliasallex");
    const data = await response.json();

    setUser(data);
  }

  return (
    <div>
      <strong>{user?.name}</strong>
    </div>
  );
};

export default App;
