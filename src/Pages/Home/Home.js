import React, { useEffect, useState } from "react";
import SearchForm from "../../Components/Form/SearchForm";
import Spinner from "../../Components/Spinner/Spinner";
import ExpCard from "../../Components/Card/ExpCard";
import { Link } from "react-router-dom";
import HomeCard from "../../Components/Card/HomeCard";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);
  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        setAllExp(data);
      });
  }, []);
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20 mt-5">
      <div>
        <SearchForm></SearchForm>
      </div>
      <div  className="flex-1">
        <div>
          <div className="font-bold text-1xl">Home Cards</div>
          <div className="flex justify-between">
            <p>Experiences</p>
            <Link to={"/comingSoon"}>See All</Link>
          </div>
          <div className="flex flex-wrap">
            {[...Array(3)].slice(0, 4).map((all, i) => (
              <HomeCard></HomeCard>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="font-bold text-1xl">Expo Cards</div>
          <div className="flex justify-between">
            <p>Experiences</p>
            <Link to={"/comingSoon"}>See All</Link>
          </div>
          <div className="flex flex-wrap">
            {allExp.slice(0, 4).map((all, i) => (
              <ExpCard key={i} exp={all}></ExpCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
