import React from "react";

const Table = ({ data, onEdit, onDelete }) => (
  <table className="table table-hover align-middle mb-0">
    <thead className="table-light">
      <tr>
        <th className="px-4">NIM</th>
        <th>Nama Mahasiswa</th>
        <th>Program Studi</th>
        <th>IPK</th>
        <th>Status</th>
        <th className="text-center">Aksi</th>
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? (
        data.map((item) => (
          <tr key={item.id}>
            <td className="px-4 fw-semibold">{item.nim}</td>
            <td>{item.nama}</td>
            <td>{item.prodi}</td>
            <td className="fw-bold text-primary">{item.ipk}</td>
            <td>
              <span
                className={`badge ${item.status === "Aktif" ? "bg-success" : item.status === "Cuti" ? "bg-warning text-dark" : "bg-primary"}`}
              >
                {item.status}
              </span>
            </td>
            <td className="text-center">
              <button
                className="btn btn-sm btn-outline-primary me-2"
                data-bs-toggle="modal"
                data-bs-target="#studentModal"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => onDelete(item.id)}
              >
                Hapus
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6" className="text-center py-4 text-muted">
            Data mahasiswa tidak ditemukan.
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Table;
