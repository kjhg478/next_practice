import { useQuery } from "react-query";

const useLectures = (categories: string) => {
  return useQuery("lecture_list", () => {
    return fetch(`/api/lectures?categories=${categories}`).then((res) =>
      res.json()
    );
  });
};

export default useLectures;
