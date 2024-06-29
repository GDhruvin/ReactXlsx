import React from "react";
import * as XLSX from "xlsx";
import * as XlsxPopulate from "xlsx-populate/browser/xlsx-populate";

const ExcelExportHelper = ({ data }) => {
  const createDownLoadData = () => {
    handleExport().then((url) => {
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", url);
      downloadAnchorNode.setAttribute("download", "student_report.xlsx");
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    });
  };

  const workbook2blob = (workbook) => {
    const wopts = {
      bookType: "xlsx",
      bookSST: false,
      type: "binary",
    };

    const wbout = XLSX.write(workbook, wopts);

    const blob = new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    });

    return blob;
  };

  const s2ab = (s) => {

    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    // console.log(view);
    for (let i = 0; i !== s.length; ++i) {
      // console.log(s.charCodeAt(i));
      view[i] = s.charCodeAt(i);
    }

    return buf;
  };

  const handleExport = () => {
    let table1 = [
      {
        A: "Enrolment No.",
        B: "Student Name",
        C: "Parent Name",
        D: "Class",
        E: "Subject",
        F: "Division",
      },
    ];



    data.forEach((row) => {
      const studentDetails = row.STUDENT_DETAILS;
      const marksDetails = row.MARKS;

      table1.push({
        A: studentDetails.id,
        B: studentDetails.name,
        C: studentDetails.parentName,
        D: studentDetails.classroom,
        E: studentDetails.subject,
        F: studentDetails.division,
      });

      table1.push({
        A: "",
        B: "Semester",
        C: "Mathematics",
        D: "Physics",
        E: "Chemistry",
        F: "English",
      });


      table1.push({
        A: "",
        B: "Sem1",
        C: marksDetails.maths,
        D: marksDetails.physics,
        E: marksDetails.chemistry,
        F: marksDetails.english,
      });
      table1.push({
        A: "",
        B: "Sem2",
        C: marksDetails.maths,
        D: marksDetails.physics,
        E: marksDetails.chemistry,
        F: marksDetails.english,
      });
      table1.push({
        A: "",
        B: "Sem3",
        C: marksDetails.maths,
        D: marksDetails.physics,
        E: marksDetails.chemistry,
        F: marksDetails.english,
      });
      table1.push({
        A: "",
        B: "Sem4",
        C: marksDetails.maths,
        D: marksDetails.physics,
        E: marksDetails.chemistry,
        F: marksDetails.english,
      });

    });

    const finalData = [...table1];

    const wb = XLSX.utils.book_new();

    const sheet = XLSX.utils.json_to_sheet(finalData, {
      skipHeader: true,
    });

    XLSX.utils.book_append_sheet(wb, sheet, "AdvancedExcel");

    const workbookBlob = workbook2blob(wb);
    return addStyle(workbookBlob);
  };

  const addStyle = (workbookBlob) => {
    return XlsxPopulate.fromDataAsync(workbookBlob).then((workbook) => {
      workbook.sheets().forEach((sheet) => {
        sheet.usedRange().style({
          fontFamily: "Arial",
          verticalAlignment: "center",
        });

        sheet.column("A").width(15);
        sheet.column("B").width(15);
        sheet.column("C").width(15);
        sheet.column("E").width(15);
        sheet.column("G").width(15);



        const dataInfo = {
          theadRange: "A1:F1",
          theadRange1: "",
        };


        //maintableheader//
        sheet.range(dataInfo.theadRange).style({
          fill: "FFFD04",
          bold: true,
          horizontalAlignment: "center",
        });

        // sub table heder//
        var a = 3;
        for (let index = 0; index < 12; index++) {
          sheet.range(`A${a}:F${a}`).style({
            fill: "808080",
            bold: true,
            horizontalAlignment: "center",
            fontColor: "ffffff",
          });
          a = a + 6;
        }

      });

      return workbook
        .outputAsync()
        .then((workbookBlob) => URL.createObjectURL(workbookBlob));
    });
  };

  return (
    <div className="App">
      <div className="App-logo">
        <button
          onClick={() => {
            createDownLoadData();
          }}
        >
          Export
        </button>
      </div>

    </div>

  );
};

export default ExcelExportHelper;
