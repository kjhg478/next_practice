import React from "react";
import LectureItem from "./LectureItem";
import { useQuery } from "react-query";
import useLectures from "hooks/useLectures";
import { Lecture } from "interface/lecture";

const LectureList = (): JSX.Element => {
  const { isLoading, data } = useLectures("DataScience");

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(data);
  const lectureItems = data.lectureList.map((lecture: Lecture) => {
    return <LectureItem key={lecture.id} lecture={lecture} />;
  });

  return <div>{lectureItems}</div>;
};

export default LectureList;
