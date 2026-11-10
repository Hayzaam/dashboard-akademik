import React from "react";

const Sidebar = () => (
  <aside className="p-3">
    <div className="text-center mb-4 mt-2 border-bottom pb-3">
      <h5 className="text-white fw-bold mb-0">Portal Akademik</h5>
    </div>
    <ul className="list-unstyled">
      <li className="mb-2">
        <a href="#" className="nav-link-custom fw-semibold">
          📊 Dashboard
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="nav-link-custom">
          🎓 Data Mahasiswa
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="nav-link-custom">
          📝 Transkrip Nilai
        </a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
