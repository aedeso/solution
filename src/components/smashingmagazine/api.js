import React, { useEffect, useState } from 'react';
import List from './List';
import WithListLoading from './withListLoading';
export function Api() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
        console.log(repos)
      });
  }, []);
  return <ListLoading isLoading={appState.loading} repos={appState.repos} />
}


