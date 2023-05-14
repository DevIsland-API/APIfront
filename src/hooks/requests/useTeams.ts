import { APIBackend } from "../../services/api";

import { useQuery, UseQueryResult } from "react-query";

const getTeams = async () => {
  const { data } = await APIBackend.get("/team");
  const formatedTeams = data.map((team) => ({
    label: team.nome,
    value: team.id,
  }));
  return formatedTeams;
};

export const useTeams = (): UseQueryResult => {
  return useQuery("team", getTeams);
};
