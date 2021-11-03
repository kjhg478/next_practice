/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import LectureItem from "../components/lecture/LectureItem";

describe("강의 아이템은", () => {
  it("썸네일을 가지고 있어야 한다.", () => {
    const { getByAltText } = render(<LectureItem />);

    const Thumb = getByAltText("초격차 패키지");

    expect(Thumb).toBeInTheDocument();
  });

  it("뱃지를 가지고 있어야 한다.", () => {
    const { getByText } = render(<LectureItem />);

    const Badge = getByText("평생소장");

    expect(Badge).toBeInTheDocument();
  });

  it("강의 제목을 렌더링 할 수 있어야 한다.", () => {
    const { getByRole } = render(<LectureItem />);

    const Title = getByRole("heading", {
      name: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
    });

    expect(Title).toBeInTheDocument();
  });

  it("강의 설명을 렌더링 해야 한다.", () => {
    const { getByText } = render(<LectureItem />);
    // 순수하게 getByText로 가져오게 되면 중간에 text가 잘리고 있기 때문에 기대한대로 동작 X -> 정규표현식으로 가져옴
    const Desc = getByText(
      "개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요"
    );

    expect(Desc).toBeInTheDocument();
  });
});
