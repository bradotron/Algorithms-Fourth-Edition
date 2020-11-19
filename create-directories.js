const fs = require("fs");
const book = require("./book-outline.json");

book.Chapters.forEach(chapter => {
  let ChapterDir = "./" + chapter.Title;
  fs.mkdirSync(ChapterDir);
  chapter.Lessons.forEach(lesson => {
    let LessonDir = ChapterDir + "/" + lesson.Title;
    fs.mkdirSync(LessonDir);
  })
})