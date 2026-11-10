import React, { useState, useEffect } from "react";

const FormModal = ({ studentData, onSave }) => {
  const initialState = {
    nim: "",
    nama: "",
    prodi: "",
    ipk: "",
    status: "Aktif",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    setFormData(studentData || initialState);
  }, [studentData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    const modalElement = document.getElementById("studentModal");
    const modalInstance =
      bootstrap.Modal.getInstance(modalElement) ||
      new bootstrap.Modal(modalElement);
    modalInstance.hide();
  };

  return (
    <div className="modal fade" id="studentModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <form className="modal-content border-0 shadow" onSubmit={handleSubmit}>
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              {studentData ? "Edit Data Mahasiswa" : "Tambah Mahasiswa Baru"}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body p-4">
            <div className="mb-3">
              <label className="form-label fw-semibold">NIM</label>
              <input
                type="number"
                className="form-control"
                name="nim"
                value={formData.nim}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Lengkap</label>
              <input
                type="text"
                className="form-control"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Program Studi</label>
              <select
                className="form-select"
                name="prodi"
                value={formData.prodi}
                onChange={handleChange}
                required
              >
                <option value="">Pilih Program Studi...</option>
                <option value="Informatika">Informatika</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Teknologi Informasi">Teknologi Informasi</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">IPK Terakhir</label>
                <input
                  type="number"
                  step="0.01"
                  max="4.00"
                  className="form-control"
                  name="ipk"
                  value={formData.ipk}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  Status Akademik
                </label>
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Cuti">Cuti</option>
                  <option value="Lulus">Lulus</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Batal
            </button>
            <button type="submit" className="btn btn-primary px-4">
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
