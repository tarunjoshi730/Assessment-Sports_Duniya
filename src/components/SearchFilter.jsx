import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchFilter = ({ filters, setFilters, uniqueAuthors }) => {
  return (
    <div>
      {/* Global Search */}
      <div className="relative w-full max-w-md mb-4">
        <input
          type="text"
          placeholder="Search"
          value={filters.keyword}
          onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
          className="w-full border p-2 rounded pl-10  dark:bg-gray-800 dark:text-white"
        />
        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4">
        <select
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
          className="border p-2 rounded w-full lg:w-1/4 max-h-32 overflow-y-auto  dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Authors</option>
          {uniqueAuthors.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={filters.startDate}
          onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          className="border p-2 rounded w-full lg:w-1/4  dark:bg-gray-800 dark:text-white"
        />
        <input
          type="date"
          value={filters.endDate}
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          className="border p-2 rounded w-full lg:w-1/4  dark:bg-gray-800 dark:text-white"
        />
        {/* <input
          type="text"
          placeholder="Type (e.g., news, blogs)"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="border p-2 rounded w-full lg:w-1/4"
        /> */}
      </div>
    </div>
  );
};

export default SearchFilter;
