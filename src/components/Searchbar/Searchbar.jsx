import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {

  state = {
    search: '',
  };

searchResult = e =>{
  this.setState({
    search: e.currentTarget.value,
  })
};

handleSubmit = e => {
  e.preventDefault();
  const {search} = this.state;
  const {onSubmit} = this.props;

  onSubmit(search);
  this.setState({
    search: '',
  })
};

  render() {
const {search} = this.state;
return (

  <SearchbarContainer>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchFormBtn type="submit"> <BsSearch/>
      <SearchFormBtnLabel>Search</SearchFormBtnLabel>
    </SearchFormBtn>

    <SearchFormInput
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={search}
      onChange={this.searchResult}
    />
  </SearchForm>
</SearchbarContainer>
);
}
};



Searchbar.propTypes ={
  onSubmit: PropTypes.func.isRequired,
};