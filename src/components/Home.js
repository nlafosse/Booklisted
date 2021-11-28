import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Books from './Books';

const Home = () => {
    const [searchText, setSearchText] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);

    const handleSearch = () => {
            let searchTextMinusSpaces = searchText.split(' ').join('_');
            setSearchText(searchTextMinusSpaces);
            setRedirect(true);
    }
    return (
        <div>
            <div className="searchBox">
                <input  
                    type='text' 
                    value={searchText}
                    placeholder={"search books, author, isbn"}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <Route exact path='/books/:bookname' component={() => <Books searchText={searchText} setRedirect={setRedirect} setSearchText={setSearchText}/>} />
                {redirect && <Redirect to={`/books/${searchText}`} />}
            </div>
        </div>
    )
}

export default Home;