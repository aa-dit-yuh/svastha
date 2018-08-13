import React from 'react'
import { Container, Content, Header, Icon, Input, Item, List, ListItem, Text } from 'native-base'
import Communications from 'react-native-communications'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      filteredFirstaid: this.props.firstaid.firstaid,
    }
  }

  onSearch = (searchTerm) => {
    const filteredFirstaid = this.props.firstaid.firstaid.filter(fa => {
      return fa.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({ searchTerm, filteredFirstaid })
  }

  render() {
    const { firstaid } = this.props
  
    return (
      <Container>
        <Header searchBar rounded noShadow>
          <Item>
            <Icon name='search' />
            <Input placeholder='Search' onChangeText={this.onSearch} />
          </Item>
        </Header>
        <Content>
          <List>
            {this.state.filteredFirstaid.map(fa => (
              <ListItem onPress={() => Communications.web(fa.link)}>
                <Text>{fa.name}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

export default Search
