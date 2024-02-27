import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import Courses from './courses'
import Loading from './loading'

function App() {






  const deleteCourse = (id) => {
    const afterDeleted = courses.filter((course) => course.id !== id);
    setCourses(afterDeleted);
  }

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchCourse = async () => {

    setLoading(true)
    try {
      const response = await axios.get('http://localhost:3000/courses')
      setCourses(response.data);
      setLoading(false)

    }
    catch (error) {
      setLoading(false)


    }




  }

  let durum = courses.length < 1;



  useEffect(() => {
    fetchCourse();
  }, [])
  return (
    <>

      {
        durum ?
          <div className="kart">
            <div className='durum'>
              <h2>Kurslar Silindi</h2>
              <button className='durumButon' onClick={()=>{fetchCourse()}}>Yenile</button>
            </div>
          </div>
          : undefined
      }
      {
        loading ? (
          <Loading />
        ) : (


          <Courses courses={courses} removeCourse={deleteCourse} />)
      }

    </>
  )
}

export default App
