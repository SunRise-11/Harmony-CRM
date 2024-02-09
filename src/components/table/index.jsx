import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

import TitleLabel from "../labels/TitleLabel";
import sortImg from "../../assets/icons/sort.svg";

const Table = ({ icon, title, columns, data }) => {
  return (
    <div className="table">
      <TitleLabel icon={icon} title={title} />
      <table>
        <thead>
          {columns.map((item, key) => {
            return (
              <tr key={key}>
                <th style={{ width: item.width }}>
                  <div className="table-title">{item.title}</div>
                  <InlineSVG src={sortImg} className="table-svg" />
                </th>
              </tr>
            );
          })}
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr key={key}>
              {Object.keys(item).map((index, id) => (
                <td style={{ width: item[index].width }} key={id}>
                  {item[index].title}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
};

export default Table;
