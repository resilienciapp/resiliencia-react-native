import React, { createContext, useContext, useEffect, useState } from 'react'
import { useCategories } from 'src/gql/hooks/useCategories'

interface Props {
  selectedCategories: boolean[]
  toggleCategorySelected(index: number): () => void
}

const SelectedCategoriesContext = createContext({} as Props)

export const SelectedCategoriesProvider: React.FunctionComponent = ({
  children,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<boolean[]>([])
  const { categories } = useCategories()

  useEffect(() => {
    setSelectedCategories(Array(categories.length).fill(true))
  }, [categories.length])

  const toggleCategorySelected = (index: number) => () => {
    const newSelectedCategories = [...selectedCategories]
    newSelectedCategories[index] = !newSelectedCategories[index]
    setSelectedCategories(newSelectedCategories)
  }

  return (
    <SelectedCategoriesContext.Provider
      value={{ selectedCategories, toggleCategorySelected }}>
      {children}
    </SelectedCategoriesContext.Provider>
  )
}

export const useSelectedCategoriesContext = () =>
  useContext(SelectedCategoriesContext)
