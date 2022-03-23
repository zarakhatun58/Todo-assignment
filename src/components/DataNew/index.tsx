import React from 'react';

const DataNew = () => {

    var raw = JSON.stringify({
        "site": "taqeef.sharepoint.com,3dd0a8d8-306f-405c-a5d5-a2ae444e509a,567818a8-260f-4101-838c-0fddd99e7954",
        "list": "5134a2d9-d42f-4dd4-a848-91dc16186d4a",
        "email": "testmax05@yahoo.com"
    });

    fetch('http://40.117.174.202//graph-api')
        .then(data => {
            return data.json();
        })
        .then(post => {
            console.log(post.title);
        });

    return (
        <div>
            <h3> Hello</h3>
        </div>
    );
};

export default DataNew;