import React from "react";
import {useCourses} from "../../hooks/course";
import {Courses} from "../../components/Courses";
import {Loader} from "../../components/Loader";

export const CoursesContainer: React.FC = () => {
  const {courses, pagesCount, loading, changePageHandler} = useCourses();
  if (!courses || loading) return (
    <Loader />
  );
  return <Courses courses={courses} pagesCount={pagesCount} changePageHandler={changePageHandler} />
}
