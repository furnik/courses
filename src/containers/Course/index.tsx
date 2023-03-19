import React from "react";
import {useCourse} from "../../hooks/course";
import {Course} from "../../components/Course";
import {Loader} from "../../components/Loader";

export const CourseContainer: React.FC = () => {
  const {course, lesson, loading, duration, goBackHandler, changeLessonHandler} = useCourse();
  if (!course?.id || !lesson?.id || loading) return (
    <Loader />
  );
  return <Course course={course} lesson={lesson} duration={duration} goBackHandler={goBackHandler} changeLessonHandler={changeLessonHandler} />;
}
