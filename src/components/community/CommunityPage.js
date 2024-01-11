import axios from "axios";
import { useState, useEffect } from "react";
import CommunityCard from "./CommunityCard";

export default function CommunityPage() {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    // get All blogs
    const getAllDiary = async () => {
      try {
        const { data } = await axios.get("/diary");
        if (data?.success) {
          setDiary(data?.diary);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllDiary();
  }, []);
  return (
    <>
      <div className="flex-wrap">
        {diary.map((diary) => {
          return (
            <CommunityCard
              id={diary._id}
              title={diary.title}
              img={diary.image}
              date={diary.date}
              location={diary.location}
              description={diary.description}
            />
          );
        })}
      </div>
    </>
  );
}
