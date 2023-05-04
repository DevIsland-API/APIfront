import { APIBackend } from "../../services/api";

import { useQuery, UseQueryResult } from "react-query";

const getGroups = async () => {
  const { data } = await APIBackend.get("/groups");
  const formatedGroups = data.map((group) => ({
    label: group.nome,
    value: group.id,
  }));
  return formatedGroups;
};

export const useGroups = (): UseQueryResult => {
  return useQuery("group", getGroups);
};
