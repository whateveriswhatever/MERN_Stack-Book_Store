import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
const BooksTable = ({ books }) => {
  return (
    <table
      className="w-full border-separate border-spacing-2"
      border="1"
      style={{
        border: "1px solid #000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <thead style={{ display: "flex", justifyContent: "center" }}>
        <tr>
          <th className="border border-slate-600 rounded-md">No.</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr
            key={book._id}
            className="h-8"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <td
              className="border border-slate-700 rounded-md text-center"
              style={{ fontWeight: "bold" }}
            >
              ( {index + 1} )
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div
                className="flex justify-center gap-x-4"
                style={{ display: "flex", marginLeft: "2rem" }}
              >
                <Link to={`/books/detail/${book._id}`}>
                  <BsInfoCircle
                    className="text-2xl text-green-800"
                    style={{ color: "rgb(22, 101, 52)" }}
                  />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete
                    className="text-2xl text-red-600"
                    style={{ color: "crimson" }}
                  />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
