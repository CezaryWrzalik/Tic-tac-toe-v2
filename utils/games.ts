import { json } from "stream/consumers";

export const fetchGames = async () => {
  const response = await fetch(`http://localhost:3000/api/games/list`);

  const data = await response.json();

  return data;
};

export const fetchGameById = async (gid: string) => {
  const response = await fetch(`http://localhost:3000/api/games/${gid}`);

  const data = await response.json();

  return data;
};

export const postGame = async (username: string) => {
  const response = await fetch(`/api/games/list`, {
    method: "POST",
    body: JSON.stringify({
        username
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const data = await response.json();

  if (data) {
    return data;
  } else {
    return { message: "Something went wrong" };
  }
};

export const getIntoTheGame = async (gid: string, username?: string) => {
  const response = await fetch(`/api/games/list`, {
    method: "PUT",
    body: JSON.stringify({
        username,
        gid,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const data = await response.json()
  
  return data;
}
