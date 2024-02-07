import React from "react";
import PropTypes from "prop-types";
import InlineSVG from "react-inlinesvg";

import TitleLabel from "../TitleLabel";
import sortImg from "../../assets/icons/sort.svg";

const Table = ({ icon, title, columns, data }) => {
  return (
    <div className={`h-full p-[30px] bg-white rounded-[10px] shadow`}>
      <TitleLabel icon={icon} title={title} />
      <table className="mt-[14px]">
        <thead className="bg-[#EAF0F2] flex flex-row justify-start">
          {columns.map((item, key) => {
            return (
              <tr key={key}>
                <th
                  className="py-3 pr-[10px] flex flex-row justify-between items-center"
                  style={{ width: `${item.width}px` }}
                >
                  <div className="text-center text-black text-sm font-normal font-['Afek 1.5 AAA']">
                    {item.title}
                  </div>
                  <InlineSVG src={sortImg} className="cursor-pointer" />
                </th>
              </tr>
            );
          })}
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr className="flex justify-start" key={key}>
              {Object.keys(item).map((index, id) => (
                <td
                  className="flex justify-start py-3.5 pr-2.5
                            border border-gray-100 text-right text-black text-[15px] font-normal font-['Afek 1.5 AAA']"
                  style={{ width: `${item[index].width}px` }}
                  key={id}
                >
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
