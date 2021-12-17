import { gql, useQuery } from '@apollo/client'
import { CategoryFragment } from 'src/gql/fragments/category'
import { CategoriesQuery as CategoriesQueryData } from 'src/gql/types'

const CategoriesQuery = gql`
  query CategoriesQuery {
    categories {
      ...Category
    }
  }
  ${CategoryFragment}
`

export const useCategories = () => {
  const { data } = useQuery<CategoriesQueryData>(CategoriesQuery)

  return { categories: data?.categories ?? [] }
}
