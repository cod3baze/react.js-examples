import React, { useState, useEffect, useMemo, useCallback } from "react";

interface IUserData {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<IUserData[]>([]);

  async function loadData() {
    const response = await fetch("https://api.github.com/users/eliasallex");
    const data = (await response.json()) as IUserData[];

    setUsers(data);
  }

  const names = useMemo(
    () => users?.map((user) => user.name).join(", "),
    [users]
  );

  const greeting = useCallback((name: string) => alert(`Hello ${name}`), []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <strong>{users?.map((user) => user.name)}</strong>
    </div>
  );
};

export default App;
