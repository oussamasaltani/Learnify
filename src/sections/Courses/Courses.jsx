import React from 'react'
import { Star, Clock, BookOpen, ArrowRight } from "lucide-react";
import UI_UX from "../../assets/images/UI-UX.jpg";
import ProjectDesign from "../../assets/images/Software Engineering.jpg";
import WebDevelopment from "../../assets/images/Web-Development.jpg";
import './Courses.css'


function Courses() {
    const CoursesData = [
        {
            id: 1,
            img: UI_UX,
            department: "Design Academy",
            title: "UI/UX Masterclass",
            rating: "4.8",
            description:
                "Design stunning interfaces and master user psychology. Go beyond aesthetics to create products that solve real problems and delight users.",
            sales: "120+ Sales",
            originalPrice: 11.99,
            discountPrice: 4.99,
            duration: "22h 30m",
            lessons: "64 Lessons",
        },

        {
            id: 2,
            img: ProjectDesign,
            department: "Software Engineering",
            title: "Strategic Project Architecture",
            rating: "4.6",
            description:
                "Bridge the gap between ideas and execution. Learn to architect scalable software systems and lead development teams with confidence.",
            sales: "190+ Sales",
            originalPrice: 15.99,
            discountPrice: 7.99,
            duration: "30h 30m",
            lessons: "121 Lessons",
        },

        {
            id: 3,
            img: WebDevelopment,
            department: "Full-Stack Development",
            title: "Modern Web Development",
            rating: "4.9",
            description:
                "Fast-track your journey to becoming a frontend developer. Master the core technologies of the web and build a portfolio of live projects.",
            sales: "320+ Sales",
            originalPrice: 10.99,
            discountPrice: 8.99,
            duration: "16h 40m",
            lessons: "107 Lessons",
        },
    ];

    return (
        <div className='courses-container'>
            <div className="courses-header-content" data-aos="fade-up" data-aos-duration="600">
                <span data-aos="fade-down" data-aos-delay="100">Explore Programs</span>
                <h2 data-aos="zoom-in" data-aos-delay="200">Master In-Demand Skills</h2>
                <p data-aos="fade-up" data-aos-delay="300">
                    Advance your career with expert-led courses designed for real-world success.
                    From creative design to technical development, start your journey today.
                </p>
            </div>
            <div className="course-card-content">
                {CoursesData.map((course, index) => (
                    <div key={course.id}
                        data-aos="zoom-in"
                        data-aos-delay={150 * (index + 1)}
                        data-aos-duration="600">
                        <div className="course-card">
                            <div className="course-card-image">
                                <img src={course.img} alt={course.title} />
                            </div>
                            <div className="course-details">
                                <div className="department-rating">
                                    <h3 className="department">{course.department}</h3>
                                    <span className="rating">
                                        <Star size={20} /> {course.rating}
                                    </span>
                                </div>
                                <span className="title">{course.title}</span>
                                <p className="description">{course.description}</p>
                                <span className="sales">{course.sales}</span>
                                <div className="price">
                                    <span className="original-price">
                                        <del>${course.originalPrice}</del>
                                    </span>
                                    <span className="discount-price">${course.discountPrice}</span>
                                </div>
                                <div className="course-duration-lessons">
                                    <span>
                                        <Clock size={16} />
                                        {course.duration}
                                    </span>
                                    <span>
                                        <BookOpen size={16} />
                                        {course.lessons}
                                    </span>
                                </div>
                                <a href="#!" className="btn-view-course">View Course<ArrowRight size={16} /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses