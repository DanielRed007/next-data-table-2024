import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Add autoTable to jsPDF
(jsPDF as any).autoTable = autoTable;

export const generatePDF = (data: any[]) => {
  const doc = new jsPDF();

  doc.text("My PDF Title", 20, 20);

  // Convert JSON array to table using autoTable
  (doc as any).autoTable({
    head: [["ID", "Name", "Age"]],
    body: data.map((item) => [item._id, item.firstName, item.age]),
  });

  doc.save("output.pdf");
};
