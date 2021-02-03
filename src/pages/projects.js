import React from "react";
import Title from "../components/title"
import Header from "../components/header"
import Layout from "../components/layout"
import Video from "../components/video"
import "./pagesStyle.css"

import Chess from "../images/ChessBot.png";
import Paths from "../images/CampusPaths.png";
import Image from "../components/image";

import ContentACPS from "../images/artistic_content_photograph_style/seattle_watercolor_content.png"
import StyleACPS from "../images/artistic_content_photograph_style/seattle_style.png"
import ResultACPS from "../images/artistic_content_photograph_style/seattle_watercolor_content_seattle_style.png"
import ContentPCPS from "../images/photograph_content_photograph_style/seattle_content.png"
import StylePCPS from "../images/photograph_content_photograph_style/nyc_style.png"
import ResultPCPS from "../images/photograph_content_photograph_style/seattle_content_nyc_style.png"
import ContentSR from "../images/super_resolution/cat_blur_content.png"
import StyleSR from "../images/super_resolution/cat_style.png.png"
import ResultSR from "../images/super_resolution/cat_blur_content_cat_style.png.png"

export default function Projects() {
    return (
        <Layout>
            <Title titleText="Projects" />
            <div className="center">
                <p>Here are some of the projects I am working on.</p>
            </div>
            <Header id="NeuralTransfer" headerText="Neural Style Transfer Experiments"/>
            <p>
                Neural style transfer is a way to compose a given image with the style of another.
                As discussed in the paper “A Neural Algorithm of Artistic Style” by Leon A. Gatys, Alexander S. Ecker
                and Matthias Bethge, the general idea behind Neural-Transfer requires that we take a content-image,
                a style-image, and an input image, which is the same as the content-image, and then transform the
                input image to minimize its content-distance with the content-image and its style-distance with
                the style-image.
            </p>
            <p>
                The algorithm uses Convolutional Neural Networks to apply filters to the input image in order to
                transform it into various representations that emphasize certain features. Incidentally, higher
                layers in the CNN are better at filtering for the high-level contents of the image, such as the
                objects and their arrangements in the image, while disregarding the exact pixel values of the
                input. Preserving the content in the content-image is accomplished by minimizing the mean-squared
                distance between the feature maps of the input image and the content-image, and we can generate
                the style of the style-image by minimizing the mean-squared distance between the entries of the
                gram matrix from the input image and the gram matrix of the style-image, where the gram matrix
                is the result of multiplying the reshaped version of the feature maps with its transpose.
            </p>
            <p>
                In general, many people would intuitively think about style as the manner in which an artist
                holistically expresses the art’s theme, where it cannot be reduced into independent colors and
                features. However, because style reconstruction involves finding feature correlations using a
                gram matrix, it seems that this Neural-Transfer model represents style as the texture of the
                image. So, I wanted to explore the performances of this Neural-Transfer implementation as outlined
                in the paper on various types of content-image and style-image pairings, where the style-images
                may not have a uniformly artistic style, in order to test its ability to reconstruct style as we
                know it instead of just the image’s texture.
            </p>
            <p>
                Neural style transfer is typically used to reproduce existing photographs with new artistic painting
                styles. In these experiments, however, I tested Neural-Transfer on less conventional combinations,
                such as artistic content-image paired with photograph style-image, photograph content-image paired
                with photograph style-image, and low-resolution content-image and high-resolution style-image.
            </p>
            <p>
                First, I experimented with using an artistic painting as the content-image and a photograph as the
                style-image, because I was interested to see whether the neural network would produce a version of
                the artistic content-image that looks more realistic. I chose a watercolor drawing of Seattle as
                the content-image, and I picked a raw and unedited photograph of Seattle as the style-image, hoping
                to bring the watercolor image to real life.
            </p>
            <p>The three images are shown below.</p>
            <Image imgSrc={ContentACPS}/>
            <Image imgSrc={StyleACPS}/>
            <Image imgSrc={ResultACPS}/>




            <Header id="Max&Program" headerText="Max&Program"/>
            <p>
                As someone who loves powerlifting, I am fascinated by the many variations of effective
                training programs that powerlifting coaches put out online, and I enjoy analyzing these different
                programs to learn about programming for strength training.
            </p>
            <p>
                Through years of experience using various training programs, I realized that despite being diverse
                in their design, all effective programs share the same scientific principles of strength training. I
                figured it would be extremely helpful for lifters to use an app that would create customizable training
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
                be left as invariants. However, I will continue improving the design as I learn more about effective
                powerlifting programming.
            </p>
            <p>Below is a basic demonstration of how I created the StrongLifts 5x5 program.</p>
            <Video
                videoSrcURL="https://www.youtube.com/embed/J9yvcUJ4srY?loop=1&playlist=J9yvcUJ4srY"
                videoTitle="StrongLifts 5x5 Remake"
            />
            <p>Below is a demonstration of using the 1RM calculator.</p>
            <Video
                videoSrcURL="https://www.youtube.com/embed/-QGvSEZoLeQ?loop=1&playlist=-QGvSEZoLeQ"
                videoTitle="1RM Calculator"
            />
            <br/>
            <hr/>
            <br/>
            <Header id="Chess" headerText="Chess Bot"/>
            <p>
                For Data Structures and Parallelism (CSE 332), my partner and I implemented a chess bot algorithm in
                Java that efficiently searches for the optimal move up to 6 plys, using both sequential and parallel Minimax.
            </p>
            <p>
                We experimented with the sequential and parallel Minimax algorithms on 63 fens, or board states,
                and discovered that using the optimal sequential cutoff for the parallel searching algorithm, our
                parallel searcher performed remarkably, with average runtimes three times faster than those of our
                sequential searcher.
            </p>
            <Image imgSrc={Chess}/>
            <br/>
            <hr/>
            <br/>
            <Header id="Paths" headerText="Campus Paths"/>
            <p>
                For Software Development and Implementation (CSE 331), I explored the Model-View-Controller design
                pattern where I created a graphical user interface that allows users to find the shortest path between
                two points on a map of the University of Washington, Seattle campus.
            </p>
            <p>
                I implemented a Spark Java server for the backend that allows other applications to send requests to
                query data from a shortest-path finding applications. I used React to design the GUI that draws the
                shortest path between two user-selected buildings on the campus map.
            </p>
            <Image imgSrc={Paths}/>
        </Layout>
    );
}
