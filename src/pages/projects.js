import React from "react";
import Title from "../components/title"
import Header from "../components/header"
import Layout from "../components/layout"
import Video from "../components/video"
import "./pagesStyle.css"

export default function Projects() {
    return (
        <Layout>
            <Title titleText="Projects" />
            <div className="center">
                <p>Here are some of the projects I am working on.</p>
            </div>
            <Header headerText="Max&Program"/>
            <p>
                As someone who loves powerlifting, I am fascinated by the creativity and variations of effective
                training programs that powerlifting coaches put out online, and I enjoy analyzing these different
                programs to learn about programming for strength training.
            </p>
            <p>
                Through years of experience using various training programs, I realized that despite being diverse
                in design, all effective programs share the same scientific principles of strength training. I figured
                it would be extremely helpful for lifters to use an app that would create customizable training
                programs but would also adhere to the scientific principles for effective programming; unfortunately,
                I could not find any fitness app that satisfies this criteria to my liking.
            </p>
            <p>
                So, I built the app "Max&Program", a powerlifting workout tracker that uses the foundational principles
                strength training to create effective strategies for building strength but also offers the appropriate
                amount of flexibility to allow users to customize their own training programs. I used React Native
                for the front-end design and Spark Java for the back-end.
            </p>
            <p>
                Preserving invariants while giving clients the freedom to be creative in their implementations within
                the specified constraints is extremely important in computer science, and this idea is also the basis
                of the design decisions I made when developing this app. Because my intended audience for this app
                may consist of lifters with a varying range of training experience, I wanted to abstract the underlying
                scientific training principles this app uses in order to simplify the program designing process for
                novice lifters who do not necessarily need to understand how the app handles the progression strategy
                of their own programs. As a result, it was a challenge to determine the best balance of determining
                which parts of the program creation process should be up to the user's creativity and which parts should
                be left as invariants. However, I will continue improving the design as I learn more about
                how
                much creative freedom the app should give the users and how much of the program creation process should
                be
                allowing users
                enough freedom to be creative when designing their programs and
                keeping certain
                scientific training principles abstracted from the user
                (this was a challenge to find the right balance point, but i will continue
                improving this app as i continue learning about effective programming)
            </p>
            <Video
                videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ?loop=1&playlist=dQw4w9WgXcQ"
                videoTitle="Official Music Video on YouTube"
            />
        </Layout>
    );
}