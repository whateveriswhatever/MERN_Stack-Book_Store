import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    axios
      .post(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Edited book successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        enqueueSnackbar(
          "Oops. There must be something wrong!. Please check your console to see further detail",
          { variant: "error" }
        );
        alert("An error happened. Pls check the console");
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert(
          "Oops!. There must something be wrong. Please check your console"
        );
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit your books as you wish</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ border: "1px solid #000" }}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ border: "1px solid #000" }}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Published Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            style={{ border: "1px solid #000" }}
          />
        </div>
        <SavedButton callback={handleSaveBook} />
      </div>
    </div>
  );
};

const SavedButton = ({ callback }) => {
  return (
    <button
      className="p-2 bg-sky-300 m-8"
      onClick={callback}
      style={{ backgroundColor: "aquamarine", color: "#fff", width: "4rem" }}
    >
      SAVE
    </button>
  );
};

export default EditBooks;
