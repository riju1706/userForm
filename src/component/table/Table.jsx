import React from "react";
import { useSelector } from "react-redux";
import "./table.css";

export default function Table() {
  const users = useSelector((i) => i.user);
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr className="tableRow">
            <th>Name</th>
            <th> Address</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i} className="tableRow">
              <td>{user.name}</td>
              <td> {user.address}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.message}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
