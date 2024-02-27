import Course from "./course";
import { useState } from "react";

function Courses({ courses, removeCourse }) {
    function randomİndex() {
        const randomIndex = Math.floor(Math.random() * 5); // 0 ile 4 arasında rastgele bir sayı üretir

        setİndex(randomIndex);
    }
    const [index, setİndex] = useState(0)

    function prevButton() {
        if (index == 0) {
            setİndex(4)

        } else {
            setİndex(index - 1);

        }
    }

    function nextButton() {
        if (index == 4) {
            setİndex(0);
        } else {
            setİndex(index + 1)
        }

    }
    const course = courses[index]
    console.log(index)

    return (<>
        <div className="mainDiv">
            <div>
                <h2 className="title">KURSLARIM</h2>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="cardTitlePRice">
                        <h2>{course.title}</h2>
                        <h4>{course.price} TL</h4>
                    </div>

                    <div className="content">
                        <p>{course.content}</p>
                    </div>
                    <div className="butonDüzen">
                        <button onClick={() => { prevButton() }}>Önceki</button>
                        <button onClick={() => { randomİndex() }}>Rastgele kurs</button>
                        <button onClick={() => { nextButton() }}>Sonraki</button>
                    </div>

                </div>

                {/* {
                courses.map((course , index)=>{
                    return <Course key={index} course={course} remove={removeCourse}/>
                })
            } */}
            </div>
        </div>


    </>);
}

export default Courses;