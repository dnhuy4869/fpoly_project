import React from "react";
import { faker } from '@faker-js/faker';
import CommentDetail from "./components/CommentDetail";
import "./App.css";
import ApprovalCard from "./components/ApprovalCard";
import SeasonDisplay from "./components/SeasonDisplay";

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        name: faker.internet.userName(),
        avatar: faker.image.avatar(),
        date: faker.date.birthdate(),
    };
}

const App = () => {
    const USERS = faker.helpers.multiple(createRandomUser, {
        count: 5,
    });

    return (
        <div className="container">
            {/* <div className="">
                {
                    USERS.map((user, index) => {
                        return (
                            <CommentDetail key={index} name={user.name} avatar={user.avatar} date="Today 6:00PM" content="Nice blog post" />
                        )
                    })
                }
            </div> */}
            {/* <div className="">
            {
                    USERS.map((user, index) => {
                        return (
                            <ApprovalCard key={index} name={user.name} avatar={user.avatar} date="Today 6:00PM" content="Nice blog post" />
                        )
                    })
                }
            </div> */}
            <SeasonDisplay />
        </div>
    )
}

export default App;