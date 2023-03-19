import {useRecoilValue} from "recoil";
import React, {useEffect, useState} from "react";
import {tokenState} from "../store/auth";
import {API} from "../constants/links";
import {useNavigate, useParams} from "react-router-dom";
import {CourseType, CurrentCourseType, Lesson} from "../types/courses";
import {getVideoProgress, setToStorage} from "../helpers/localStorage";

export const useCourses = () => {
  const LIMIT = 10;
  const token = useRecoilValue(tokenState);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Array<CourseType> | null>(null);

  const changePageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  }

  const getCourses = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const response = await fetch(`${API}/core/preview-courses`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin" : "*",
          'Authorization': `Bearer ${token}`,
        }
      });
      const {courses} = await response.json();
      if (courses) {
        setCourses(courses);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }
  useEffect(() => {
    getCourses();
  }, [token]);
  return {
    courses: courses ? courses.slice((page - 1) * LIMIT, page * LIMIT): null,
    pagesCount: courses ? Math.round(courses.length / LIMIT) : 0,
    loading,
    changePageHandler,
  }
}

export const useCourse = () => {
  const token = useRecoilValue(tokenState);
  const {id} = useParams();
  const navigate = useNavigate()
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [course, setCourse] = useState<CurrentCourseType | null>(null);
  const [loading, setLoading] = useState(false);

  const duration = lesson ? getVideoProgress(lesson.id) : 0;
  const changeLessonHandler = (lesson: Lesson) => () => {
    return setLesson(lesson);
  }

  const goBackHandler = () => {
    return navigate(-1);
  }

  const getCourse = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const response = await fetch(`${API}/core/preview-courses/${id}`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin" : "*",
          'Authorization': `Bearer ${token}`,
        }
      });
      const course: CurrentCourseType = await response.json();
      if (course) {
        setCourse(course);
        setLesson(course.lessons[0]);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }
  useEffect(() => {
    getCourse();
  }, [token]);
  return {
    course,
    lesson,
    loading,
    duration,
    goBackHandler,
    changeLessonHandler,
  }
}

