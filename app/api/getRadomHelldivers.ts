import axios from "axios";

export const useRadomHelldivers = () => {
  const apiURL = "https://delicate-margit-albergaria-df857990.koyeb.app"
  const getHelldivers = async (
    helldivers: any,
    stratagem: any,
    equipaments: any,
    booster: any
  ) => {
    const res = async () => {
      try {
        const api = `${apiURL}/random_helldiver/${helldivers}_${stratagem}_${equipaments}_${booster}`;
        const res = await axios.get(api);
        return res;
      } catch {
        return true;
      }
    };

    const value = await res();

    if (value === true) {
      return value;
    }

    if (value.data.erro) {
      return value.data.erro;
    }

    return {
      helldivers: value.data,
      ok: true
    };
  };

  return { getHelldivers };
};
