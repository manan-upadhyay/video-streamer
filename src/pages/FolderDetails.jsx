import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Container } from "@mui/material";
import ReactPlayer from "react-player"; //
import { useIsMobile } from "../hooks/withIsMobile";

const FolderDetail = () => {
  const location = useLocation();
  const { isMobile } = useIsMobile();
  const currentFolder = location.state?.currentFolder;

  console.log("isMobile", isMobile);
  return (
    <>
      <div className="flex-wrap w-full gap-5 header flex-left">
        <Link to="/" className="px-5 py-12 bg-yellow">
          <ArrowBackIosNewIcon style={{ color: "white" }} fontSize="medium" />
        </Link>
        <img
          src={currentFolder.thumbnail}
          alt={currentFolder.title}
          className="w-[200px] h-[110px] mt-[9px]"
        />
        <div className="pt-2 text-theme">
          <h1 className="text-2xl">This is the folder title</h1>
          <p>
            This is the folder description that you saw on the card section!
          </p>
        </div>
      </div>
      <Container
        maxWidth="lg"
        className="flex flex-col gap-5 bg-blue-300 w-[100%] xs:flex-row flex-center py-5 xs:py-0"
      >
        <div className="px-8 py-5">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width={isMobile ? 270 : 600}
            height={isMobile ? 185 : 350}
          />
        </div>
        <div className="custom-input">
          <textarea
            name="notepad"
            cols="30"
            rows="10"
            placeholder="Type here to take notes..."
          ></textarea>
        </div>
      </Container>
    </>
  );
};

export default FolderDetail;
