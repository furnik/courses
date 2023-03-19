export type Meta = {
  courseVideoPreview: {
    duration: number;
    link: string;
    previewImageLink: string;
  };
  skills: Array<string>;
  slug: string;
};

export type Lesson = {
  duration: number
  id: string;
  meta: null;
  link: string;
  order: number;
  previewImageLink: string;
  status: string;
  title: string;
  type: string;
};

export type CourseType = {
  containsLockedLessons: boolean;
  description: string;
  duration: number;
  id: string;
  launchDate: Date;
  lessonsCount: number;
  meta: Meta;
  previewImageLink: string;
  rating: number;
  status: string;
  tags: Array<string>;
  title: string;
}

export type CurrentCourseType = {
  containsLockedLessons: boolean;
  description: string;
  duration: number;
  id: string;
  launchDate: Date;
  lessons: Array<Lesson>;
  meta: Meta;
  previewImageLink: string;
  rating: number;
  status: string;
  tags: Array<string>;
  title: string;
}

export enum StatusType {
  LOCKED = 'locked',
  UNLOCKED = 'unlocked',
}
