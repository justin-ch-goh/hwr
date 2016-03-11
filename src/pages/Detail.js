import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component {
    constructor(props) {
        super(props);

        this.state = { commits: [] };
    }

    componentWillMount() {
        ajax.get('https://api.github.com/repos/facebook/react/commits')
            .end((error, response) => {
                if (!error && response) {
                    console.dir(response.body);
                    this.setState({ commits: response.body })
                } else {
                    console.log('Error fetching from GitHub');
                }
            }
        );

    }


    render() {
        return (<div>
            {this.state.commits.map((commit, index) => {
                const author = commit.author ? commit.author.login : 'Anonymous';

                (<p key={index}>
                    <strong>{author}: </strong>
                    <a href={commit.html_url}>{commit.commit.message}</a>
                </p>)
            })}
        </div>); //binding this as in Detail rather than button so that this.buttonClicked makes more sense than button.buttonClicked
    }
}

export default Detail;