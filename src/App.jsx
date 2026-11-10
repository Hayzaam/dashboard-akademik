import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import FormModal from "./components/FormModal";
import "./index.css";

const App = () => {
  // Array of Objects untuk data mahasiswa
  const [students, setStudents] = useState([
    {
      id: 1,
      nim: "2511501001",
      nama: "Abdullah Habib",
      prodi: "Informatika",
      ipk: "3.85",
      status: "Aktif",
    },
    {
      id: 2,
      nim: "2511501002",
      nama: "Sulemana Abdul-Majeed",
      prodi: "Sistem Informasi",
      ipk: "3.70",
      status: "Cuti",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Manipulasi DOM via jQuery di luar Virtual DOM React
  useEffect(() => {
    $("#btnToggleSidebar").on("click", function () {
      $(".sidebar-wrapper").fadeToggle(300);
    });
    return () => $("#btnToggleSidebar").off("click");
  }, []);

  const handleSave = (data) => {
    if (data.id) {
      setStudents(students.map((s) => (s.id === data.id ? data : s)));
    } else {
      setStudents([...students, { ...data, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus data mahasiswa ini?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  // Filter pencarian data
  const filteredStudents = students.filter(
    (student) =>
      student.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.nim.includes(searchTerm),
  );

  return (
    <div className="container-fluid p-0 page-transition">
      <div className="row g-0">
        <div className="col-md-2 sidebar-wrapper d-md-block shadow-lg">
          <Sidebar />
        </div>

        <div className="col-md-10">
          <Navbar />
          <main className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
              <h3 className="mb-0 fw-bold">Data Akademik Mahasiswa</h3>
              <div className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari NIM / Nama..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="btn btn-primary text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#studentModal"
                  onClick={() => setSelectedStudent(null)}
                >
                  + Tambah Data
                </button>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-3">
              <div className="card-body p-0 table-responsive">
                <Table
                  data={filteredStudents}
                  onEdit={setSelectedStudent}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </main>
        </div>
      </div>

      <FormModal studentData={selectedStudent} onSave={handleSave} />
    </div>
  );
};

export default App;
