import { APIBackend } from "../../services/api";

import { useQuery, UseQueryResult } from "react-query";

const getUsers = async () => {
  const { data } = await APIBackend.get("/user");
  const formatedUsers = data.map((user) => ({
    label: user.nome,
    value: user.id,
  }));
  return formatedUsers;
};

export const useUsers = (): UseQueryResult => {
  return useQuery("user", getUsers);
};
