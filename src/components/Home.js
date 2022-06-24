import React from "react";
import EventsHome from "./EventsHome";
import NewsHome from "./NewsHome";

const Home = (props) => {
    return (
        <>
            <NewsHome />
            <EventsHome />
            <div className="heading">
                <div className="MnC-title">What MnC is?</div>
            </div>
            <div className="details">
                <div className="MnC-detail">
                    Mathematics & Computing Engineering is an amalgamation of mathematics with computer science and financial engineering. Covering the major areas in demand today, this course is of utmost value to the aspiring engineers. The course provides students with comprehensive theoretical knowledge and also practical training in computer science, numerical computing and mathematical finance. This programme has been introduced due to the need for sophisticated mathematics for modern scientific investigations and technological developments. The curriculum is designed to provide students with in depth theoretical background and practical training in computer science, numerical computing and mathematical finance.
                </div>
                <br />
                <br />
                <div className="MnC-detail">
                    Indian Institute of Technology defines the course as a unique programme and the first of its kind in the country. The curriculum for this program is designed to meet the need of sophisticated mathematics in modern scientific investigations and technological innovations. The programme has three components: mathematics, computing and financial engineering which are perfectly blended so that the strong mathematical and analytical components that are in-built in the curriculum form the basis on which the technological aspects of computing and finance are developed. Consequently, the programme, which is run by a team of committed faculty as instructors, produces a group of students with multiple skills in mathematics, computer science and financial engineering. The course emphasizes on training the students in various aspects of Theoretical Computer Science, Computational Techniques, Mathematical Modeling, Simulation, Probabilistic and Statistical Tools.
                </div>
            </div>
        </>
    );
};


export default Home;
