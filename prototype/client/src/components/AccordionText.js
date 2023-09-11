import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

function AccordionText() {
    return (
        <div className='accord'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About</Accordion.Header>
                    <Accordion.Body>
                        This is a computer vision application used to sort waste 
                        into three main categories: recycling, trash, and compost. 
                        As of now, the backend runs on an edge node hosted on the 
                        Darcy Cloud. When an item is held up to the camera connected 
                        to the edge node, a machine learning model trained on thousands 
                        of different waste images provides the type of waste, and 
                        its confidence in the given prediction. Currently, the model's 
                        prediction accuracy is about 70%.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Contribution</Accordion.Header>
                    <Accordion.Body>
                        The dataset used to train this object detection model is 
                        open for contribution on Github <a href="https://github.com/ranvirsinghst/waste-sorting/tree/main">here</a>.
                        Anyone is welcome to add their own images and labeling to the 
                        dataset, so that it can eventually be more accurate.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Credits</Accordion.Header>
                    <Accordion.Body>
                        This project was developed as part of my internship at Edgeworx, Inc. 
                        in Berkeley, California. I used the DarcyAI Python package to create 
                        the pipeline involving my machine learning model, and React for this 
                        website. The datasets I combined to train my model are:
                        <ul>
                            <li>MJU-Waste: Tao Wang, Yuanzheng Cai, Lingyu Liang, Dongyi Ye. A Multi-Level Approach to Waste Object Segmentation. Sensors 2020, 20(14), 3816.</li>
                            <li>Gary Thung - <a href="https://github.com/garythung/trashnet">TrashNet</a></li>
                            <li>Sarah Frost - <a href="https://github.com/sarahmfrost/compostnet">CompostNet</a></li>
                            <li>Kritik Seth - <a href="https://www.kaggle.com/datasets/kritikseth/fruit-and-vegetable-image-recognition">Fruits and Vegetables Image Recognition</a></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default AccordionText