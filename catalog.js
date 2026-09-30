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
      title: "Next lecture (rename me)",
      blurb: "Short description goes here.",
      soon: true,
      assignments: []
    }
  ]
};
