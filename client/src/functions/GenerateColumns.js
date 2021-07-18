export default function GenerateColumns() {
  const listColumnsNames = [
    "Title",
    "Chronology",
    "Cover_url",
    "Overview",
    "Release_date",
    "Duration",
  ];

  const generateColumns = (listColumnsNames) => {
    const columns = [];
    listColumnsNames.forEach((elem) => {
      if (elem === "Title" || elem === "Chronology") {
        columns.push({
          name: elem.toLowerCase(),
          label: elem,
          options: {
            filter: true,
            sort: true,
          },
        });
      } else {
        columns.push({
          name: elem.toLowerCase(),
          label: elem,
          options: {
            filter: false,
            sort: true,
            display: "excluded",
          },
        });
      }
    });

    return columns;
  };

  const columns = generateColumns(listColumnsNames);

  return {
    columns,
  };
}
