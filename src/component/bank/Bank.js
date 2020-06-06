import React, {Component} from 'react';
import SearchAccount from "./SearchAccount";
import Accounts from "./Accounts";
import elasticsearch from "elasticsearch";

let client = new elasticsearch.Client({
    host: 'localhost:9200',
    //log: 'trace',
    apiVersion: '7.6', // use the same version of your Elasticsearch instance
});

class Bank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            searchText: ''
        }
    }

    async componentDidMount() {
        const response = await client.search({
            index: 'bank',
            body: {
                "query": {"match_all": {}},
                "size": 100
            }
        });
        this.setState(prevState => ({
            accounts: response.hits.hits
        }), () => {
            console.log('accounts retrieved ...')
        })
    }

    setSearchText = (event) => {
        const {value} = event.target;
        this.setState(prevState => {
            return {
                searchText: value
            }
        }, () => {
            console.log(this.state.searchText);
        })
    };

    render() {
        const filteredAccounts = this.state.searchText ?
            this.state.accounts.filter(acc => {
                return acc._source.firstname.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
                    acc._source.lastname.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
                    acc._source.address.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
                    acc._source.employer.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
                    acc._source.email.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
                    acc._source.city.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
                    acc._source.state.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
                    acc._source.gender.toLowerCase().includes(this.state.searchText.toLowerCase())
            })
            : this.state.accounts
        return (
            <div>
                <SearchAccount setSearchText={this.setSearchText}/>
                <Accounts accounts={filteredAccounts}/>
            </div>
        );
    }
}

export default Bank;