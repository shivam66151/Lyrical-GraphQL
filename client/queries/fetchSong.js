import gql from 'graphql-tag'

export default gql`
query Songquery($id: ID!) {
  song(id: $id) {
    id
    title
  }
}
`