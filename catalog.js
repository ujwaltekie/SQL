/* ============================================================
   CATALOG: the ONLY file you edit when adding lectures/assignments.

   Naming convention (files are found automatically):
     lecture      ->  lectures/<id>.html
     assignment N ->  assignments/<id>/assignment-N.html

   To add a lecture: copy one block below, change the fields.
   To add an assignment: add one more title to "assignments".
   To announce a lecture early: set soon:true (shows "Coming soon").
   ============================================================ */
const CATALOG = {
  course: "SQL",
  lectures: [
    {
      id: "lecture-01",
      title: "Databases & Keys",
      blurb: "Why databases beat files, the relational model, and the keys that make every row identifiable.",
      assignments: [
        "Keys and identification",
        "Foreign keys and integrity",
        "Mixed practice"
      ]
    },
      {
      id: "lecture-02",
      title: "Create, Read, Update, Delete",
      blurb: "Four operations run almost every app you have ever used.",
      assignments: [
        "Build & Fill the Table",
        "Foreign keys and integrity",
        "Mixed practice"
      ]
    },
      {
      id: "lecture-03",
      title: "Clean up, search, sort and combine",
      blurb: "Three ways to remove data, pattern-matching with LIKE, counting, ordering, paging, and finally joining two tables into one answer.",
      assignments: [
        "Keys and identification",
        "Foreign keys and integrity",
        "Mixed practice"
      ]
    },
      {
      id: "lecture-04",
      title: "Aggregate Functions, Sorting",
      blurb: "Five small functions that turn a pile of rows into one meaningful number, and the sorting tricks that turn any table into a leaderboard.",
      assignments: [
        "Keys and identification",
        "Foreign keys and integrity",
        "Mixed practice"
      ]
    },
      {
      id: "lecture-05",
      title: "GROUP BY and HAVING",
      blurb: "Aggregate functions gave us one number for the whole table. GROUP BY gives us one number per group. HAVING then decides which groups make the cut.",
      assignments: [
        "Keys and identification",
        "Foreign keys and integrity",
        "Mixed practice"
      ]
    },
      {
      id: "lecture-06",
      title: "Inner, Left, Right and Full Joins",
      blurb: "our ways to combine two tables, and exactly which rows survive each one.",
      assignments: [
        "Keys and identification",
        "Foreign keys and integrity",
        "Mixed practice"
      ]
    },
    {
      id: "lecture-07",
      title: "Next lecture (rename me)",
      blurb: "Short description goes here.",
      soon: true,
      assignments: []
    }
  ]
};
