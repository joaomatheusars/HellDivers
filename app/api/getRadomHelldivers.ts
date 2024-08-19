import axios from "axios";

export const useRadomHelldivers = () => {
  const getHelldivers = async (
    helldivers: any,
    stratagem: any,
    equipaments: any,
    booster: any
  ) => {
    const res = async () => {
      try {
        const api = `http://localhost:8000/random_helldiver/${helldivers}_${stratagem}_${equipaments}_${booster}`;
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
    };
  };

  return { getHelldivers };
};
