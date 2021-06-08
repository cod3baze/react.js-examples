import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

interface IUserData {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
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

  const focusOnInput = () => inputRef.current?.focus();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <form action="">
      <input ref={inputRef} type="email" name="email" id="email" />
    </form>
  );
};

export default App;
