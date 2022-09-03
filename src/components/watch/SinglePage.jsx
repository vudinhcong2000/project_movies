import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { homeData, recommended } from '~/Data';
import Upcomming from '../upcomming/Upcomming';
import './watch.css';

const SinglePage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [rec, setRec] = useState(recommended);

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id));
        console.log(item);
        if (item) {
            setItem(item);
            // console.log(item);
        }
    }, [id]);
    return (
        <>
            {item ? (
                <>
                    <section className="singlePage">
                        <div className="singleHeading">
                            <h1>{item.name}</h1>
                            <span> | {item.time} | </span>
                            <span>HD</span>
                        </div>
                        <div className="container">
                            <iframe
                                src={item.video}
                                frameborder="0"
                                allow="accelerometer"
                                autoplay
                                clipboard-write
                                allowFullScreen
                            ></iframe>
                            <div className="para">
                                <h3>Date: {item.date}</h3>
                                <p>{item.desc}</p>
                                <p>
                                    Get access to the direct Project Overview with this report. Just by a quick glance,
                                    you’ll have an idea of the total tasks allotted to the team, number of milestones
                                    given & completed, total Links created for the project and the total time taken by
                                    all the users. Each section would elaborate the data further, if chosen.
                                </p>
                                <p>
                                    Get access to the direct Project Overview with this report. Just by a quick glance,
                                    you’ll have an idea of the total tasks allotted to the team, number of milestones
                                    given & completed, total Links created for the project and the total time taken by
                                    all the users. Each section would elaborate the data further, if chosen.
                                </p>
                                <p>
                                    Get access to the direct Project Overview with this report. Just by a quick glance,
                                    you’ll have an idea of the total tasks allotted to the team, number of milestones
                                    given & completed, total Links created for the project and the total time taken by
                                    all the users. Each section would elaborate the data further, if chosen.
                                </p>
                            </div>
                            <div className="social">
                                <h3>Share: </h3>
                                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" />
                                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" alt="" />
                                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" alt="" />
                            </div>
                        </div>
                    </section>
                    <Upcomming items={rec} title="Recommended Movies" />
                </>
            ) : null}
        </>
    );
};

export default SinglePage;
