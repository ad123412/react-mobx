import React, {Component} from "react";
import elasticsearch from "elasticsearch";
import {observer} from 'mobx-react';

let client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '7.6', // use the same version of your Elasticsearch instance
});


@observer
class Plays extends Component {

    async componentDidMount() {
        const response = await client.search({
            index: 'shakespeare',
            body: {
                "query": {
                    "bool": {
                        "must": [
                            {
                                "match": {
                                    "play_name": "Henry IV"
                                }
                            },
                            {
                                "match": {
                                    "speaker": "WESTMORELAND"
                                }
                            }
                        ]
                    }
                },
                "size": 50
            }
        });
        this.props.store.plays = response.hits.hits;
    }

    render() {
        return (
            <div>
                {this.props.store.plays.map(play =>
                    <div key={play._id} style={{border: "2px solid grey", borderRadius: "5px"}}>
                        <h2>{play._source.play_name}</h2>
                        <p>{play._source.speaker}</p>
                        <p>{play._source.text_entry}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Plays;